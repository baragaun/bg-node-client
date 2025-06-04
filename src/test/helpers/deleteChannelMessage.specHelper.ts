import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../enums.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import findById from '../../operations/findById.js';

export const deleteChannelMessageSpecHelper = async (
  channelMessageId: string,
  client: BgNodeClient,
): Promise<void> => {
    const response = await client.operations.channelMessage
      .deleteChannelMessage(channelMessageId);

    expect(response.error).toBeUndefined();

    const networkResponse =
      await findById<ChannelMessage>(channelMessageId, ModelType.ChannelMessage, {
          cachePolicy: CachePolicy.cache,
      });

    expect(networkResponse.error).toBeUndefined();
    expect(networkResponse.object).toBeNull();

    const localResponse =
      await findById<ChannelMessage>(channelMessageId, ModelType.ChannelMessage, {
          cachePolicy: CachePolicy.cache,
      });

    expect(localResponse.error).toBeUndefined();
    expect(localResponse.object).toBeNull();
};

