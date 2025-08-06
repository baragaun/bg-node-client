import * as jetstream from '@nats-io/jetstream';
import { describe, expect, it } from 'vitest';

import libData from '../../helpers/libData.js';
import nats from '../../nats/index.js';
import { isFeatureEnabled } from '../helpers/isFeatureEnabled.js';
import { getTestClientConfig } from '../helpers/getTestClientConfig.js';
import { NatsClient } from '../../nats/NatsClient.js';

describe.runIf(isFeatureEnabled('nats'))('nats as integrated into BgNodeClient', () => {
    it('should create stream, subscribe, publish and receive messages end-to-end', async () => {
        const config = getTestClientConfig();
        libData.setConfig(config);
        const client = new NatsClient(config.nats);
        await client.connect();
        libData.setNatsClient(client);
        const testStreamName = 'test_e2e_stream';
        const testSubject = 'test.e2e.messages';
        const testConsumerName = 'test_e2e_consumer';

        // 1. Create stream
        const streamConfig = {
            name: testStreamName,
            subjects: [testSubject],
            retention: 'limits',
            max_msgs: 100,
            storage: 'memory',
            num_replicas: 1,
        } as jetstream.StreamConfig;

        const streamInfo = await nats.createStream(streamConfig);
        expect(streamInfo.config.name).toBe(testStreamName);

        // 2. Create consumer for subscription
        const consumerConfig = {
            durable_name: testConsumerName,
            ack_policy: 'explicit',
            filter_subject: testSubject,
        } as jetstream.ConsumerConfig;

        await nats.createConsumer(testStreamName, consumerConfig);

        // 3. Subscribe to the stream
        const js = await client.getJetStreamClient();
        const consumer = await js.consumers.get(testStreamName, testConsumerName);

        // 4. Publish test messages
        const testMessages = [
            { id: 1, content: 'Hello World', timestamp: new Date().toISOString() },
            { id: 2, content: 'Test Message', timestamp: new Date().toISOString() },
            { id: 3, content: 'Final Message', timestamp: new Date().toISOString() }
        ];


        for (const msg of testMessages) {
            await js.publish(testSubject, JSON.stringify(msg));
        }

        // 5. Consume and verify messages
        const messages = await consumer.fetch({ max_messages: 3, expires: 5000 });
        const receivedMessages = [];

        for await (const message of messages) {
            const data = JSON.parse(new TextDecoder().decode(message.data));
            receivedMessages.push(data);
            message.ack();
        }

        // 6. Compare published vs received messages
        expect(receivedMessages).toHaveLength(3);
        expect(receivedMessages[0]).toEqual(testMessages[0]);
        expect(receivedMessages[1]).toEqual(testMessages[1]);
        expect(receivedMessages[2]).toEqual(testMessages[2]);

        // Cleanup
        await nats.deleteConsumer(testStreamName, testConsumerName);
        await nats.deleteStream(testStreamName);
    });
})
