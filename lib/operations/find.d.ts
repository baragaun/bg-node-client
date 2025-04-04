import { MangoQuery } from 'rxdb';
import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';
declare const find: <T extends Model = Model>(query: MangoQuery<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
export default find;
