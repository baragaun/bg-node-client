import { expect } from 'vitest';
import { createChannelMessageSpecHelper } from './createChannelMessage.specHelper.js';
import { CachePolicy, ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import randomDate from '../../helpers/randomDate.js';
import findById from '../../operations/findById.js';
import factories from '../factories/factories.js';
export const createChannelSpecHelper = async (props, messageCount, client) => {
    logger.debug('BgServiceApiCheck.createChannel: calling API/createChannel', { props });
    props = factories.channel.build(props);
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
    }
    const response = await client.operations.channel.createChannel(props);
    const channel = response.object;
    expect(response.error).toBeUndefined();
    expect(channel).toBeDefined();
    expect(channel.name).toBe(props.name);
    expect(channel.topic).toBe(props.topic);
    expect(channel.description).toBe(props.description);
    expect(channel.channelType).toBe(props.channelType);
    // Verifying local copy:
    const { object: channelFromCache, error: errorFromCache } = await findById(channel.id, ModelType.Channel, { cachePolicy: CachePolicy.cache });
    expect(errorFromCache).toBeUndefined();
    expect(channelFromCache.id).toBe(channel.id);
    expect(channelFromCache.name).toBe(props.name);
    expect(channelFromCache.topic).toBe(props.topic);
    expect(channelFromCache.description).toBe(props.description);
    expect(channelFromCache.channelType).toBe(props.channelType);
    if (!client.isInMockMode) {
        // Verifying remote copy:
        const { object: channelFromNetwork, error: errorFromNetwork } = await findById(channel.id, ModelType.Channel, { cachePolicy: CachePolicy.network });
        expect(errorFromNetwork).toBeUndefined();
        expect(channelFromNetwork.id).toBe(channel.id);
        expect(channelFromNetwork.name).toBe(props.name);
        expect(channelFromNetwork.topic).toBe(props.topic);
        expect(channelFromNetwork.description).toBe(props.description);
        expect(channelFromNetwork.channelType).toBe(props.channelType);
    }
    const timestamps = Array.from({ length: messageCount }).map(() => randomDate())
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    if (messageCount && messageCount > 0) {
        const propsList = Array.from({ length: messageCount - 1 }).map((_, index) => ({
            channelId: channel.id,
            // We cannot use any other user than the one that is currently logged in:
            // createdBy: chance.pickone(channel.userIds),
            createdBy: client.clientInfoStore.myUserId,
            adminNotes: (index + 1).toString(),
            createdAt: timestamps[index + 1],
        }));
        // The first message is (usually) sent out by the creator of the channel:
        propsList.unshift({
            channelId: channel.id,
            createdBy: channel.createdBy,
            adminNotes: '0',
            createdAt: timestamps[0],
        });
        channel.messages = [];
        for (const props of propsList) {
            const message = await createChannelMessageSpecHelper(props, client);
            channel.messages.push(message);
        }
        expect(channel.messages.length).toBe(messageCount);
        channel.messages.forEach((message, index) => {
            expect(message).toBeDefined();
            expect(message.channelId).toBe(channel.id);
            expect(message.adminNotes).toBe(index.toString());
        });
    }
    // Should come with `findMyChannels`:
    const findMyChannelsResult = await client.operations.channel.findMyChannels(100, true, undefined, { cachePolicy: CachePolicy.network });
    expect(findMyChannelsResult.error).toBeUndefined();
    expect(findMyChannelsResult.objects.length).toBe(1);
    expect(findMyChannelsResult.objects[0].id).toBe(channel.id);
    expect(findMyChannelsResult.objects[0].participants?.length).toBe(2);
    for (const participant of findMyChannelsResult.objects[0].participants || []) {
        expect(participant.id).toBeDefined();
        expect(participant.userInfo).toBeDefined();
        expect(participant.userInfo.userHandle).toBeDefined();
        expect(participant.userInfo.firstName).toBeDefined();
        expect(participant.userInfo.lastName).toBeDefined();
    }
    if (messageCount > 0) {
        expect(findMyChannelsResult.objects[0].latestMessage?.id).toBeDefined();
    }
    return channel;
};
//# sourceMappingURL=createChannel.specHelper.js.map