import { MutationResult } from '../../types/MutationResult.js';
import { Model } from '../../types/Model.js';
declare const insert: <T extends Model = Model>(obj: T) => Promise<MutationResult<T>>;
export default insert;
