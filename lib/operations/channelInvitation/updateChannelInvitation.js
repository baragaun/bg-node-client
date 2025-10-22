import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import update from '../update.js';
const updateChannelInvitation = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.ChannelInvitation, queryOptions);
    if (result.object) {
        const subject = buildStreamName(EventType.channel, result.object.id);
        const channelInvitation = new ChannelInvitation(result.object);
        Object.assign(channelInvitation, changes);
        natsService.publishChannelEvent(result.object.recipientId, {
            channelId: channelInvitation.channelId,
            reason: ChannelEventReason.invitationUpdated,
            data: {
                channelInvitation: channelInvitation,
            },
            // serviceRequest: queryOptions.serviceRequest,
        }).catch((error) => {
            logger.error('updateChannelInvitation: Failed to publish NATS message', {
                channelInvitationId: result.object.id,
                subject,
                error: error.message,
                stack: error.stack,
            });
        });
    }
    return result;
};
export default updateChannelInvitation;
//# sourceMappingURL=updateChannelInvitation.js.map