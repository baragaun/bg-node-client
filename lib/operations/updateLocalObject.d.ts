import { ModelType } from '../enums.js';
import { BaseModel } from '../types/models/BaseModel.js';
import { QueryOptions } from '../types/QueryOptions.js';
declare const updateLocalObject: <T extends BaseModel = BaseModel>(id: string, object: T | null | undefined, modelType: ModelType, options: QueryOptions) => Promise<T | null>;
export default updateLocalObject;
