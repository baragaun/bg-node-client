import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const blockUserForMeV2: (userId: string, reasonTextId: string | undefined, notes: string | undefined, queryOptions?: QueryOptions) => Promise<QueryResult<ServiceRequest>>;
export default blockUserForMeV2;
