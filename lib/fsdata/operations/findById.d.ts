import { ModelType } from '../../enums.js';
import { BaseModel } from '../../types/models/BaseModel.js';
declare const findById: <T extends BaseModel = BaseModel>(id: string, modelType: ModelType) => Promise<T | null>;
export default findById;
