import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';

export const findMyChannelsSpecHelper = async (
  client: BgNodeClient,
): Promise<Channel[]> => {
  logger.debug('BgServiceApiCheck.createChannel: calling API/createChannel');

  // Should come with `findMyChannels`:
  const findMyChannelsResult = await client.operations.channel.findMyChannels(
    undefined,
    undefined,
    undefined,
    undefined,
    { cachePolicy: CachePolicy.network },
  );
  expect(findMyChannelsResult.error).toBeUndefined();

  return findMyChannelsResult.objects;
};

