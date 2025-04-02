import { ModelType } from '../enums.js';
import { Model } from './Model.js';
declare const modelFactory: <T extends Model = Model>(props: Partial<T>, modelType: ModelType) => T;
export default modelFactory;
