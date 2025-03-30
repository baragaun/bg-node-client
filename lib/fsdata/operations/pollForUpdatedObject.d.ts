import { ModelType } from '../../enums.js';
import { Model } from '../../models/Model.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
/**
 * Polls for an updated object.
 * @param id
 * @param modelType
 * @param options
 */
declare const pollForUpdatedObject: <T extends Model = Model>(id: string, modelType: ModelType, options: QueryOptions) => Promise<QueryResult<T>>;
export default pollForUpdatedObject;
