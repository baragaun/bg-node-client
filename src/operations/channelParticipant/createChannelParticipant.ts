import db from '../../db/db.js';
import { ChannelEventReason, ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryResult } from '../../types/QueryResult.js';

const createChannelParticipant = async (
  props: Partial<ChannelParticipant>,
): Promise<QueryResult<ChannelParticipant>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('createChannelParticipant: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('createChannelParticipant: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (!allowNetwork) {
      const result = await db.insert<ChannelParticipant>(props, ModelType.ChannelParticipant);

      if (!result.error && result.object) {
        result.object = new ChannelParticipant(result.object);

        natsService.publishChannelEvent(
          result.object.id,
          {
            channelId: result.object.channelId,
            channelParticipantId: result.object.id,
            reason: ChannelEventReason.participantCreated,
            data: {
              channelParticipant: result.object,
            },
            // serviceRequest: queryOptions.serviceRequest,
          } as ChannelEventPayload,
        ).catch((error) => {
          logger.error('createChannelParticipant: Failed to publish NATS message', {
            channelMessageId: result.object.id,
            error: error.message,
            stack: error.stack,
          });
        });

        return result;
      }

      return result;
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.create };
    }

    return {
      operation: MutationType.create,
      error: 'not-implemented',
    };

    // const result = await fsdata.channelParticipant.createChannelParticipant(props as unknown as ChannelParticipantInput);
    //
    // if (result.object) {
    //   result.object = new ChannelParticipant(result.object);
    // }
    //
    // if (!result.error || result.object) {
    //   await db.insert<ChannelParticipant>(result.object, ModelType.ChannelParticipant);
    // }
    //
    // return result;
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannelParticipant;
