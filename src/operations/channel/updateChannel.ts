import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { Channel } from '../../models/Channel.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannel = async (
  changes: Partial<Channel>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<Channel>> => {
  const result = await update<Channel>(changes, ModelType.Channel, queryOptions);
  return result;
};

export default updateChannel;
