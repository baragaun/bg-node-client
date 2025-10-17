import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import natsService from '../../nats/index.js';
import streamNames from '../../nats/streamNames.js';
import deleteFnc from '../delete.js';
const deleteChannelMessage = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await deleteFnc(id, ModelType.ChannelMessage, deletePhysically, queryOptions);
    if (result.object) {
        const channelMessage = new ChannelMessage({ id: result.object.id });
        natsService.publishMessage(streamNames(result.object.id).channelMessages, {
            objectId: result.object.id,
            modelType: ModelType.ChannelMessage,
            changeType: 'deleted',
            object: channelMessage,
        }, { timeout: 5000 }, (error, ack) => {
            if (error) {
                logger.error('updatedChannelMessage: Failed to publish NATS message', {
                    channelMessageId: result.object.id,
                    subject: streamNames(result.object.id).channelMessages,
                    error: error.message,
                    stack: error.stack,
                });
            }
            else {
                logger.debug('updatedChannelMessage: Successfully published NATS message', {
                    channelMessageId: result.object.id,
                    subject: streamNames(result.object.id).channelMessages,
                    ack,
                });
            }
        });
    }
    return result;
};
export default deleteChannelMessage;
//# sourceMappingURL=deleteChannelMessage.js.map
