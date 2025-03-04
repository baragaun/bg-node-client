import { Model } from '../../../types/Model.js';
declare const save: <T extends Model>(object: T) => Promise<T>;
export default save;
