import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannel = async (
  changes: Partial<Channel>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<Channel>> => {
  const result = await update<Channel>(changes, ModelType.Channel, queryOptions);
  if (result.object) {
    const subject = buildStreamName(EventType.channel, result.object.id);

    natsService.publishChannelEvent(
      result.object.id,
      {
        channelId: result.object.id,
        channelMessageId: result.object.id,
        reason: ChannelEventReason.updated,
        data: {
          channel: result.object,
        },
        // serviceRequest: queryOptions.serviceRequest,
      } as ChannelEventPayload,
    ).catch((error) => {
      logger.error('updateChannel: Failed to publish NATS message', {
        channelMessageId: result.object.id,
        subject,
        error: error.message,
        stack: error.stack,
      });
    });
  }
  return result;
};

export default updateChannel;
