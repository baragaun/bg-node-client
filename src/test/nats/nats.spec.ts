import * as jetstream from '@nats-io/jetstream';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest';

import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import nats from '../../nats/index.js';
import { isFeatureEnabled } from '../helpers/isFeatureEnabled.js';

describe.runIf(isFeatureEnabled('nats'))('nats as integrated into BgNodeClient', () => {
  describe('while not being connected', () => {
    it('should throw an error when not connected', async () => {
      const testStreamName = 'test_client_stream';
      const testSubject = 'test.client.subject';
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
      } as jetstream.StreamConfig;

      await expect(nats.createStream(streamConfig)).rejects.toThrow('not-available');
    });

    it('should close connection successfully', async () => {
      const config = libData.config();
      const natsServer = config?.nats && Array.isArray(config.nats?.servers) && config.nats?.servers.length > 0
        ? config.nats?.servers?.[0] || 'nats://localhost:4222'
        : 'nats://localhost:4222';
      await nats.init({
        servers: [natsServer],
        timeout: 5000,
        reconnectTimeWait: 1000,
      });
      const client = libData.natsClient();
      const testStreamName = 'test_client_stream';
      const testSubject = 'test.client.subject';

      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
      } as jetstream.StreamConfig;

      await nats.createStream(streamConfig);

      await client.close();
      expect(client.isConnected).toBe(false);
      await expect(nats.createStream(streamConfig)).rejects.toThrow('Not connected to NATS');
    });
  });

  describe('while being connected', () => {
    beforeAll(async () => {
      const config = libData.config();
      const natsServer = config?.nats && Array.isArray(config.nats?.servers) && config.nats?.servers.length > 0
        ? config.nats?.servers?.[0] || 'nats://localhost:4222'
        : 'nats://localhost:4222';
      await nats.init({
        servers: [natsServer],
        timeout: 5000,
        reconnectTimeWait: 1000,
      });
    });

    afterAll(async () => {
      try {
        await nats.close();
      } catch (error) {
        logger.error('natsClient.spec.afterAll: error.', { error });
      }
    });

    describe('createStream', () => {
      it('should create and access a stream', async () => {
        const client = libData.natsClient();
        const testStreamName = 'test_client_stream';
        const testSubject = 'test.client.subject';
        const streamConfig = {
          name: testStreamName,
          subjects: [testSubject],
          retention: 'limits',
          max_msgs: 100,
          storage: 'memory',
          num_replicas: 1,
        } as jetstream.StreamConfig;

        const streamInfo = await nats.createStream(streamConfig);
        expect(streamInfo).toBeDefined();
        expect(streamInfo.config.name).toBe(testStreamName);

        const jsm = await client.getJetStreamManager();
        const retrievedInfo = await jsm.streams.info(testStreamName);
        expect(retrievedInfo.config.name).toBe(testStreamName);
      });

      it('should update an existing stream when it already exists', async () => {
        const testStreamName = 'test_client_stream';
        const testSubject = 'test.client.subject';
        const initialConfig = {
          name: testStreamName,
          subjects: [testSubject],
          retention: 'limits',
          max_msgs: 100,
          storage: 'memory',
          num_replicas: 1,
        } as jetstream.StreamConfig;

        await nats.createStream(initialConfig);

        const updatedConfig = {
          name: testStreamName,
          subjects: [testSubject, 'test.stream.additional'], // Add another subject
          retention: 'limits',
          max_msgs: 200, // Increased max messages
          storage: 'memory',
          num_replicas: 1,
        } as jetstream.StreamConfig;

        const updatedInfo = await nats.createStream(updatedConfig);

        expect(updatedInfo).toBeDefined();
        expect(updatedInfo.config.name).toBe(testStreamName);
        expect(updatedInfo.config.subjects).toContain('test.stream.additional');
        expect(updatedInfo.config.max_msgs).toBe(200);
      });
    });

    describe('deleteStream', () => {
      it('should delete an existing stream', async () => {
        const client = libData.natsClient();
        const testStreamName = 'test_client_stream';
        const testSubject = 'test.client.subject';
        const streamConfig = {
          name: testStreamName,
          subjects: [testSubject],
          retention: 'limits',
          max_msgs: 100,
          storage: 'memory',
          num_replicas: 1,
        } as jetstream.StreamConfig;

        await nats.createStream(streamConfig);
        const jsm = await client.getJetStreamManager();

        const retrievedInfo = await jsm.streams.info(testStreamName);
        expect(retrievedInfo.config.name).toBe(testStreamName);

        const result = await nats.deleteStream(testStreamName);

        expect(result).toBe(true);
        await expect(jsm.streams.info(testStreamName)).rejects.toThrow();
      });

      it('should return false if trying to delete a nonexistent stream', async () => {
        const nonExistentStreamName = 'non_existent_stream';
        const result = await nats.deleteStream(nonExistentStreamName);

        expect(result).toBeFalsy();
      });
    });

    describe('and with an existing stream', () => {
      const testStreamName = 'test_client_stream';
      const testConsumerName = 'test_client_consumer';
      const testSubject = 'test.client.subject';

      beforeEach(async () => {
        const streamConfig = {
          name: testStreamName,
          subjects: [testSubject],
          retention: 'limits',
          max_msgs: 100,
          storage: 'memory',
          num_replicas: 1,
        } as jetstream.StreamConfig;

        await nats.createStream(streamConfig);
      });

      afterEach(async () => {
        const client = libData.natsClient();
        // Clean up
        if (client && client.isConnected) {
          try {
            await nats.deleteStream(testStreamName);
          } catch (error) {
            logger.error('afterEach.cleanUp.error: ', { error });
          }
        }
      });

      it('should create and access a consumer', async () => {
        const client = libData.natsClient();
        const consumerConfig = {
          durable_name: testConsumerName,
          ack_policy: 'explicit',
          filter_subject: testSubject,
        } as jetstream.ConsumerConfig;

        const consumerInfo = await nats.createConsumer(testStreamName, consumerConfig);
        expect(consumerInfo).toBeDefined();
        expect(consumerInfo.name).toBe(testConsumerName);

        const jsm = await client.getJetStreamManager();
        const retrievedInfo = await jsm.consumers.info(testStreamName, testConsumerName);
        expect(retrievedInfo.name).toBe(testConsumerName);
      });

      it('should delete a consumer', async () => {
        const client = libData.natsClient();
        const consumerConfig = {
          durable_name: testConsumerName,
          ack_policy: 'explicit',
        } as jetstream.ConsumerConfig;

        await nats.createConsumer(testStreamName, consumerConfig);

        const result = await nats.deleteConsumer(testStreamName, testConsumerName);
        expect(result).toBe(true);

        const jsm = await client.getJetStreamManager();
        await expect(jsm.consumers.info(testStreamName, testConsumerName)).rejects.toThrow();
      });

      it('should support publishing and consuming messages', async () => {
        const client = libData.natsClient();
        const streamConfig = {
          name: testStreamName,
          subjects: [testSubject],
          retention: 'limits',
          max_msgs: 100,
          storage: 'memory',
          num_replicas: 1,
        } as jetstream.StreamConfig;

        await nats.createStream(streamConfig);

        // Publish some messages directly using JetStreamClient
        // TODO: Refactor to use the MessageService
        const js = await client.getJetStreamClient();
        for (let i = 0; i < 5; i++) {
          await js.publish(testSubject, JSON.stringify({ id: i }));
        }

        const consumerConfig = {
          durable_name: testConsumerName,
          ack_policy: 'explicit',
          filter_subject: testSubject,
        } as jetstream.ConsumerConfig;

        await nats.createConsumer(testStreamName, consumerConfig);

        // Get consumer and read messages
        // TODO: Refactor to use getConsumer
        const consumer = await js.consumers.get(testStreamName, testConsumerName);
        const messages = await consumer.fetch({ max_messages: 5 });
        const receivedMessages = [];

        for await (const message of messages) {
          receivedMessages.push(JSON.parse(new TextDecoder().decode(message.data)));
          message.ack();
        }

        // Verify we got all messages
        // TODO: Refactor to use isUpToDate
        expect(receivedMessages).toHaveLength(5);
        for (let i = 0; i < 5; i++) {
          expect(receivedMessages[i].id).toBe(i);
        }
      });
    });
  });
});
