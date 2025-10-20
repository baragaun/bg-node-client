import db from '../../db/db.js';
import { ChannelEventReason, EventType , ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { buildStreamName } from '../../nats/buildStreamName.js';
import natsService from '../../nats/index.js';
import { ChannelEventPayload } from '../../types/eventPayloadTypes.js';
import { QueryResult } from '../../types/QueryResult.js';

const createChannelMessage = async (
  props: Partial<ChannelMessage>,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('createChannelMessage: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('createChannelMessage: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (!allowNetwork) {
      const response = await db.insert<ChannelMessage>(props, ModelType.ChannelMessage);

      if (response.object) {
        response.object = new ChannelMessage(response.object);
        return response;
      }

      return response;
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.create };
    }

    const result = await fsdata.channelMessage.createChannelMessage(props);

    if (result.object) {
      result.object = new ChannelMessage(result.object);
    }

    if (!result.error || result.object) {
      await db.insert<ChannelMessage>(result.object, ModelType.ChannelMessage);

      const subject = buildStreamName(EventType.channel, result.object.id);
      const channelMessage = new ChannelMessage(result.object);

      natsService.publishMessage(
        subject,
        {
          channelId: channelMessage.channelId,
          channelMessageId: result.object.id,
          reason: ChannelEventReason.messageCreated,
          data: {
            channelMessage,
          },
          // serviceRequest: queryOptions.serviceRequest,
        } as ChannelEventPayload,
        { timeout: 5000 },
        (error, ack) => {
          if (error) {
            logger.error('createChannelMessage: Failed to publish NATS message', {
              channelMessageId: result.object.id,
              subject,
              error: error.message,
              stack: error.stack,
            });
          } else {
            logger.debug('createChannelMessage: Successfully published NATS message', {
              channelMessageId: result.object.id,
              subject,
              ack,
            });
          }
        },
      );
    }

    return result;
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannelMessage;
