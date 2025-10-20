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
    const subject = buildStreamName(EventType.channel, result.object.id);
    const channelMessage = new ChannelMessage(result.object);
    Object.assign(channelMessage, changes);

    natsService.publishMessage(
        subject,
        {
          channelId: channelMessage.channelId,
          channelMessageId: result.object.id,
          reason: ChannelEventReason.messageUpdated,
          data: {
            channelMessage,
          },
          // serviceRequest: queryOptions.serviceRequest,
        } as ChannelEventPayload,
        { timeout: 5000 },
        (error, ack) => {
          if (error) {
            logger.error('updatedChannelMessage: Failed to publish NATS message', {
              channelMessageId: result.object.id,
              subject,
              error: error.message,
              stack: error.stack,
            });
          } else {
            logger.debug('updatedChannelMessage: Successfully published NATS message', {
              channelMessageId: result.object.id,
              subject,
              ack,
            });
          }
        },
      );
  }

  return result;
};

export default updateChannelMessage;
