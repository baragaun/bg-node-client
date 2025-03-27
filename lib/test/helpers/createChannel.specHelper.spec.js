import { expect } from 'vitest';
import findById from '../../operations/findById.js';
import { CachePolicy, ModelType } from '../../enums.js';
export const createChannelSpecHelper = async (props, client) => {
    const response = await client.operations.channel.createChannel(props);
    const channel = response.object;
    expect(response.error).toBeUndefined();
    expect(channel).toBeDefined();
    expect(channel.name).toBe(props.name);
    expect(channel.topic).toBe(props.topic);
    expect(channel.description).toBe(props.description);
    expect(channel.channelType).toBe(props.channelType);
    // Verifying local copy:
    const { object: reloadedChannel, error } = await findById(channel.id, ModelType.Channel, {
        cachePolicy: CachePolicy.cache,
    });
    expect(error).toBeUndefined();
    expect(reloadedChannel.id).toBe(channel.id);
    expect(reloadedChannel.name).toBe(props.name);
    expect(reloadedChannel.topic).toBe(props.topic);
    expect(reloadedChannel.description).toBe(props.description);
    expect(reloadedChannel.channelType).toBe(props.channelType);
    return channel;
};
//# sourceMappingURL=createChannel.specHelper.spec.js.map