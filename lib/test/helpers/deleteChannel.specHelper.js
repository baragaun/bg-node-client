import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import findById from '../../operations/findById.js';
export const deleteChannelSpecHelper = async (id, client) => {
    logger.debug('BgServiceApiCheck.deleteChannel: calling API/deleteChannel', { id });
    const response = await client.operations.channel.deleteChannel(id);
    expect(response.error).toBeUndefined();
    // Verifying the local copy has been deleted:
    const { object: channelFromCache, error: errorFromCache } = await findById(id, ModelType.Channel, { cachePolicy: CachePolicy.cache });
    expect(errorFromCache).toBeUndefined();
    expect(channelFromCache).toBeNull();
    // The object is deleted in the backend asynchronously, so we'd have to wait for it.
    // if (!client.isInMockMode) {
    //   // Verifying that the remote copy is gone:
    //   const { object: channelFromNetwork, error: errorFromNetwork } = await findById<Channel>(
    //     id,
    //     ModelType.Channel,
    //     { cachePolicy: CachePolicy.network },
    //   );
    //
    //   expect(errorFromNetwork).toBeUndefined();
    //   expect(channelFromNetwork).toBeNull();
    // }
};
//# sourceMappingURL=deleteChannel.specHelper.js.map