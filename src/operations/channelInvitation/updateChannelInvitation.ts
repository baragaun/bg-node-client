import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannelInvitation = async (
  changes: Partial<ChannelInvitation>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelInvitation>> => {

  const result = await update<ChannelInvitation>(changes, ModelType.ChannelInvitation, queryOptions);

  if(result.object) {
    const subject = buildStreamName(EventType.channel, result.object.id);
    const channelInvitation = new ChannelInvitation(result.object);
    Object.assign(channelInvitation, changes);

    natsService.publishChannelEvent(
      result.object.recipientId,
      {
        channelId: channelInvitation.channelId,
        reason: ChannelEventReason.invitationUpdated,
        data: {
          channelInvitation: channelInvitation,
        },
        // serviceRequest: queryOptions.serviceRequest,
      } as ChannelEventPayload,
    ).catch((error) => {
      logger.error('updateChannelInvitation: Failed to publish NATS message', {
        channelInvitationId: result.object.id,
        subject,
        error: error.message,
        stack: error.stack,
      });
    });
  }

  return result;
};

export default updateChannelInvitation;
