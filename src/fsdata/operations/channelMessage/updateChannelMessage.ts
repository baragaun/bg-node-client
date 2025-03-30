import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
  queryOptions: QueryOptions<ChannelMessage> = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    return update<ChannelMessage>(changes, ModelType.ChannelMessage, queryOptions);
  } catch (error) {
    logger.error('fsdata.updateChannelMessage: failed with error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default updateChannelMessage;
