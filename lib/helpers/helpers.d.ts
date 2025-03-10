import { ModelType } from '../enums.js';
import { Model } from '../types/models/Model.js';
export declare const getModelTypeFromObject: <T extends Model = Model>(obj: T) => ModelType | null;
