import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import natsService from '../../nats/index.js';
import streamNames from '../../nats/streamNames.js';
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
            natsService.publishMessage(streamNames(result.object.channelId).channelMessages, {
                objectId: result.object.id,
                modelType: ModelType.ChannelMessage,
                changeType: 'created',
                object: new ChannelMessage(result.object),
            }, {}, (error, ack) => {
                if (error) {
                    logger.error('createChannelMessage: Failed to publish NATS message', {
                        channelMessageId: result.object.id,
                        subject: streamNames(result.object.channelId).channelMessages,
                        error: error.message,
                        stack: error.stack,
                    });
                }
                else {
                    logger.debug('createChannelMessage: Successfully published NATS message', {
                        channelMessageId: result.object.id,
                        subject: streamNames(result.object.channelId).channelMessages,
                        ack,
                    });
                }
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