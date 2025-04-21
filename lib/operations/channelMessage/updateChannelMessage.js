import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import natsService from '../../nats/index.js';
import streamNames from '../../nats/streamNames.js';
import update from '../update.js';
const updateChannelMessage = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.ChannelMessage, queryOptions);
    if (result.object) {
        const channelMessage = new ChannelMessage(result.object);
        Object.assign(channelMessage, changes);
        natsService.publishMessage(streamNames(result.object.channelId).channelMessages, {
            objectId: result.object.id,
            modelType: ModelType.ChannelMessage,
            changeType: 'updated',
            object: channelMessage,
        }, {}, (error, ack) => {
            if (error) {
                logger.error('updatedChannelMessage: Failed to publish NATS message', {
                    channelMessageId: result.object.id,
                    subject: streamNames(result.object.channelId).channelMessages,
                    error: error.message,
                    stack: error.stack,
                });
            }
            else {
                logger.debug('updatedChannelMessage: Successfully published NATS message', {
                    channelMessageId: result.object.id,
                    subject: streamNames(result.object.channelId).channelMessages,
                    ack,
                });
            }
        });
    }
    return result;
};
export default updateChannelMessage;
//# sourceMappingURL=updateChannelMessage.js.map