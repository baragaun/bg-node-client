import natsStore from './natsStore.js';
// import db from '../db/db.js';
import { BgListenerTopic, EventType } from '../enums.js';
import { buildStreamName } from './buildStreamName.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
/**
 * Subscribe to changes to a specific channel.
 * @param channelId
 */
export const subscribeToChannel = (channelId) => {
    const subject = buildStreamName(EventType.channel, channelId);
    // const myUserId = libData.clientInfoStore().myUserId;
    // Are we already subscribed?
    const existingSubscription = natsStore.getSubscription(subject);
    if (existingSubscription) {
        logger.debug('nats.subscribeToChannelMessages: already subscribed.', { channelId, subject });
        return;
    }
    natsStore.addSubscription(subject, {
        callback: (error, message) => {
            const payload = message.json();
            logger.debug('NATS channel event received.', {
                channelId,
                error,
                message,
                payload,
            });
            for (const listener of libData.listeners()) {
                if (listener.topic === BgListenerTopic.channel) {
                    const channelListener = listener;
                    if (typeof channelListener.onEvent === 'function') {
                        channelListener.onEvent(payload.reason, payload.channelId, payload.data);
                        // Update local DB
                        // if(payload.object.createdBy !== myUserId) { //
                        //   db.insert(payload.object, ModelType.ChannelMessage);
                        // }
                    }
                }
            }
        },
    });
};
//# sourceMappingURL=subscribeToChannel.js.map