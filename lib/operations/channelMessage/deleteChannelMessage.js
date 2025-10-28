import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import deleteFnc from '../delete.js';
const deleteChannelMessage = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await deleteFnc(id, ModelType.ChannelMessage, deletePhysically, queryOptions);
    if (result.object) {
        //todo deleteFunc never returns an object of ChannelMessage, so this code is never hit in that case. Is that ok?
        const channelMessage = new ChannelMessage({ id: result.object.id });
        const subject = buildStreamName(EventType.channel, channelMessage.channelId);
        natsService.publishChannelEvent(channelMessage.channelId, {
            channelId: channelMessage.channelId,
            channelMessageId: channelMessage.id,
            reason: ChannelEventReason.messageDeleted,
            // serviceRequest: queryOptions.serviceRequest,
        }).catch((error) => {
            logger.error('deleteChannelMessage: Failed to publish NATS message', {
                channelMessageId: result.object.id,
                subject,
                error: error.message,
                stack: error.stack,
            });
        });
    }
    return result;
};
export default deleteChannelMessage;
//# sourceMappingURL=deleteChannelMessage.js.map