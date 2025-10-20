import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannelParticipant = async (
  changes: Partial<ChannelParticipant>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelParticipant>> => {
  // todo: handle this the same way as createChannelParticipant
  return update<ChannelParticipant>(changes, ModelType.ChannelParticipant, queryOptions);
};

export default updateChannelParticipant;
