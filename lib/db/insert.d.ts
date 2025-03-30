import { ModelType } from "../enums.js";
import { Model } from "../models/Model.js";
import { QueryResult } from "../types/QueryResult.js";
declare const insert: <T extends Model = Model>(obj: T, modelType?: ModelType) => Promise<QueryResult<T>>;
export default insert;
