import * as jetstream from '@nats-io/jetstream';
import { connect } from '@nats-io/transport-node';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { BgListenerTopic } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import nats from '../../nats/index.js';
import { BgChannelDataListener } from '../../types/BgChannelListener.js';
import factories from '../factories/factories.js';
import clientStore from '../helpers/clientStore.js';
import { createChannelSpecHelper } from '../helpers/createChannel.specHelper.js';
import { createChannelMessageSpecHelper } from '../helpers/createChannelMessage.specHelper.js';
import { deleteChannelSpecHelper } from '../helpers/deleteChannel.specHelper.js';
import { signMeUpSpecHelper } from '../helpers/signMeUp.specHelper.js';
import { updateChannelMessageSpecHelper } from '../helpers/updateChannelMessage.specHelper.js';

describe('NATS Channel Listener Integration', () => {
  let client: BgNodeClient;
  let publisherConnection: any;
  let listener: BgChannelDataListener;
  let channel: any;

  const testStreamName = 'CHANNEL_NOTIFICATIONS';
  const testConsumerName = 'test_channel_notifications_consumer';
  const testSubjects = [
    'channel.test-channel.messages',
    'channel.test-channel.mentions',
    'channel.test-channel.updates',
  ];

  beforeAll(async () => {
    client = await clientStore.getTestClient();

    const config = libData.config();
    const natsServer = config?.nats && Array.isArray(config.nats?.servers) && config.nats?.servers.length > 0
      ? config.nats?.servers?.[0] || 'nats://localhost:4222'
      : 'nats://localhost:4222';
    
    await nats.init({
      servers: [natsServer],
      timeout: 5000,
      reconnectTimeWait: 1000,
    });

    publisherConnection = await connect({ 
      servers: ['nats://localhost:4222'],
      timeout: 2000,
    });
  });

  beforeEach(async () => {
    const streamConfig = {
      name: testStreamName,
      subjects: testSubjects,
      retention: 'limits',
      max_msgs: 100,
      storage: 'memory',
      num_replicas: 1,
    } as jetstream.StreamConfig;

    await nats.createStream(streamConfig);

    listener = {
      id: 'test-channel-listener',
      topic: BgListenerTopic.channel,
      onChannelMessageCreated: vi.fn(m => console.log('onChannelMessageCreated', m)),
      onChannelMessageUpdated: vi.fn(m => console.log('onChannelMessageUpdated', m)),
      onChannelMessageDeleted: vi.fn(m => console.log('onChannelMessageDeleted', m)),
      onChannelCreated: vi.fn(c => console.log('onChannelCreated', c)),
      onChannelUpdated: vi.fn(c => console.log('onChannelUpdated', c)),
      onChannelDeleted: vi.fn(c => console.log('onChannelDeleted', c)),
    };

    libData.addListener(listener);

    await signMeUpSpecHelper(undefined, false, client);
    const props = factories.channel.build({});
    channel = await createChannelSpecHelper(props, 0, client);
  });

  afterEach(async () => {
    if (channel?.id) {
      await deleteChannelSpecHelper(channel.id, client);
    }

    const natsClient = libData.natsClient();
    if (natsClient && natsClient.isConnected) {
      try {
        await nats.deleteStream(testStreamName);
      } catch (error) {
        logger.error('afterEach.cleanUp.error: ', { error });
      }
    }

    libData.removeListener(listener.id);
  });

  afterAll(async () => {
    try {
      await publisherConnection?.close();
      await nats.close();
    } catch (error) {
      logger.error('afterAll cleanup error: ', { error });
    }
  });

  const publishMessage = (type: string, messageData: any): void => {
    publisherConnection.publish(testSubjects[0], JSON.stringify({
      type,
      ...messageData,
    }));
  };

  const handleMessageConsumption = async (
    expectedCount: number, 
    serviceCallMap: {[messageType: string]: () => Promise<unknown>},
  ): Promise<any[]> => {
    const consumerConfig = {
      durable_name: testConsumerName,
      ack_policy: 'explicit',
      filter_subject: testSubjects[0],
    } as jetstream.ConsumerConfig;

    await nats.createConsumer(testStreamName, consumerConfig);

    const natsClient = libData.natsClient();
    const js = await natsClient.getJetStreamClient();
    const consumer = await js.consumers.get(testStreamName, testConsumerName);
    const messages = await consumer.fetch({ max_messages: expectedCount });
    
    const receivedMessages = [];

    for await (const message of messages) {
      const messageData = JSON.parse(new TextDecoder().decode(message.data));
      receivedMessages.push(messageData);
      
      const serviceCall = serviceCallMap[messageData.type];
      if (serviceCall) {
        await serviceCall();
      }
      message.ack();
    }

    return receivedMessages;
  };

  describe('Catches message creation events', () => {
    it('should trigger listener callbacks when messages are created', async () => {
      const messageCount = 5;

      for (let i = 0; i < messageCount; i++) {
        const mockChannelMessage = {
          id: i,
          channelId: channel.id,
          content: `Content: >i: ${i}`,
          authorId: client.clientInfoStore.myUserId,
          timestamp: new Date().toISOString(),
        };

        publishMessage('message_created', mockChannelMessage);
      }

      const msgProps = {
        channelId: channel.id,
        createdBy: client.clientInfoStore.myUserId,
      };

      const receivedMessages = await handleMessageConsumption(
        messageCount,
        {
          'message_created': () => createChannelMessageSpecHelper(msgProps, client),
        },
      );

      expect(receivedMessages).toHaveLength(messageCount);
      for (let i = 0; i < messageCount; i++) {
        expect(receivedMessages[i].id).toBe(i);
        expect(receivedMessages[i].type).toBe('message_created');
        expect(receivedMessages[i].content).toBe(`Content: >i: ${i}`);
      }

      expect(listener.onChannelMessageCreated).toHaveBeenCalledTimes(messageCount);
    });
  });

  describe('Catches message update events', () => {
    it('should trigger listener callbacks when messages are updated', async () => {
      const messageCount = 3;

      const createdMessages = [];
      for (let i = 0; i < messageCount; i++) {
        const msgProps = {
          channelId: channel.id,
          createdBy: client.clientInfoStore.myUserId,
          content: `Original content ${i}`,
        };
        const createdMessage = await createChannelMessageSpecHelper(msgProps, client);
        createdMessages.push(createdMessage);
      }

      for (let i = 0; i < messageCount; i++) {
        const mockUpdateMessage = {
          id: createdMessages[i].id,
          channelId: channel.id,
          content: `Updated content ${i}`,
          authorId: client.clientInfoStore.myUserId,
          timestamp: new Date().toISOString(),
        };

        publishMessage('message_updated', mockUpdateMessage);
      }

      const receivedMessages = await handleMessageConsumption(
        messageCount,
        {
          'message_updated': async () => {
            const messageToUpdate = createdMessages.shift();
            return updateChannelMessageSpecHelper({
              id: messageToUpdate.id,
              messageText: `Updated content for ${messageToUpdate.id}`,
            }, client);
          },
        },
      );

      expect(receivedMessages).toHaveLength(messageCount);
      for (let i = 0; i < messageCount; i++) {
        expect(receivedMessages[i].type).toBe('message_updated');
        expect(receivedMessages[i].content).toBe(`Updated content ${i}`);
      }

      expect(listener.onChannelMessageCreated).toHaveBeenCalledTimes(messageCount);
      expect(listener.onChannelMessageUpdated).toHaveBeenCalledTimes(messageCount);
    });
  });
});
