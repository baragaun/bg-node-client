import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';
declare const findByMatch: <T extends Model = Model>(match: Partial<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
export default findByMatch;
