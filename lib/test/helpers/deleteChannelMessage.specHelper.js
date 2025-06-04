import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../enums.js';
import findById from '../../operations/findById.js';
export const deleteChannelMessageSpecHelper = async (channelMessageId, client) => {
    const response = await client.operations.channelMessage
        .deleteChannelMessage(channelMessageId);
    expect(response.error).toBeUndefined();
    const networkResponse = await findById(channelMessageId, ModelType.ChannelMessage, {
        cachePolicy: CachePolicy.cache,
    });
    expect(networkResponse.error).toBeUndefined();
    expect(networkResponse.object).toBeNull();
    const localResponse = await findById(channelMessageId, ModelType.ChannelMessage, {
        cachePolicy: CachePolicy.cache,
    });
    expect(localResponse.error).toBeUndefined();
    expect(localResponse.object).toBeNull();
};
//# sourceMappingURL=deleteChannelMessage.specHelper.js.map