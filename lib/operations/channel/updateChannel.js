import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import natsService from '../../nats/index.js';
import streamNames from '../../nats/streamNames.js';
import update from '../update.js';
const updateChannel = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.Channel, queryOptions);
    if (result.object) {
        natsService.publishMessage(streamNames(result.object.id).channel, {
            objectId: result.object.id,
            modelType: ModelType.Channel,
            changeType: 'updated',
            object: result.object,
        }, { timeout: 5000 }, (error, ack) => {
            if (error) {
                logger.error('updatedChannel: Failed to publish NATS message', {
                    channelMessageId: result.object.id,
                    subject: streamNames(result.object.id).channelMessages,
                    error: error.message,
                    stack: error.stack,
                });
            }
            else {
                logger.debug('updatedChannel: Successfully published NATS message', {
                    channelMessageId: result.object.id,
                    subject: streamNames(result.object.id).channelMessages,
                    ack,
                });
            }
        });
    }
    return result;
};
export default updateChannel;
//# sourceMappingURL=updateChannel.js.map
