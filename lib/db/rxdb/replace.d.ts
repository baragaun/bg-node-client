import { MutationResult } from '../../types/MutationResult.js';
import { Model } from '../../types/Model.js';
declare const replace: <T extends Model>(obj: T) => Promise<MutationResult<T>>;
export default replace;
