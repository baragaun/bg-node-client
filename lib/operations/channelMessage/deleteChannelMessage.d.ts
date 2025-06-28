import { ServiceRequest } from '../../models/ServiceRequest.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const deleteChannelMessage: (id: string, deletePhysically: boolean, queryOptions?: QueryOptions) => Promise<QueryResult<ServiceRequest>>;
export default deleteChannelMessage;
