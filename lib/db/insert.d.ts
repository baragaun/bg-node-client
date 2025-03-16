import { ModelType } from "../enums.js";
import { Model } from "../types/models/Model.js";
import { MutationResult } from "../types/MutationResult.js";
declare const insert: <T extends Model = Model>(obj: T, modelType?: ModelType) => Promise<MutationResult<T>>;
export default insert;
