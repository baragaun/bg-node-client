import { Model } from '../../types/Model.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const insert: <T extends Model = Model>(obj: T) => Promise<MutationResult<T>>;
export default insert;
