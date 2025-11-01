import { ChannelEventReason, EventType, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannelParticipant = async (
  changes: Partial<ChannelParticipant>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelParticipant>> => {
  const result = await update<ChannelParticipant>(changes, ModelType.ChannelParticipant, queryOptions);

  if (result.object) {
    const subject = buildStreamName(EventType.channel, result.object.id);
    const channelParticipant = new ChannelParticipant(result.object);
    Object.assign(channelParticipant, changes);

    natsService.publishChannelEvent(
      result.object.id,
      {
        channelId: channelParticipant.channelId,
        channelParticipantId: result.object.id,
        reason: ChannelEventReason.participantUpdated,
        data: {
          channelParticipant: channelParticipant,
        },
        // serviceRequest: queryOptions.serviceRequest,
      } as ChannelEventPayload,
    ).catch((error) => {
      logger.error('updateChannelParticipant: Failed to publish NATS message', {
        channelParticipantId: result.object.id,
        subject,
        error: error.message,
        stack: error.stack,
      });
    });
  }

  return result;
};

export default updateChannelParticipant;
