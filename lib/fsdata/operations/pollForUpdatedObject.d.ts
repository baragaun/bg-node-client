import { ModelType } from '../../enums.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { Model } from '../../types/models/Model.js';
declare const pollForUpdatedObject: <T extends Model = Model>(id: string, modelType: ModelType, options: QueryOptions) => Promise<T | null>;
export default pollForUpdatedObject;
