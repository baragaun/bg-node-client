import { ModelType } from '../../enums.js';
import { Model } from '../../types/Model.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const replace: <T extends Model>(obj: T, modelType?: ModelType) => Promise<MutationResult<T>>;
export default replace;
