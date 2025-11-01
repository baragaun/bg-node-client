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
        const channelMessage = new ChannelMessage(result.object);
        Object.assign(channelMessage, changes);
        const subject = buildStreamName(EventType.channel, channelMessage.id);
        natsService.publishChannelEvent(channelMessage.channelId, {
            channelId: channelMessage.channelId,
            channelMessageId: channelMessage.id,
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