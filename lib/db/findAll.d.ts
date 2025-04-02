import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';
declare const findAll: <T extends Model = Model>(modelType: ModelType) => Promise<QueryResult<T>>;
export default findAll;
