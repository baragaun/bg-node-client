import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import findById from '../../../operations/findById.js';
import factories from '../../factories/factories.js';
export const createChannelMessageSpecHelper = async (props, client) => {
    logger.debug('BgServiceApiCheck.createChannelMessage called.', { props });
    props = factories.channelMessage.build(props);
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
    }
    const response = await client.operations.channelMessage.createChannelMessage(props);
    const messageFromNetwork = response.object;
    expect(response.error).toBeUndefined();
    expect(messageFromNetwork).toBeTruthy();
    expect(messageFromNetwork.channelId).toBe(props.channelId);
    expect(messageFromNetwork.createdBy).toBe(props.createdBy);
    expect(messageFromNetwork.channelMessageType).toBe(props.channelMessageType);
    expect(messageFromNetwork.messageText).toBe(props.messageText);
    // Verifying local copy:
    const { object: messageFromLocal, error: errorFromCache } = await findById(messageFromNetwork.id, ModelType.ChannelMessage, { cachePolicy: CachePolicy.cache });
    expect(errorFromCache).toBeUndefined();
    expect(messageFromLocal.id).toBe(messageFromNetwork.id);
    expect(messageFromLocal.channelId).toBe(props.channelId);
    expect(messageFromLocal.createdBy).toBe(props.createdBy);
    expect(messageFromLocal.channelMessageType).toBe(props.channelMessageType);
    expect(messageFromLocal.messageText).toBe(props.messageText);
    if (!client.isInMockMode) {
        // Verifying remote copy:
        const { object: reloadedMessageFromNetwork, error: errorFromNetwork } = await findById(messageFromNetwork.id, ModelType.ChannelMessage, { cachePolicy: CachePolicy.network });
        expect(errorFromNetwork).toBeUndefined();
        expect(reloadedMessageFromNetwork.id).toBe(messageFromNetwork.id);
        expect(reloadedMessageFromNetwork.channelId).toBe(props.channelId);
        expect(reloadedMessageFromNetwork.createdBy).toBe(props.createdBy);
        expect(reloadedMessageFromNetwork.channelMessageType).toBe(props.channelMessageType);
        expect(reloadedMessageFromNetwork.messageText).toBe(props.messageText);
    }
    return messageFromNetwork;
};
//# sourceMappingURL=createChannelMessage.specHelper.js.map