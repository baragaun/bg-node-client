import { processChannelMessageCreatedEvent } from './processChannelMessageCreatedEvent.js';
import { processChannelMessageDeletedEvent } from './processChannelMessageDeletedEvent.js';
import { processChannelMessageUpdatedEvent } from './processChannelMessageUpdatedEvent.js';
import { ChannelMessageEventReason } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessageEventPayload } from '../../../types/eventPayloadTypes.js';

const processors = {
  [ChannelMessageEventReason.created]: processChannelMessageCreatedEvent,
  [ChannelMessageEventReason.deleted]: processChannelMessageDeletedEvent,
  [ChannelMessageEventReason.seen]: undefined,
  [ChannelMessageEventReason.updated]: processChannelMessageUpdatedEvent,
};

export const processChannelMessageEvent = async (payload: ChannelMessageEventPayload): Promise<void> => {
  const processor = processors[payload.reason];

  if (typeof processor !== 'function') {
    logger.debug('processChannelMessageEvent: No processor for this Channel message event reason.',
      { reason: payload.reason });
    return;
  }

  return processor(payload);
};
