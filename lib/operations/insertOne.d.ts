import { Model } from '../types/models/Model.js';
import { MutationResult } from '../types/MutationResult.js';
declare const insertOne: <T extends Model = Model>(object: T) => Promise<MutationResult<T>>;
export default insertOne;
