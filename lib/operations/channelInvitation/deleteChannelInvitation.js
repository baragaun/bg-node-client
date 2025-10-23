import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import deleteFnc from '../delete.js';
const deleteChannelInvitation = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await deleteFnc(id, ModelType.ChannelInvitation, deletePhysically, queryOptions);
    if (result.object) {
        const subject = buildStreamName(EventType.channel, result.object.id);
        const channelInvitation = new ChannelInvitation({ id: result.object.id });
        natsService.publishChannelEvent(result.object.id, {
            channelId: channelInvitation.channelId,
            channelInvitationId: result.object.objectIds[0],
            reason: ChannelEventReason.invitationDeleted,
            // serviceRequest: queryOptions.serviceRequest,
        }).catch((error) => {
            logger.error('deleteChannelInvitation: Failed to publish NATS message', {
                channelInvitationId: result.object.objectIds[0],
                subject,
                error: error.message,
                stack: error.stack,
            });
        });
    }
    return result;
};
export default deleteChannelInvitation;
//# sourceMappingURL=deleteChannelInvitation.js.map