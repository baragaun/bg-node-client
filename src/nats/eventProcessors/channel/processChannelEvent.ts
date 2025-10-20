import { processChannelUpdatedEvent } from './processChannelUpdatedEvent.js';
import { ChannelEventReason } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { ChannelEventPayload } from '../../../types/eventPayloadTypes.js';

const processors = {
  [ChannelEventReason.archived]: undefined,
  [ChannelEventReason.deleted]: undefined,
  [ChannelEventReason.suspended]: undefined,
  [ChannelEventReason.unarchived]: undefined,
  [ChannelEventReason.unsuspended]: undefined,
  [ChannelEventReason.updated]: processChannelUpdatedEvent,
  [ChannelEventReason.invitationCreated]: undefined,
  [ChannelEventReason.invitationUpdated]: undefined,
  [ChannelEventReason.invitationDeleted]: undefined,
  [ChannelEventReason.invitationDismissedFromInboxByRecipient]: undefined,
  [ChannelEventReason.invitationDismissedFromInboxBySender]: undefined,
  [ChannelEventReason.messageCreated]: undefined,
  [ChannelEventReason.messageUpdated]: undefined,
  [ChannelEventReason.messageDeleted]: undefined,
  [ChannelEventReason.participantCreated]: undefined,
  [ChannelEventReason.participantUpdated]: undefined,
  [ChannelEventReason.participantDeleted]: undefined,
  [ChannelEventReason.userSuspended]: undefined,
  [ChannelEventReason.userUnsuspended]: undefined,
};

export const processChannelEvent = async (payload: ChannelEventPayload): Promise<void> => {
  const processor = processors[payload.reason];

  if (typeof processor !== 'function') {
    logger.debug('processChannelEvent: No processor for this Channel event reason.',
      { reason: payload.reason });
    return;
  }

  return processor(payload);
};
