import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ServiceRequest } from '../../models/ServiceRequest.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';

const deleteChannelMessage = async (
  id: string,
  deletePhysically: boolean,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {

  const result = await deleteFnc(id, ModelType.ChannelMessage, deletePhysically, queryOptions);

  if (result.object) {
    const subject = buildStreamName(EventType.channel, result.object.id);
    const channelMessage = new ChannelMessage({ id: result.object.id });
    natsService.publishMessage(
      subject,
      {
        channelId: channelMessage.channelId,
        channelMessageId: result.object.id,
        reason: ChannelEventReason.messageDeleted,
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

export default deleteChannelMessage;
