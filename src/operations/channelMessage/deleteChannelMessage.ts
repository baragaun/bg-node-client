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

  const result = await deleteFnc(
    id,
    ModelType.ChannelMessage,
    deletePhysically,
    queryOptions,
  );

  if (result.object) {
    //todo deleteFunc never returns an object for physical deletes, so this code is never hit in that case. Is that ok?
    const channelMessage = new ChannelMessage({ id: result.object.id });

    const subject = buildStreamName(EventType.channel, channelMessage.channelId);

    natsService.publishChannelEvent(
      channelMessage.channelId,
      {
        channelId: channelMessage.channelId,
        channelMessageId: channelMessage.id,
        reason: ChannelEventReason.messageDeleted,
        // serviceRequest: queryOptions.serviceRequest,
      } as ChannelEventPayload,
    ).catch((error) => {
      logger.error('deleteChannelMessage: Failed to publish NATS message', {
        channelMessageId: result.object.id,
        subject,
        error: error.message,
        stack: error.stack,
      });
    });
  }

  return result;
};

export default deleteChannelMessage;
