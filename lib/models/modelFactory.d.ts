import { BaseModel } from '../types/models/BaseModel.js';
import { ModelType } from '../enums.js';
declare const modelFactory: <T extends BaseModel = BaseModel>(attributes: Partial<T>, modelType: ModelType) => T;
export default modelFactory;
