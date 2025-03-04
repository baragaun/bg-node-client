import { Model } from '../../../types/Model.js';
import { ModelType } from '../../../types/enums.js';
declare const create: <T extends Model>(props: Partial<T> | Partial<T>[], modelType: ModelType, options?: any, count?: number) => Promise<T | T[]>;
export default create;
