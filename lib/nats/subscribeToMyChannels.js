import natsStore from './natsStore.js';
// import db from '../db/db.js';
import { BgListenerTopic } from '../enums.js';
import streamNames from './streamNames.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const subscribeToMyChannels = () => {
    const subject = streamNames().channels;
    const existingSubscription = natsStore.getSubscription(subject);
    const myUserId = libData.clientInfoStore().myUserId;
    if (existingSubscription) {
        logger.debug('nats.subscribeToMyChannels: already subscribed.', { channelId: myUserId, subject: subject });
    }
    else {
        natsStore.addSubscription(subject, {
            callback: (error, message) => {
                const payload = message.json();
                logger.debug('NATS channel updated event received.', {
                    userId: myUserId,
                    error,
                    message,
                    payload,
                });
                for (const listener of libData.listeners()) {
                    if (listener.topic === BgListenerTopic.channel) {
                        if (payload.changeType === 'created' &&
                            typeof listener.onChannelCreated === 'function') {
                            if (payload.object.userIds.includes(myUserId)) {
                                listener.onChannelCreated({
                                    object: payload.object,
                                });
                                // Update local DB
                                // db.insert(payload.object, ModelType.Channel);
                            }
                        }
                        if (payload.changeType === 'deleted' &&
                            typeof listener.onChannelDeleted === 'function') {
                            if (payload.object.userIds.includes(myUserId)) {
                                listener.onChannelDeleted({
                                    object: payload.object,
                                });
                                // Remove from local DB
                                // db.delete(payload.object.id, ModelType.Channel);
                            }
                        }
                        if (payload.changeType === 'updated' &&
                            typeof listener.onChannelUpdated === 'function') {
                            if (payload.object.userIds.includes(myUserId)) {
                                listener.onChannelUpdated({
                                    object: payload.object,
                                });
                                // Update local DB
                                // db.update(payload.object, ModelType.Channel);
                            }
                        }
                    }
                }
            },
        });
    }
};
export default subscribeToMyChannels;
//# sourceMappingURL=subscribeToMyChannels.js.map