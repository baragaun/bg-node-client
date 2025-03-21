import { ModelType } from '../enums.js';
import { Model } from '../types/models/Model.js';
import { MutationResult } from '../types/MutationResult.js';
declare const update: <T extends Model = Model>(changes: Partial<T>, modelType?: ModelType) => Promise<MutationResult<T>>;
export default update;
