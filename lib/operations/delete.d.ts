import { ModelType } from '../enums.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';
declare const deleteFnc: (id: string, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<void>>;
export default deleteFnc;
