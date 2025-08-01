import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import findById from '../../../operations/findById.js';
export const deleteChannelMessageSpecHelper = async (id, client) => {
    logger.debug('deleteChannelMessageSpecHelper: calling API/deleteChannelMessage', { id });
    const response = await client.operations.channelMessage
        .deleteChannelMessage(id, true);
    expect(response.error).toBeUndefined();
    // // Verifying the network copy has been deleted:
    // const networkResponse = await findById<ChannelMessage>(
    //   id,
    //   ModelType.ChannelMessage,
    //   { cachePolicy: CachePolicy.network },
    // );
    //
    // expect(networkResponse.error).toBeUndefined();
    // expect(networkResponse.object).toBeNull();
    // Verifying the local copy has been deleted:
    const localResponse = await findById(id, ModelType.ChannelMessage, { cachePolicy: CachePolicy.cache });
    expect(localResponse.error).toBeUndefined();
    expect(localResponse.object).toBeNull();
};
//# sourceMappingURL=deleteChannelMessage.specHelper.js.map