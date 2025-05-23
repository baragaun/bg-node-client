import { expect } from 'vitest';

import { createChannelMessageSpecHelper } from './createChannelMessage.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import { Channel, ChannelWithMessages } from '../../models/Channel.js';
import findById from '../../operations/findById.js';
import factories from '../factories/factories.js';

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

  expect(response.error).toBeUndefined();
  expect(channel).toBeDefined();
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

  if (messageCount && messageCount > 0) {
    channel.messages = await Promise.all(
      Array.from({ length: messageCount }, () =>
        createChannelMessageSpecHelper({
          channelId: channel.id,
          createdBy: channel.createdBy,
        }, client)),
    );

    expect(channel.messages.length).toBe(messageCount);
    channel.messages.forEach((message) => {
      expect(message).toBeDefined();
      expect(message.channelId).toBe(channel.id);
    });
  }

  return channel;
};

