import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy } from '../../enums.js';
import logger from '../../helpers/logger.js';
import { ChannelListItem } from '../../types/ChannelListItem.js';

export const findMyChannelsSpecHelper = async (
  client: BgNodeClient,
): Promise<ChannelListItem[]> => {
  logger.debug('BgServiceApiCheck.createChannel: calling API/createChannel');

  // Should come with `findMyChannels`:
  const findMyChannelsResult = await client.operations.channel.findMyChannels(
    100,
    true,
    undefined,
    { cachePolicy: CachePolicy.network },
  );
  expect(findMyChannelsResult.error).toBeUndefined();
  expect(findMyChannelsResult.objects.length).toBe(1);

  for (const participant of findMyChannelsResult.objects[0].participants || []) {
    expect(participant.id).toBeDefined();
    expect(participant.userInfo).toBeDefined();
    expect(participant.userInfo.userHandle).toBeDefined();
    expect(participant.userInfo.firstName).toBeDefined();
    expect(participant.userInfo.lastName).toBeDefined();
  }

  return findMyChannelsResult.objects;
};

