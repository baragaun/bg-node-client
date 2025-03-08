import { ModelType } from '../../enums.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { BaseModel } from '../../types/models/BaseModel.js';
declare const pollForUpdatedObject: <T extends BaseModel = BaseModel>(modelType: ModelType, id: string, options: QueryOptions) => Promise<T | null>;
export default pollForUpdatedObject;
