import { BaseModel } from '../types/models/BaseModel.js';
import { ModelType } from '../types/enums.js';
export declare const getModelTypeFromObject: <T extends BaseModel = BaseModel>(obj: T) => ModelType | null;
