import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import findById from '../../operations/findById.js';

export const deleteChannelMessageSpecHelper = async (
  id: string,
  client: BgNodeClient,
): Promise<void> => {
  logger.debug('deleteChannelMessageSpecHelper: calling API/deleteChannelMessage', { id });

  const response = await client.operations.channelMessage
    .deleteChannelMessage(id, true);

  expect(response.error).toBeUndefined();

  // Verifying the local copy has been deleted:
  const networkResponse = await findById<ChannelMessage>(
    id,
    ModelType.ChannelMessage,
    { cachePolicy: CachePolicy.cache },
  );

  expect(networkResponse.error).toBeUndefined();
  expect(networkResponse.object).toBeNull();

    const localResponse =
      await findById<ChannelMessage>(id, ModelType.ChannelMessage, {
          cachePolicy: CachePolicy.cache,
      });

    expect(localResponse.error).toBeUndefined();
    expect(localResponse.object).toBeNull();
};

