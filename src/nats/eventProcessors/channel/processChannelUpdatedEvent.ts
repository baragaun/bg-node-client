import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { ChannelEventPayload } from '../../../types/eventPayloadTypes.js';

export const processChannelUpdatedEvent = async (payload: ChannelEventPayload): Promise<void> => {
  const updatedChannel = payload.data?.channel;

  if (!updatedChannel) {
    return;
  }

  const result = await db.update<Channel>(updatedChannel, ModelType.Channel);

  if (!result || result.error) {
    logger.error('nats.processChannelUpdatedEvent: Failed to update Channel in local DB.',
      { result, updatedChannel });
  }
};
