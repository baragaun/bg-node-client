import db from '../../db/db.js';
import { ChannelEventReason, EventType, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
const createChannelMessage = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createChannelMessage: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createChannelMessage: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (!allowNetwork) {
            const response = await db.insert(props, ModelType.ChannelMessage);
            if (response.object) {
                response.object = new ChannelMessage(response.object);
                return response;
            }
            return response;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.create };
        }
        const result = await fsdata.channelMessage.createChannelMessage(props);
        if (!result.error || result.object) {
            await db.insert(result.object, ModelType.ChannelMessage);
            const channelMessage = new ChannelMessage(result.object);
            const subject = buildStreamName(EventType.channel, channelMessage.channelId);
            natsService.publishChannelEvent(channelMessage.channelId, {
                channelId: channelMessage.channelId,
                channelMessageId: channelMessage.id,
                reason: ChannelEventReason.messageCreated,
                data: {
                    channelMessage,
                },
                // serviceRequest: queryOptions.serviceRequest,
            }).catch((error) => {
                logger.error('createChannelMessage: Failed to publish NATS message', {
                    channelMessageId: result.object.id,
                    subject,
                    error: error.message,
                    stack: error.stack,
                });
            });
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
export default createChannelMessage;
//# sourceMappingURL=createChannelMessage.js.map