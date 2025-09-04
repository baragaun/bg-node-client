import natsStore from './natsStore.js';
// import db from '../db/db.js';
import { BgListenerTopic } from '../enums.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const subscribeToChannelMessages = (channelId) => {
    const subject = `first.spark.dev.channel.${channelId}.messages`;
    const existingSubscription = natsStore.getSubscription(subject);
    // const myUserId = libData.clientInfoStore().myUserId;
    if (existingSubscription) {
        logger.debug('nats.subscribeToChannelMessages: already subscribed.', { channelId, subject2: subject });
    }
    else {
        natsStore.addSubscription(subject, {
            callback: (error, message) => {
                const payload = message.json();
                logger.debug('NATS channel messages updated event received.', {
                    channelId: channelId,
                    error,
                    message,
                    payload,
                });
                for (const listener of libData.listeners()) {
                    if (listener.topic === BgListenerTopic.channelMessage) {
                        if (payload.changeType === 'created' &&
                            typeof listener.onChannelMessageCreated === 'function') {
                            listener.onChannelMessageCreated({
                                object: payload.object,
                            });
                            // Update local DB
                            // if(payload.object.createdBy !== myUserId) { //
                            //   db.insert(payload.object, ModelType.ChannelMessage);
                            // }
                        }
                        if (payload.changeType === 'deleted' &&
                            typeof listener.onChannelMessageDeleted === 'function') {
                            listener.onChannelMessageDeleted({
                                object: payload.object,
                            });
                            // Remove from local DB
                            // db.delete(payload.object.id, ModelType.ChannelMessage);
                        }
                        if (payload.changeType === 'updated' &&
                            typeof listener.onChannelMessageUpdated === 'function') {
                            listener.onChannelMessageUpdated({
                                object: payload.object,
                            });
                            // Update local DB
                            // db.upsert(payload.object, ModelType.ChannelMessage);
                        }
                    }
                }
            },
        });
    }
};
export default subscribeToChannelMessages;
//# sourceMappingURL=subscribeToChannelMessages.js.map