import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { ChannelEventPayload } from '../../../types/eventPayloadTypes.js';

export const processChannelMessageDeletedEvent = async (payload: ChannelEventPayload): Promise<void> => {
  const channelMessage = payload.data?.channelMessage;

  if (!channelMessage) {
    return;
  }

  const result = await db.delete<ChannelMessage>(channelMessage.id, ModelType.ChannelMessage);

  if (!result || result.error) {
    logger.error('nats.processChannelMessageDeletedEvent: Failed to delete ChannelMessage in local DB.',
      { result, channelMessage });
  }
};
