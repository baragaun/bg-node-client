import { ModelType, UserEventReason } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { ServiceRequest } from '../../models/ServiceRequest.js';
import natsService from '../../nats/index.js';
import { UserEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';
import findById from '../findById.js';

const deleteChannel = async (
  id: string,
  deletePhysically: boolean,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {
  if (!libData.isInitialized()) {
    logger.error('fsdata.deleteMyUser: unavailable');
    return { error: 'unavailable' };
  }

  const channelResult = await findById<Channel>(id, ModelType.Channel, queryOptions);
  const result = await deleteFnc(id, ModelType.Channel, deletePhysically, queryOptions);

  if (result.error || channelResult.error || !channelResult.object) {
    // Can't notify other participants.
    return result;
  }
  const channel = channelResult.object;
  const clientInfo = libData.clientInfoStore().clientInfo;
  const myUserId = clientInfo.myUserId;

  // Notifying other participants of this channel.
  const otherUsersIds = channel.userIds.filter(id => id !== myUserId);
  for (const otherUserId of otherUsersIds) {
    natsService.publishUserEvent(
      otherUserId,
      {
        channelId: channel.id,
        reason: UserEventReason.channelDeleted,
        data: {
          channel,
        },
        // serviceRequest: queryOptions.serviceRequest,
      } as UserEventPayload,
    ).catch((error) => {
      logger.error('deleteChannel: Failed to publish NATS message to other participants', {
        channelMessageId: channel.id,
        error: error.message,
        stack: error.stack,
      });
    });
  }

  return result;
};

export default deleteChannel;
