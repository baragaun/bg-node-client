import { ModelType } from "../enums.js";
import { Model } from "../models/Model.js";
import { QueryResult } from "../types/QueryResult.js";
declare const deleteFunc: <T extends Model = Model>(id: string, modelType: ModelType) => Promise<QueryResult<T>>;
export default deleteFunc;
