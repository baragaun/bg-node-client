import { ModelType } from '../../enums.js';
import { MutationResult } from '../../types/MutationResult.js';
import { Model } from '../../types/models/Model.js';
declare const deleteFunc: <T extends Model = Model>(id: string, modelType: ModelType) => Promise<MutationResult<T>>;
export default deleteFunc;
