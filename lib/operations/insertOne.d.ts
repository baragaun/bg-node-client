import { Model } from '../types/Model.js';
import { MutationResult } from '../types/MutationResult.js';
declare const insertOne: <T extends Model>(object: T) => Promise<MutationResult<T>>;
export default insertOne;
