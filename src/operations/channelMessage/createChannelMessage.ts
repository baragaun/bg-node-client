import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
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
        response.object = new ChannelMessage(response.object);// NATS publish
        await natsService.publishMessage(
          `channel.${response.object.channelId}.message.created`,
          response.object,
        );
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
      // NATS publish
      await natsService.publishMessage(
        `channel.${result.object.channelId}.message.created`,
        result.object,
      );
    }

    if (!result.error || result.object) {
      await db.insert<ChannelMessage>(result.object, ModelType.ChannelMessage);
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
