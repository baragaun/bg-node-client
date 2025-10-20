import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import update from '../update.js';
const updateChannel = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.Channel, queryOptions);
    if (result.object) {
        const subject = buildStreamName(EventType.channel, result.object.id);
        natsService.publishMessage(subject, {
            channelId: result.object.id,
            reason: ChannelEventReason.updated,
            data: {
                channel: result.object,
            },
            // serviceRequest: queryOptions.serviceRequest,
        }, { timeout: 5000 }, (error, ack) => {
            if (error) {
                logger.error('updatedChannel: Failed to publish NATS message', {
                    channelMessageId: result.object.id,
                    subject,
                    error: error.message,
                    stack: error.stack,
                });
            }
            else {
                logger.debug('updatedChannel: Successfully published NATS message', {
                    channelMessageId: result.object.id,
                    subject,
                    ack,
                });
            }
        });
    }
    return result;
};
export default updateChannel;
//# sourceMappingURL=updateChannel.js.map