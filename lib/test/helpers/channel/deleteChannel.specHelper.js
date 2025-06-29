import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import findById from '../../../operations/findById.js';
export const deleteChannelSpecHelper = async (id, client) => {
    logger.debug('deleteChannelSpecHelper: calling API/deleteChannel', { id });
    const response = await client.operations.channel.deleteChannel(id, true);
    expect(response.error).toBeUndefined();
    // Verifying the local copy has been deleted:
    const localResponse = await findById(id, ModelType.Channel, { cachePolicy: CachePolicy.cache });
    expect(localResponse.error).toBeUndefined();
    expect(localResponse.object).toBeNull();
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