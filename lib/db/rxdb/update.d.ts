import { ModelType } from '../../types/enums.js';
import { MutationResult } from '../../types/MutationResult.js';
import { Model } from '../../types/Model.js';
declare const update: <T extends Model = Model>(changes: Partial<T>, modelType: ModelType) => Promise<MutationResult<T>>;
export default update;
