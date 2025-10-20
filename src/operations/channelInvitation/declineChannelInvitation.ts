import db from '../../db/db.js';
import {
  ChannelInvitationStatus,
  DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient,
  ModelType,
  MutationType, UserEventReason,
} from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import natsService from '../../nats/index.js';
import { UserEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryResult } from '../../types/QueryResult.js';

const declineChannelInvitation = async (
  id: string,
  reasonTextId: DeclineChannelInvitationReasonTextIdFromClient,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('declineChannelInvitation: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('declineChannelInvitation: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (!allowNetwork) {
      const changes: Partial<ChannelInvitation> = {
        id,
        status: ChannelInvitationStatus.declined,
      };
      const response = await  db.update<ChannelInvitation>(changes, ModelType.ChannelInvitation);

      if (response.object) {
        response.object = new ChannelInvitation(response.object);
        return response;
      }

      return response;
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.create };
    }

    const result = await fsdata.channelInvitation.declineChannelInvitation(
      id,
      reasonTextId,
    );

    if (!result.error || result.object) {
      await db.insert<ChannelInvitation>(result.object, ModelType.ChannelInvitation);

      // Notify the recipient about the declined invitation:
      natsService.publishUserEvent(
        result.object.recipientId,
        {
          channelInvitationId: result.object.id,
          reason: UserEventReason.channelInvitationDeclined,
          data: {
            channelInvitation: result.object,
          },
          // serviceRequest: queryOptions.serviceRequest,
        } as UserEventPayload,
      ).catch((error) => {
        logger.error('declineChannelInvitation: Failed to publish NATS message to the sender', {
          channelMessageId: result.object.id,
          error: error.message,
          stack: error.stack,
        });
      });
    }

    return result;
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default declineChannelInvitation;
