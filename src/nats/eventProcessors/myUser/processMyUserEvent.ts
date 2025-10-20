import { processMyUserUpdatedEvent } from './processMyUserUpdatedEvent.js';
import { MyUserEventReason } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { MyUserEventPayload } from '../../../types/eventPayloadTypes.js';

const processors = {
  [MyUserEventReason.myUserCreated]: undefined,
  [MyUserEventReason.myUserDeleted]: undefined,
  [MyUserEventReason.myUserUpdated]: processMyUserUpdatedEvent,
  [MyUserEventReason.myUserSuspended]: undefined,
  [MyUserEventReason.channelCreated]: undefined,
  [MyUserEventReason.channelInvitationReceived]: undefined,
  [MyUserEventReason.channelInvitationAccepted]: undefined,
  [MyUserEventReason.channelInvitationDeclined]: undefined,
  [MyUserEventReason.inboxUpdated]: undefined,
  [MyUserEventReason.blockedByAnotherUser]: undefined,
  [MyUserEventReason.unblockedByAnotherUser]: undefined,

};

export const processMyUserEvent = async (payload: MyUserEventPayload): Promise<void> => {
  const processor = processors[payload.reason];

  if (typeof processor !== 'function') {
    logger.debug('processMyUserEvent: No processor for this MyUser event reason.',
      { reason: payload.reason });
    return;
  }

  return processor(payload);
};
