import { ModelType } from "../enums.js";
import { Model } from "../models/Model.js";
import { QueryResult } from "../types/QueryResult.js";
declare const find: <T extends Model = Model>(match: Partial<T>, modelType: ModelType) => Promise<QueryResult<T>>;
export default find;
