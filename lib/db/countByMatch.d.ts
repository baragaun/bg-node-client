import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';
declare const countByMatch: <T extends Model = Model>(match: Partial<T>, modelType: ModelType) => Promise<QueryResult<number>>;
export default countByMatch;
