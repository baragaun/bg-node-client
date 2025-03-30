import { ModelType } from '../../enums.js';
import { Model } from '../../models/Model.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
/**
 * Updates an object through the GraphQL API. It performs the following steps:
 * Returns the result of the update or polling operation.
 * @param changes
 * @param modelType
 * @param queryOptions
 */
declare const update: <T extends Model = Model>(changes: Partial<T>, modelType: ModelType, queryOptions?: QueryOptions<T>) => Promise<QueryResult<T>>;
export default update;
