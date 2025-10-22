import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import update from '../update.js';
const updateChannelParticipant = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = await update(changes, ModelType.ChannelParticipant, queryOptions);
    if (result.object) {
        const subject = buildStreamName(EventType.channel, result.object.id);
        const channelParticipant = new ChannelParticipant(result.object);
        Object.assign(channelParticipant, changes);
        natsService.publishChannelEvent(result.object.id, {
            channelId: channelParticipant.channelId,
            channelParticipantId: result.object.id,
            reason: ChannelEventReason.participantUpdated,
            data: {
                channelParticipant: channelParticipant,
            },
            // serviceRequest: queryOptions.serviceRequest,
        }).catch((error) => {
            logger.error('updateChannelParticipant: Failed to publish NATS message', {
                channelParticipantId: result.object.id,
                subject,
                error: error.message,
                stack: error.stack,
            });
        });
    }
    return result;
};
export default updateChannelParticipant;
//# sourceMappingURL=updateChannelParticipant.js.map