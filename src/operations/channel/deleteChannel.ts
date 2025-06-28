import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { ServiceRequest } from '../../models/ServiceRequest.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';

const deleteChannel = async (
  id: string,
  deletePhysically: boolean,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {
  return deleteFnc(id, ModelType.Channel, deletePhysically, queryOptions);
};

export default deleteChannel;
