import { MangoQuery } from 'rxdb';
import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';
declare const findByMatch: <T extends Model = Model>(query: MangoQuery<T>, modelType: ModelType) => Promise<QueryResult<T>>;
export default findByMatch;
