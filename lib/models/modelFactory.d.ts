import { ModelType } from '../enums.js';
import { Model } from '../types/models/Model.js';
declare const modelFactory: <T extends Model = Model>(attributes: Partial<T>, modelType: ModelType) => T;
export default modelFactory;
