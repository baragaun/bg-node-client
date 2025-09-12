import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ServiceRequest } from '../../models/ServiceRequest.js';
import natsService from '../../nats/index.js';
import streamNames from '../../nats/streamNames.js';
import { NatsPayloadModelChanged } from '../../types/payloadTypes.js';
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
    const channelMessage = new ChannelMessage({ id: result.object.id });
    natsService.publishMessage(
        streamNames(result.object.id).channelMessages,
        {
          objectId: result.object.id,
          modelType: ModelType.ChannelMessage,
          changeType: 'deleted',
          object: channelMessage,
        } as NatsPayloadModelChanged<ChannelMessage>,
        {timeout: 5000},
        (error, ack) => {
          if (error) {
            logger.error('updatedChannelMessage: Failed to publish NATS message', {
              channelMessageId: result.object.id,
              subject: streamNames(result.object.id).channelMessages,
              error: error.message,
              stack: error.stack,
            });
          } else {
            logger.debug('updatedChannelMessage: Successfully published NATS message', {
              channelMessageId: result.object.id,
              subject: streamNames(result.object.id).channelMessages,
              ack,
            });
          }
        },
      );
  }

  return result;
};

export default deleteChannelMessage;
