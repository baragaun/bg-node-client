import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { ChannelMessageEventPayload } from '../../../types/eventPayloadTypes.js';

export const processChannelMessageUpdatedEvent = async (payload: ChannelMessageEventPayload): Promise<void> => {
  const updatedChannelMessage = payload.data?.channelMessage;

  if (!updatedChannelMessage) {
    return;
  }

  const result = await db.update<ChannelMessage>(updatedChannelMessage, ModelType.ChannelMessage);

  if (!result || result.error) {
    logger.error('nats.processChannelMessageUpdatedEvent: Failed to update ChannelMessage in local DB.',
      { result, updatedChannelMessage });
  }
};
