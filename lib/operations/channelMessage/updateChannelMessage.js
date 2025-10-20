import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import update from '../update.js';
const updateChannelMessage = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.ChannelMessage, queryOptions);
    if (result.object) {
        const subject = buildStreamName(EventType.channel, result.object.id);
        const channelMessage = new ChannelMessage(result.object);
        Object.assign(channelMessage, changes);
        natsService.publishChannelEvent(result.object.id, {
            channelId: channelMessage.channelId,
            channelMessageId: result.object.id,
            reason: ChannelEventReason.messageUpdated,
            data: {
                channelMessage,
            },
            // serviceRequest: queryOptions.serviceRequest,
        }).catch((error) => {
            logger.error('updateChannelMessage: Failed to publish NATS message', {
                channelMessageId: result.object.id,
                subject,
                error: error.message,
                stack: error.stack,
            });
        });
    }
    return result;
};
export default updateChannelMessage;
//# sourceMappingURL=updateChannelMessage.js.map