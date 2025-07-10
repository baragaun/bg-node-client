import { expect } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
export const findMyChannelsSpecHelper = async (client) => {
    logger.debug('BgServiceApiCheck.createChannel: calling API/createChannel');
    // Should come with `findMyChannels`:
    const findMyChannelsResult = await client.operations.channel.findMyChannels(undefined, { cachePolicy: CachePolicy.network });
    expect(findMyChannelsResult.error).toBeUndefined();
    return findMyChannelsResult.objects;
};
//# sourceMappingURL=findMyChannels.specHelper.js.map