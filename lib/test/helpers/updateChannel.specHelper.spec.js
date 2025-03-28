import { expect } from 'vitest';
import findById from '../../operations/findById.js';
import { CachePolicy, ModelType } from '../../enums.js';
export const updateChannelSpecHelper = async (changes, client) => {
    const { object: existingChannel, error } = await findById(changes.id, ModelType.Channel, {
        cachePolicy: CachePolicy.cache,
    });
    expect(error).toBeUndefined();
    const response = await client.operations.channel.updateChannel({
        id: changes.id,
        name: 'newname',
    });
    const updatedRemoteChannel = response.object;
    expect(response.error).toBeUndefined();
    expect(updatedRemoteChannel.id).toBe(changes.id);
    expect(updatedRemoteChannel.name).toBe(changes.name || existingChannel.name);
    expect(updatedRemoteChannel.topic).toBe(changes.topic || existingChannel.topic);
    expect(updatedRemoteChannel.description).toBe(changes.description || existingChannel.description);
    expect(updatedRemoteChannel.channelType).toBe(changes.channelType || existingChannel.channelType);
    const { object: updatedLocalChannel, error: updateError } = await findById(changes.id, ModelType.Channel, {
        cachePolicy: CachePolicy.cache,
    });
    expect(updateError).toBeUndefined();
    expect(updatedLocalChannel.id).toBe(changes.id);
    expect(updatedLocalChannel.name).toBe(changes.name || existingChannel.name);
    expect(updatedLocalChannel.topic).toBe(changes.topic || existingChannel.topic);
    expect(updatedLocalChannel.description).toBe(changes.description || existingChannel.description);
    expect(updatedLocalChannel.channelType).toBe(changes.channelType || existingChannel.channelType);
    return updatedRemoteChannel;
};
//# sourceMappingURL=updateChannel.specHelper.spec.js.map