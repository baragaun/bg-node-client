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
        natsService.publishChannelEvent(result.object.id, {
            channelId: result.object.id,
            channelMessageId: result.object.id,
            reason: ChannelEventReason.updated,
            data: {
                channel: result.object,
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
    }
    return result;
};
export default updateChannel;
//# sourceMappingURL=updateChannel.js.map