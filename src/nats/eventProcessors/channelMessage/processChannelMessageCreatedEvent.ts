import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { ChannelEventPayload } from '../../../types/eventPayloadTypes.js';

export const processChannelMessageCreatedEvent = async (payload: ChannelEventPayload): Promise<void> => {
  const channelMessage = payload.data?.channelMessage;

  if (!channelMessage) {
    return;
  }

  const result = await db.upsert<ChannelMessage>(channelMessage, ModelType.ChannelMessage);

  if (!result || result.error) {
    logger.error('nats.processChannelMessageCreatedEvent: Failed to create ChannelMessage in local DB.',
      { result, channelMessage });
  }
};
