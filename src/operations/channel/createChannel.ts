import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { ChannelInput } from '../../fsdata/gql/graphql.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { QueryResult } from '../../types/QueryResult.js';

const createChannel = async (
  props: Partial<Channel>,
): Promise<QueryResult<Channel>> => {
  if (!libData.isInitialized()) {
    logger.error('createChannel: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('createChannel: unauthorized');
    return { error: 'unauthorized' };
  }

  try {
    const result = await fsdata.channel.createChannel(props as unknown as ChannelInput);

    if (!result.error || result.object) {
      await db.insert<Channel>(result.object, ModelType.Channel);
    }

    return result;
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannel;
