import { ModelType } from '../enums.js';
import { BaseModel } from '../types/models/BaseModel.js';
export declare const getModelTypeFromObject: <T extends BaseModel = BaseModel>(obj: T) => ModelType | null;
