import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import deleteFnc from '../delete.js';
const deleteChannelParticipant = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await deleteFnc(id, ModelType.ChannelParticipant, deletePhysically, queryOptions);
    if (result.object) {
        const subject = buildStreamName(EventType.channel, result.object.id);
        const channelParticipant = new ChannelParticipant({ id: result.object.id });
        natsService.publishChannelEvent(result.object.id, {
            channelId: channelParticipant.channelId,
            channelParticipantId: result.object.id,
            reason: ChannelEventReason.participantDeleted,
            // serviceRequest: queryOptions.serviceRequest,
        }).catch((error) => {
            logger.error('deleteChannelParticipant: Failed to publish NATS message', {
                channelParticipantId: result.object.id,
                subject,
                error: error.message,
                stack: error.stack,
            });
        });
    }
    return result;
};
export default deleteChannelParticipant;
//# sourceMappingURL=deleteChannelParticipant.js.map