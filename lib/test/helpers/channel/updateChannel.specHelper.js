import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import findById from '../../../operations/findById.js';
export const updateChannelSpecHelper = async (changes, client) => {
    const { object: existingChannel, error } = await findById(changes.id, ModelType.Channel, {
        cachePolicy: CachePolicy.cacheFirst,
    });
    expect(error).toBeUndefined();
    const response = await client.operations.channel.updateChannel(changes, { polling: { enabled: true } });
    const updatedRemoteChannel = response.object;
    expect(response.error).toBeUndefined();
    expect(updatedRemoteChannel.id).toBe(changes.id);
    expect(updatedRemoteChannel.name).toBe(changes.name || existingChannel.name);
    expect(updatedRemoteChannel.topic).toBe(changes.topic || existingChannel.topic);
    expect(updatedRemoteChannel.description).toBe(changes.description || existingChannel.description);
    expect(updatedRemoteChannel.channelType).toBe(changes.channelType || existingChannel.channelType);
    const { object: reloadedChannelFromNetwork, error: findOnNetworkError } = await findById(changes.id, ModelType.Channel, {
        cachePolicy: CachePolicy.cache,
    });
    expect(findOnNetworkError).toBeUndefined();
    expect(reloadedChannelFromNetwork.id).toBe(changes.id);
    expect(reloadedChannelFromNetwork.name).toBe(changes.name || existingChannel.name);
    expect(reloadedChannelFromNetwork.topic).toBe(changes.topic || existingChannel.topic);
    expect(reloadedChannelFromNetwork.description).toBe(changes.description || existingChannel.description);
    expect(reloadedChannelFromNetwork.channelType).toBe(changes.channelType || existingChannel.channelType);
    const { object: reloadedChannelFromLocal, error: findLocalError } = await findById(changes.id, ModelType.Channel, {
        cachePolicy: CachePolicy.cache,
    });
    expect(findLocalError).toBeUndefined();
    expect(reloadedChannelFromLocal.id).toBe(changes.id);
    expect(reloadedChannelFromLocal.name).toBe(changes.name || existingChannel.name);
    expect(reloadedChannelFromLocal.topic).toBe(changes.topic || existingChannel.topic);
    expect(reloadedChannelFromLocal.description).toBe(changes.description || existingChannel.description);
    expect(reloadedChannelFromLocal.channelType).toBe(changes.channelType || existingChannel.channelType);
    return updatedRemoteChannel;
};
//# sourceMappingURL=updateChannel.specHelper.js.map