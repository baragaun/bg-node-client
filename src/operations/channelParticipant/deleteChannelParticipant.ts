import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { ServiceRequest } from '../../models/ServiceRequest.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';

const deleteChannelParticipant = async (
  id: string,
  deletePhysically: boolean,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {
  return deleteFnc(id, ModelType.ChannelParticipant, deletePhysically, queryOptions);
};

export default deleteChannelParticipant;
