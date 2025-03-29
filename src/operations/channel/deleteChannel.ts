import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { QueryResult } from '../../types/QueryResult.js';

const deleteChannel = async (id: string): Promise<QueryResult<Channel>> => {
  if (!libData.isInitialized()) {
    logger.error('deleteChannel: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('deleteChannel: unauthorized');
    return { error: 'unauthorized' };
  }

  try {
    await db.delete(id, ModelType.Channel);

    return {
      operation: MutationType.delete,
    };
  } catch (error) {
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
};

export default deleteChannel;
