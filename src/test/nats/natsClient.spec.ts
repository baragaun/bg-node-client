import * as jetstream from '@nats-io/jetstream';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import NatsJetStreamClient from './NatsJetStreamClient.js';
import { ConsumerService } from './services/ConsumerService.js';
import { StreamService } from './services/StreamService.js';

describe('NatsJetStreamClient with Services', () => {
  let client: NatsJetStreamClient;
  let streamService: StreamService;
  let consumerService: ConsumerService;
  
  const testStreamName = 'test_client_stream';
  const testConsumerName = 'test_client_consumer';
  const testSubject = 'test.client.subject';

  beforeEach(async () => {
    client = new NatsJetStreamClient({
      servers: ['nats://localhost:4222'],
      timeout: 5000,
      reconnectTimeWait: 1000,
    });
    
    streamService = new StreamService(client);
    consumerService = new ConsumerService(client);
  });

  afterEach(async () => {
    // Clean up
    if (client.isConnected()) {
      try {
        // Delete the test stream (which will also delete all associated consumers)
        try {
          await streamService.deleteStream(testStreamName);
        } catch (error) {
          console.log("afterEach.cleanUp.error: ", error)
        }
        
        await client.close();
      } catch (error) {
        console.error('Error in test cleanup:', error);
      }
    }
  });

  describe('connection', () => {
    it('should connect to NATS server successfully', async () => {
      await client.connect();
      expect(client.isConnected()).toBe(true);
    });

  //   it('should reconnect if temporarily disconnected', async () => {
  //     // To test this I am manually restarting the container, and anticipating output like:
  //     // --------------------------------------------------------
  //     // Not connected or closed connection, attempting to connect.
  //     // Connected to NATS server: localhost:4222
  //     // should down the container
  //     // NATS disconnected
  //     // NATS reconnecting...
  //     // NATS reconnecting...
  //     // should up the container
  //     // NATS reconnecting...
  //     // NATS connection update: added "update"
  //     // NATS reconnect attempt: 1
  //     // --------------------------------------------------------

  //     await client.connect();
  //     expect(client.isConnected()).toBe(true);

  //     console.log('should down the container')
  //     await new Promise(resolve => setTimeout(resolve, 2000));
      
  //     // At this point, the connection should be lost
  //     expect(client.isConnected()).toBe(false);
  //     console.log('should up the container')

      
  //     // Wait for reconnection attempts (adjust timing as needed)
  //     await new Promise(resolve => setTimeout(resolve, 1000));

  //     expect(client.isConnected()).toBe(true);
  //   });
  });

  describe('client with StreamService', () => {
    beforeEach(async () => {
      await client.connect();
    });

    it('should create and access a stream', async () => {
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
        retention: 'limits',
        max_msgs: 100,
        storage: 'memory',
        num_replicas: 1,
      } as jetstream.StreamConfig;
      
      const streamInfo = await streamService.createStream(streamConfig);
      expect(streamInfo).toBeDefined();
      expect(streamInfo.config.name).toBe(testStreamName);
      
      const jsm = await client.getJetStreamManager();
      const retrievedInfo = await jsm.streams.info(testStreamName);
      expect(retrievedInfo.config.name).toBe(testStreamName);
    });

    it('should delete a stream', async () => {
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
        retention: 'limits',
        max_msgs: 100,
        storage: 'memory',
        num_replicas: 1,
      } as jetstream.StreamConfig;
      
      await streamService.createStream(streamConfig);
      const jsm = await client.getJetStreamManager();

      const retrievedInfo = await jsm.streams.info(testStreamName);
      expect(retrievedInfo.config.name).toBe(testStreamName);
      
      const result = await streamService.deleteStream(testStreamName);
      expect(result).toBe(true);
      
      await expect(jsm.streams.info(testStreamName)).rejects.toThrow();
    });
  });

  describe('client with ConsumerService', () => {
    beforeEach(async () => {
      await client.connect();
      
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
        retention: 'limits',
        max_msgs: 100,
        storage: 'memory',
        num_replicas: 1,
      } as jetstream.StreamConfig;
      
      await streamService.createStream(streamConfig);
    });

    it('should create and access a consumer', async () => {
      const consumerConfig = {
        durable_name: testConsumerName,
        ack_policy: 'explicit',
        filter_subject: testSubject,
      } as jetstream.ConsumerConfig;
      
      const consumerInfo = await consumerService.createConsumer(testStreamName, consumerConfig);
      expect(consumerInfo).toBeDefined();
      expect(consumerInfo.name).toBe(testConsumerName);
      
      const jsm = await client.getJetStreamManager();
      const retrievedInfo = await jsm.consumers.info(testStreamName, testConsumerName);
      expect(retrievedInfo.name).toBe(testConsumerName);
    });

    it('should delete a consumer', async () => {
      const consumerConfig = {
        durable_name: testConsumerName,
        ack_policy: 'explicit',
      } as jetstream.ConsumerConfig;
      
      await consumerService.createConsumer(testStreamName, consumerConfig);
      
      const result = await consumerService.deleteConsumer(testStreamName, testConsumerName);
      expect(result).toBe(true);
      
      const jsm = await client.getJetStreamManager();
      await expect(jsm.consumers.info(testStreamName, testConsumerName)).rejects.toThrow();
    });
  });

  describe('end-to-end workflow', () => {
    it('should support publishing and consuming messages', async () => {
      await client.connect();
      
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
        retention: 'limits',
        max_msgs: 100,
        storage: 'memory',
        num_replicas: 1,
      } as jetstream.StreamConfig;
      
      await streamService.createStream(streamConfig);
      
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
      
      await consumerService.createConsumer(testStreamName, consumerConfig);
      
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

  describe('error handling', () => {
    it('should throw an error when not connected', async () => {
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
      } as jetstream.StreamConfig;

      await expect(streamService.createStream(streamConfig)).rejects.toThrow('Not connected to NATS');
    });
  });

  describe('close', () => {
    it('should close connection successfully and affect services', async () => {
      await client.connect();
      expect(client.isConnected()).toBe(true);
      
      const streamConfig = {
        name: testStreamName,
        subjects: [testSubject],
      } as jetstream.StreamConfig;
      
      await streamService.createStream(streamConfig);
      
      await client.close();
      expect(client.isConnected()).toBe(false);
      await expect(streamService.createStream(streamConfig)).rejects.toThrow('Not connected to NATS');
    });
  });
});