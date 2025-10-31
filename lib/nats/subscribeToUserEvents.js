import natsStore from './natsStore.js';
import { BgListenerTopic, EventType } from '../enums.js';
import { buildStreamName } from './buildStreamName.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { processUserEvent } from './eventProcessors/user/processUserEvent.js';
const callback = async (error, message, myUserId) => {
    const payload = message.json();
    logger.debug('NATS myUser event received.', {
        myUserId,
        error,
        message,
        payload,
    });
    await processUserEvent(payload);
    // Notify the app:
    for (const listener of libData.listeners()) {
        if (listener.topic === BgListenerTopic.myUser) {
            const myUserListener = listener;
            if (typeof myUserListener.onEvent === 'function') {
                myUserListener.onEvent(payload.reason, payload.data);
            }
        }
    }
};
/**
 * Subscribe to MyUser related events.
 */
export const subscribeToUserEvents = async () => {
    const myUserId = libData.clientInfoStore().myUserId;
    const subject = buildStreamName(EventType.user, myUserId);
    // Are we already subscribed?
    const existingSubscription = natsStore.getSubscription(subject);
    if (existingSubscription) {
        logger.debug('nats.subscribeToMyUserEvents: already subscribed.', { myUserId, subject });
        return;
    }
    natsStore.addSubscription(subject, {
        callback: (error, message) => {
            callback(error, message, myUserId)
                .catch((err) => {
                logger.error('nats.subscribeToMyUserEvents: Error in callback.', { err, myUserId, subject });
            });
        },
    });
};
//# sourceMappingURL=subscribeToUserEvents.js.map