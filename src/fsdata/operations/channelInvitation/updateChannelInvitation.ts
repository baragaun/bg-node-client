import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';

const updateChannelInvitation = async (
  changes: Partial<ChannelInvitation>,
  queryOptions: QueryOptions<ChannelInvitation> = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    return update<ChannelInvitation>(changes, ModelType.ChannelInvitation, queryOptions);
  } catch (error) {
    logger.error('fsdata.updateChannelInvitation: failed with error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default updateChannelInvitation;
