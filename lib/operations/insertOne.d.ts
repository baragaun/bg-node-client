import { MutationResult } from '../types/MutationResult.js';
import { Model } from '../types/Model.js';
declare const insertOne: <T extends Model>(object: T) => Promise<MutationResult<T>>;
export default insertOne;
