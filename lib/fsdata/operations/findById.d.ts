import { ModelType } from '../../enums.js';
import { Model } from '../../models/Model.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findById: <T extends Model = Model>(id: string, modelType: ModelType, selections?: any, options?: FindObjectsOptions) => Promise<QueryResult<T>>;
export default findById;
