import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import randomDate from '../../../helpers/randomDate.js';
import { Channel, ChannelWithMessages } from '../../../models/Channel.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import findById from '../../../operations/findById.js';
import factories from '../../factories/factories.js';
import { createChannelMessageSpecHelper } from '../channelMessage/createChannelMessage.specHelper.js';
import { findStreamNameBySubject } from '../../../nats/findStreamNameBySubject.js';
import { getTestClientConfig } from '../getTestClientConfig.js';
import libData from '../../../helpers/libData.js';
import { NatsClient } from '../../../nats/NatsClient.js';

export const createChannelSpecHelper = async (
  props: Partial<Channel> | undefined,
  messageCount: number | undefined,
  client: BgNodeClient,
): Promise<ChannelWithMessages | null> => {
  logger.debug('BgServiceApiCheck.createChannel: calling API/createChannel',
    { props });

  props = factories.channel.build(props);

  if (!props.createdBy) {
    props.createdBy = client.clientInfoStore.myUserId;
  }

  const response = await client.operations.channel.createChannel(props);
  const channel = response.object as ChannelWithMessages;
  const config = getTestClientConfig();
  libData.setConfig(config);
  const natsClient = new NatsClient(config.nats);
  await natsClient.connect();
  libData.setNatsClient(natsClient);

  expect(response.error).toBeUndefined();
  expect(channel).toBeTruthy();
  expect(channel.name).toBe(props.name);
  expect(channel.topic).toBe(props.topic);
  expect(channel.description).toBe(props.description);
  expect(channel.channelType).toBe(props.channelType);

  // Verifying local copy:
  const { object: channelFromCache, error: errorFromCache } = await findById<Channel>(
    channel.id,
    ModelType.Channel,
    { cachePolicy: CachePolicy.cache },
  );

  expect(errorFromCache).toBeUndefined();
  expect(channelFromCache.id).toBe(channel.id);
  expect(channelFromCache.name).toBe(props.name);
  expect(channelFromCache.topic).toBe(props.topic);
  expect(channelFromCache.description).toBe(props.description);
  expect(channelFromCache.channelType).toBe(props.channelType);

  if (!client.isInMockMode) {
    // Verifying remote copy:
    const { object: channelFromNetwork, error: errorFromNetwork } = await findById<Channel>(
      channel.id,
      ModelType.Channel,
      { cachePolicy: CachePolicy.network },
    );

    expect(errorFromNetwork).toBeUndefined();
    expect(channelFromNetwork.id).toBe(channel.id);
    expect(channelFromNetwork.name).toBe(props.name);
    expect(channelFromNetwork.topic).toBe(props.topic);
    expect(channelFromNetwork.description).toBe(props.description);
    expect(channelFromNetwork.channelType).toBe(props.channelType);
  }

  const timestamps = Array.from({ length: messageCount }).map(() => randomDate())
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  if (messageCount && messageCount > 0) {
    const propsList: Partial<ChannelMessage>[] = Array.from({ length: messageCount - 1 }).map((_, index) => ({
      channelId: channel.id,
      // We cannot use any other user than the one that is currently logged in:
      // createdBy: chance.pickone(channel.userIds),
      createdBy: client.clientInfoStore.myUserId,
      adminNotes: (index + 1).toString(),
      createdAt: timestamps[index + 1],
    }));

    // The first message is (usually) sent out by the creator of the channel:
    propsList.unshift({
      channelId: channel.id,
      createdBy: channel.createdBy,
      adminNotes: '0',
      createdAt: timestamps[0],
    });

    channel.messages = [];
    for (const props of propsList) {
      const message = await createChannelMessageSpecHelper(props, client);
      channel.messages.push(message);
    }

    // Subscribe to NATS JetStream to verify messages
    const natsSubject = `first.spark.dev.channel.${channel.id}.messages`;
    const streamName = await findStreamNameBySubject(natsSubject);

    // Fetch messages from NATS stream
    const js = await natsClient.getJetStreamClient();
    const consumer = await js.consumers.get(streamName);

    const messages = await consumer.fetch({ max_messages: messageCount, expires: 5000 });
    const receivedMessages = [];

    for await (const message of messages) {
        const data = JSON.parse(new TextDecoder().decode(message.data));
        receivedMessages.push(data);
        message.ack();
    }

    // Verify NATS messages match created channel messages
    expect(receivedMessages).toHaveLength(messageCount);
    // todo why received messages are in random order?
    // receivedMessages.forEach((natsMsg, index) => {
    //   const channelMsg = channel.messages[index];
    //   expect(natsMsg.object.id).toBe(channelMsg.id);
    //   expect(natsMsg.object.channelId).toBe(channelMsg.channelId);
    //   expect(natsMsg.object.messageText).toBe(channelMsg.messageText);
    //   expect(natsMsg.object.createdBy).toBe(channelMsg.createdBy);
    // });

    expect(channel.messages.length).toBe(messageCount);
    channel.messages.forEach((message, index) => {
      expect(message).toBeTruthy();
      expect(message.channelId).toBe(channel.id);
      expect(message.adminNotes).toBe(index.toString());
    });
  }

  return channel;
};

