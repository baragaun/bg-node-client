import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../enums.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import findById from '../../../operations/findById.js';

export const updateChannelMessageSpecHelper = async (
  changes: Partial<ChannelMessage>,
  client: BgNodeClient,
): Promise<ChannelMessage | null> => {
  const {
    object: existingChannelMessage,
    error,
  } = await findById<ChannelMessage>(changes.id, ModelType.ChannelMessage, {
    cachePolicy: CachePolicy.cacheFirst,
  });

  expect(error).toBeUndefined();

  const response = await client.operations.channelMessage.updateChannelMessage(
    changes,
    {
      polling: {
        enabled: true,
        oldUpdatedAt: existingChannelMessage.updatedAt || existingChannelMessage.createdAt,
      },
    },
  );
  const updatedRemoteChannelMessage = response.object;

  expect(response.error).toBeUndefined();
  expect(updatedRemoteChannelMessage.id).toBe(changes.id);
  expect(updatedRemoteChannelMessage.messageText).toBe(changes.messageText || existingChannelMessage.messageText);

  const { object: reloadedChannelMessageFromNetwork, error: findOnNetworkError } =
    await findById<ChannelMessage>(changes.id, ModelType.ChannelMessage, {
      cachePolicy: CachePolicy.cache,
    });

  expect(findOnNetworkError).toBeUndefined();
  expect(reloadedChannelMessageFromNetwork.id).toBe(changes.id);
  expect(reloadedChannelMessageFromNetwork.messageText).toBe(changes.messageText || existingChannelMessage.messageText);

  const { object: reloadedChannelFromLocal, error: findLocalError } =
    await findById<ChannelMessage>(changes.id, ModelType.ChannelMessage, {
      cachePolicy: CachePolicy.cache,
    });

  expect(findLocalError).toBeUndefined();
  expect(reloadedChannelFromLocal.id).toBe(changes.id);
  expect(reloadedChannelFromLocal.messageText).toBe(changes.messageText || existingChannelMessage.messageText);

  return updatedRemoteChannelMessage;
};

