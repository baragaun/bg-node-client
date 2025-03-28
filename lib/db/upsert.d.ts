import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
import { MutationResult } from '../types/MutationResult.js';
declare const upsert: <T extends Model = Model>(changes: Partial<T>, modelType?: ModelType) => Promise<MutationResult<T>>;
export default upsert;
