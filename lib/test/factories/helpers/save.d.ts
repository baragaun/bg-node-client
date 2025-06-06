import { Model } from '../../../models/Model.js';
declare const save: <T extends Model = Model>(object: T) => Promise<T>;
export default save;
