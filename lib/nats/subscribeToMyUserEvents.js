import natsStore from './natsStore.js';
import { BgListenerTopic, EventType } from '../enums.js';
import { buildStreamName } from './buildStreamName.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { processMyUserEvent } from './eventProcessors/myUser/processMyUserEvent.js';
const callback = async (error, message, myUserId) => {
    const payload = message.json();
    logger.debug('NATS myUser event received.', {
        myUserId,
        error,
        message,
        payload,
    });
    await processMyUserEvent(payload);
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
export const subscribeToMyUserEvents = async () => {
    const myUserId = libData.clientInfoStore().myUserId;
    const subject = buildStreamName(EventType.myUser, myUserId);
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
//# sourceMappingURL=subscribeToMyUserEvents.js.map