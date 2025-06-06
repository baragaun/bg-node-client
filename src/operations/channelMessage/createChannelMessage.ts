import db from '../../db/db.js';
import { BgListenerTopic, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { BgChannelDataListener } from '../../types/BgChannelListener.js';
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
    // Local cache
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
    }

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.channel &&
        typeof (listener as BgChannelDataListener).onChannelMessageCreated === 'function'
      ) {
        logger.debug('createChannelMessage: notifying listener', { id: listener.id });
        const listenerResponse = (listener as BgChannelDataListener).onChannelMessageCreated(result);
        if (listenerResponse && typeof listenerResponse.then === 'function') {
          listenerResponse.catch((error) => {
            logger.error('createChannelMessage: listener onChannelMessageCreated failed.', { error });
          });
        }
      }
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
