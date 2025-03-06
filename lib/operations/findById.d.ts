import { ModelType } from '../types/enums.js';
import { Model } from '../types/Model.js';
import { QueryResult } from '../types/QueryResult.js';
import { QueryOptions } from '../types/QueryOptions.js';
declare const findById: <T extends Model = Model>(id: string, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
export default findById;
