import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import natsService from '../../nats/index.js';
import streamNames from '../../nats/streamNames.js';
import { NatsPayloadModelChanged } from '../../types/payloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannel = async (
  changes: Partial<Channel>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<Channel>> => {
  const result = await update<Channel>(changes, ModelType.Channel, queryOptions);
  if (result.object) {
     natsService.publishMessage(
        streamNames(result.object.id).channel,
        {
          objectId: result.object.id,
          modelType: ModelType.Channel,
          changeType: 'updated',
          object: result.object,
        } as NatsPayloadModelChanged<Channel>,
        {},
        (error, ack) => {
          if (error) {
            logger.error('updatedChannel: Failed to publish NATS message', {
              channelMessageId: result.object.id,
              subject: streamNames(result.object.id).channelMessages,
              error: error.message,
              stack: error.stack,
            });
          } else {
            logger.debug('updatedChannel: Successfully published NATS message', {
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

export default updateChannel;
