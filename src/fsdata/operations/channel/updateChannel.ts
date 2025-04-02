import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';

const updateChannel = async (
  changes: Partial<Channel>,
  queryOptions: QueryOptions<Channel> = defaultQueryOptionsForMutations,
): Promise<QueryResult<Channel>> => {
  try {
    return update<Channel>(changes, ModelType.Channel, queryOptions);
  } catch (error) {
    logger.error('fsdata.updateChannel: failed with error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default updateChannel;
