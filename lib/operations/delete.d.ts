import { ModelType } from '../enums.js';
import { ServiceRequest } from '../models/ServiceRequest.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';
declare const deleteFnc: (id: string, modelType: ModelType, deletePhysically: boolean, queryOptions?: QueryOptions) => Promise<QueryResult<ServiceRequest>>;
export default deleteFnc;
