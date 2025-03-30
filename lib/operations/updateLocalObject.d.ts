import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';
declare const updateLocalObject: <T extends Model = Model>(id: string, object: T | null | undefined, modelType: ModelType, options: QueryOptions) => Promise<QueryResult<T>>;
export default updateLocalObject;
