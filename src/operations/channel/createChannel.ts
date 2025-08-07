import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import natsService from '../../nats/index.js';
import { QueryResult } from '../../types/QueryResult.js';

const createChannel = async (
  props: Partial<Channel>,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('createChannel: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('createChannel: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    if (!props) {
      return { error: 'missing-input', operation: MutationType.create };
    }

    if (!props.createdBy) {
      props.createdBy = libData.clientInfoStore().myUserId;
    }

    if (!Array.isArray(props.userIds) || props.userIds.length < 1) {
      props.userIds = [props.createdBy];
    }

    if (
      !props.otherUserId &&
      Array.isArray(props.userIds) &&
      props.userIds.length > 1
    ) {
      props.otherUserId = props.userIds.find((id) => id !== props.createdBy);
    }

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (!allowNetwork) {
      const response = await db.insert<Channel>(props, ModelType.Channel);

      if (response.object) {
        response.object = new Channel(response.object);
        return response;
      }

      natsService.subscribeToChannel(response.object.id);

      return response;
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.create };
    }

    const result = await fsdata.channel.createChannel(props);

    if (result.object) {
      result.object = new Channel(result.object);
    }

    if (!result.error || result.object) {
      await db.insert<Channel>(result.object, ModelType.Channel);
    }

    natsService.subscribeToChannel(result.object.id);

    return result;
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannel;
