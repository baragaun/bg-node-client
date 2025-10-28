import natsStore from './natsStore.js';
import { BgListenerTopic, EventType } from '../enums.js';
import { buildStreamName } from './buildStreamName.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { processChannelEvent } from './eventProcessors/channel/processChannelEvent.js';
const callback = async (error, message, channelId) => {
    const payload = message.json();
    logger.debug('NATS channel event received.', {
        channelId,
        error,
        message,
        payload,
    });
    await processChannelEvent(payload);
    // Notify the app:
    for (const listener of libData.listeners()) {
        if (listener.topic === BgListenerTopic.channel) {
            const channelListener = listener;
            if (typeof channelListener.onEvent === 'function') {
                channelListener.onEvent(payload.reason, payload.channelId, payload.data);
            }
        }
    }
};
/**
 * Subscribe to changes to a specific channel.
 * @param channelId
 */
export const subscribeToChannelEvents = async (channelId) => {
    const subject = buildStreamName(EventType.channel, channelId);
    // const myUserId = libData.clientInfoStore().myUserId;
    // Are we already subscribed?
    const existingSubscription = natsStore.getSubscription(subject);
    if (existingSubscription) {
        logger.debug('nats.subscribeToChannelEvents: already subscribed.', { channelId, subject });
        return;
    }
    natsStore.addSubscription(subject, {
        callback: (error, message) => {
            callback(error, message, channelId)
                .catch((err) => {
                logger.error('nats.subscribeToChannelEvents: Error in callback.', { err, channelId, subject });
            });
        },
    });
};
//# sourceMappingURL=subscribeToChannelEvents.js.map