import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<QueryResult<Channel>> => {
  if (!libData.isInitialized()) {
    logger.error('updateChannel: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('updateChannel: unauthorized');
    return { error: 'unauthorized' };
  }

  try {
    return db.update<Channel>(changes, ModelType.Channel);
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateChannel;
