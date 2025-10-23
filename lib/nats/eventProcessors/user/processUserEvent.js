import { processUserUpdatedEvent } from './processUserUpdatedEvent.js';
import { UserEventReason } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
const processors = {
    [UserEventReason.userCreated]: undefined,
    [UserEventReason.userDeleted]: undefined,
    [UserEventReason.userUpdated]: processUserUpdatedEvent,
    [UserEventReason.userSuspended]: undefined,
    [UserEventReason.channelCreated]: undefined,
    [UserEventReason.channelInvitationReceived]: undefined,
    [UserEventReason.channelInvitationAccepted]: undefined,
    [UserEventReason.channelInvitationDeclined]: undefined,
    [UserEventReason.inboxUpdated]: undefined,
    [UserEventReason.blockedByAnotherUser]: undefined,
    [UserEventReason.unblockedByAnotherUser]: undefined,
};
export const processUserEvent = async (payload) => {
    const processor = processors[payload.reason];
    if (typeof processor !== 'function') {
        logger.debug('processMyUserEvent: No processor for this MyUser event reason.', { reason: payload.reason });
        return;
    }
    return processor(payload);
};
//# sourceMappingURL=processUserEvent.js.map