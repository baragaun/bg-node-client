import { ModelType } from '../../enums.js';
import { MutationResult } from '../../types/MutationResult.js';
import { Model } from '../../types/models/Model.js';
declare const replace: <T extends Model = Model>(obj: T, modelType?: ModelType) => Promise<MutationResult<T>>;
export default replace;
