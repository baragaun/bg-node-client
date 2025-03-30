import { ModelType } from '../enums.js';
import { Model } from '../models/Model.js';
export declare const getModelTypeFromObject: <T extends Model = Model>(obj: Partial<T>) => ModelType | null;
