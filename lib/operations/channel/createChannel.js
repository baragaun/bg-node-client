import db from '../../db/db.js';
import { EventType, ModelType, MutationType, UserEventReason, } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { subscribeToChannelEvents } from '../../nats/subscribeToChannelEvents.js';
const createChannel = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createChannel: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createChannel: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        if (!props) {
            return { error: 'missing-input', operation: MutationType.create };
        }
        if (!props.createdBy) {
            props.createdBy = libData.clientInfoStore().myUserId;
        }
        if (!Array.isArray(props.userIds) || props.userIds.length < 1) {
            props.userIds = [props.createdBy];
        }
        if (!props.otherUserId &&
            Array.isArray(props.userIds) &&
            props.userIds.length > 1) {
            props.otherUserId = props.userIds.find((id) => id !== props.createdBy);
        }
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (!allowNetwork) {
            const response = await db.insert(props, ModelType.Channel);
            if (response.object) {
                response.object = new Channel(response.object);
                return response;
            }
            return response;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.create };
        }
        const result = await fsdata.channel.createChannel(props);
        if (result.object) {
            const subject = buildStreamName(EventType.user, result.object.id);
            const channel = new Channel(result.object);
            // todo dicusssion with Holger,
            await subscribeToChannelEvents(channel.id);
            natsService.publishUserEvent(channel.otherUserId, {
                channelId: channel.id,
                reason: UserEventReason.channelCreated,
                data: {
                    channel,
                },
                // serviceRequest: queryOptions.serviceRequest,
            }).catch((error) => {
                logger.error('updateChannel: Failed to publish NATS message', {
                    channelMessageId: result.object.id,
                    subject,
                    error: error.message,
                    stack: error.stack,
                });
            });
            // Notifying other participants of this channel. We created the channel, now we need to
            // let the other participants know that there is a new channel they are part of.
            const otherUsersIds = result.object.userIds.filter(id => id !== props.createdBy);
            for (const otherUserId of otherUsersIds) {
                const subject = buildStreamName(EventType.user, otherUserId);
                natsService.publishUserEvent(otherUserId, {
                    channelId: result.object.id,
                    reason: UserEventReason.channelCreated,
                    data: {
                        channel: result.object,
                    },
                    // serviceRequest: queryOptions.serviceRequest,
                }).catch((error) => {
                    logger.error('createChannel: Failed to publish NATS message to other participants', {
                        channelMessageId: result.object.id,
                        subject,
                        error: error.message,
                        stack: error.stack,
                    });
                });
            }
        }
        if (!result.error || result.object) {
            await db.insert(result.object, ModelType.Channel);
        }
        return result;
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createChannel;
//# sourceMappingURL=createChannel.js.map