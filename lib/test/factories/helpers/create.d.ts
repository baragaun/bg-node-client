import { ModelType } from '../../../enums.js';
import { Model } from '../../../models/Model.js';
declare const create: <T extends Model = Model>(props: Partial<T> | Partial<T>[], modelType: ModelType, options?: any, count?: number) => Promise<T | T[]>;
export default create;
