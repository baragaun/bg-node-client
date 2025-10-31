import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ServiceRequest } from '../../models/ServiceRequest.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';

const deleteChannelInvitation = async (
  id: string,
  deletePhysically: boolean,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {

  const result = await deleteFnc(id, ModelType.ChannelInvitation, deletePhysically, queryOptions);

  if (result.object) {
    const subject = buildStreamName(EventType.channel, result.object.id);
    const channelInvitation = new ChannelInvitation({ id: result.object.id });

    natsService.publishChannelEvent(
      result.object.id,
      {
        channelId: channelInvitation.channelId,
        channelInvitationId: result.object.objectIds[0],
        reason: ChannelEventReason.invitationDeleted,
        // serviceRequest: queryOptions.serviceRequest,
      } as ChannelEventPayload,
    ).catch((error) => {
      logger.error('deleteChannelInvitation: Failed to publish NATS message', {
        channelInvitationId: result.object.objectIds[0],
        subject,
        error: error.message,
        stack: error.stack,
      });
    });
  }

  return result;
};

export default deleteChannelInvitation;
