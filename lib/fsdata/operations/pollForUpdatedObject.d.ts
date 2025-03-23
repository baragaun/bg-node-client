import { ModelType } from '../../enums.js';
import { Model } from '../../models/Model.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const pollForUpdatedObject: <T extends Model = Model>(id: string, modelType: ModelType, options: QueryOptions) => Promise<T | null>;
export default pollForUpdatedObject;
