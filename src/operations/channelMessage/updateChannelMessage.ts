import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelMessage>> => {
  const result = await update<ChannelMessage>(
    changes,
    ModelType.ChannelMessage,
    queryOptions,
  );

  if (result.object) {
    const channelMessage = new ChannelMessage(result.object);
    Object.assign(channelMessage, changes);

    const subject = buildStreamName(EventType.channel, channelMessage.id);

    natsService.publishChannelEvent(
      channelMessage.channelId,
      {
        channelId: channelMessage.channelId,
        channelMessageId: channelMessage.id,
        reason: ChannelEventReason.messageUpdated,
        data: {
          channelMessage,
        },
        // serviceRequest: queryOptions.serviceRequest,
      } as ChannelEventPayload,
    ).catch((error) => {
      logger.error('updateChannelMessage: Failed to publish NATS message', {
        channelMessageId: result.object.id,
        subject,
        error: error.message,
        stack: error.stack,
      });
    });
  }

  return result;
};

export default updateChannelMessage;
