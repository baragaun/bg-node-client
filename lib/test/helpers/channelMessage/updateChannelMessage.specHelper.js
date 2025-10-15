import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import findById from '../../../operations/findById.js';
export const updateChannelMessageSpecHelper = async (changes, client) => {
    const { object: existingChannelMessage, error, } = await findById(changes.id, ModelType.ChannelMessage, {
        cachePolicy: CachePolicy.cacheFirst,
    });
    expect(error).toBeUndefined();
    const response = await client.operations.channelMessage.updateChannelMessage(changes, {
        polling: {
            enabled: true,
            oldUpdatedAt: existingChannelMessage.updatedAt || existingChannelMessage.createdAt,
        },
    });
    const updatedRemoteChannelMessage = response.object;
    expect(response.error).toBeUndefined();
    expect(updatedRemoteChannelMessage.id).toBe(changes.id);
    expect(updatedRemoteChannelMessage.messageText).toBe(changes.messageText || existingChannelMessage.messageText);
    const { object: reloadedChannelMessageFromNetwork, error: findOnNetworkError } = await findById(changes.id, ModelType.ChannelMessage, {
        cachePolicy: CachePolicy.cache,
    });
    expect(findOnNetworkError).toBeUndefined();
    expect(reloadedChannelMessageFromNetwork.id).toBe(changes.id);
    expect(reloadedChannelMessageFromNetwork.messageText).toBe(changes.messageText || existingChannelMessage.messageText);
    const { object: reloadedChannelFromLocal, error: findLocalError } = await findById(changes.id, ModelType.ChannelMessage, {
        cachePolicy: CachePolicy.cache,
    });
    expect(findLocalError).toBeUndefined();
    expect(reloadedChannelFromLocal.id).toBe(changes.id);
    expect(reloadedChannelFromLocal.messageText).toBe(changes.messageText || existingChannelMessage.messageText);
    return updatedRemoteChannelMessage;
};
//# sourceMappingURL=updateChannelMessage.specHelper.js.map