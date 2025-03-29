import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';
declare const insertOne: <T extends Model = Model>(object: T) => Promise<QueryResult<T>>;
export default insertOne;
