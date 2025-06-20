import { MangoQuery } from 'rxdb';
import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';
declare const count: <T extends Model = Model>(query: MangoQuery<T> | null | undefined, match: Partial<T> | null | undefined, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<number>>;
export default count;
