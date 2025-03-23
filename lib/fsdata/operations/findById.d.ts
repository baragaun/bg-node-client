import { ModelType } from '../../enums.js';
import { Model } from '../../models/Model.js';
declare const findById: <T extends Model = Model>(id: string, modelType: ModelType) => Promise<T | null>;
export default findById;
