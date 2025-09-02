import natsStore from './natsStore.js';
import db from '../db/db.js';
import { BgListenerTopic, ModelType } from '../enums.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const subscribeToChannel = (channelId) => {
    const subject1 = `first.spark.dev.channel.${channelId}`;
    const existingSubscription1 = natsStore.getSubscription(subject1);
    if (existingSubscription1) {
        logger.debug('nats.subscribeToChannel: already subscribed.', { channelId, subject: subject1 });
    }
    else {
        natsStore.addSubscription(subject1, {
            callback: (error, message) => {
                const payload = message.json();
                logger.debug('NATS channel updated event received.', {
                    channelId: channelId,
                    error,
                    message,
                    payload,
                });
                for (const listener of libData.listeners()) {
                    if (listener.topic === BgListenerTopic.channel) {
                        if (payload.changeType === 'created' &&
                            typeof listener.onChannelCreated === 'function') {
                            listener.onChannelCreated({
                                object: payload.object,
                            });
                        }
                        if (payload.changeType === 'deleted' &&
                            typeof listener.onChannelDeleted === 'function') {
                            listener.onChannelDeleted({
                                object: payload.object,
                            });
                        }
                        if (payload.changeType === 'updated' &&
                            typeof listener.onChannelUpdated === 'function') {
                            listener.onChannelUpdated({
                                object: payload.object,
                            });
                        }
                    }
                }
            },
        });
    }
    const subject2 = `first.spark.dev.channel.${channelId}.messages`;
    const existingSubscription2 = natsStore.getSubscription(subject2);
    if (existingSubscription2) {
        logger.debug('nats.subscribeToChannel: already subscribed.', { channelId, subject2 });
    }
    else {
        natsStore.addSubscription(subject2, {
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
                            db.insert(payload.object, ModelType.ChannelMessage);
                        }
                        if (payload.changeType === 'deleted' &&
                            typeof listener.onChannelMessageDeleted === 'function') {
                            listener.onChannelMessageDeleted({
                                object: payload.object,
                            });
                            // Remove from local DB
                            db.delete(payload.object.id, ModelType.ChannelMessage);
                        }
                        if (payload.changeType === 'updated' &&
                            typeof listener.onChannelMessageUpdated === 'function') {
                            listener.onChannelMessageUpdated({
                                object: payload.object,
                            });
                            // Update local DB
                            db.upsert(payload.object, ModelType.ChannelMessage);
                        }
                    }
                }
            },
        });
    }
};
export default subscribeToChannel;
//# sourceMappingURL=subscribeToChannel.js.map