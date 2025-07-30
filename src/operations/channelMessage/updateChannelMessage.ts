import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelMessage>> => {
  const result = await update<ChannelMessage>(changes, ModelType.ChannelMessage, queryOptions);
  return result;
};

export default updateChannelMessage;
