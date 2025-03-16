import { ModelType } from "../enums.js";
import { Model } from "../types/models/Model.js";
import { QueryResult } from "../types/QueryResult.js";
declare const findOne: <T extends Model = Model>(match: Partial<T>, modelType: ModelType) => Promise<QueryResult<T>>;
export default findOne;
