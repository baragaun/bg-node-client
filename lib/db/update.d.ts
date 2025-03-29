import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';
declare const update: <T extends Model = Model>(changes: Partial<T>, modelType?: ModelType) => Promise<QueryResult<T>>;
export default update;
