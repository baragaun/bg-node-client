import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannelInvitation = async (
  changes: Partial<ChannelInvitation>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelInvitation>> => {
  // todo: handle this the same way as acceptChannelInvitation to notify the inviter
  return update<ChannelInvitation>(changes, ModelType.ChannelInvitation, queryOptions);
};

export default updateChannelInvitation;
