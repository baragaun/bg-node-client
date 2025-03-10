import { ModelType } from '../enums.js';
import { Model } from '../types/models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
declare const updateLocalObject: <T extends Model = Model>(id: string, object: T | null | undefined, modelType: ModelType, options: QueryOptions) => Promise<T | null>;
export default updateLocalObject;
