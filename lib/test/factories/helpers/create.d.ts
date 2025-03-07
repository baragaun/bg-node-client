import { ModelType } from '../../../enums.js';
import { Model } from '../../../types/Model.js';
declare const create: <T extends Model>(props: Partial<T> | Partial<T>[], modelType: ModelType, options?: any, count?: number) => Promise<T | T[]>;
export default create;
