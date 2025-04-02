import { ModelType } from '../enums.js';
import { QueryResult } from '../types/QueryResult.js';
declare const findUpdatedAt: (id: string, modelType: ModelType) => Promise<QueryResult<string>>;
export default findUpdatedAt;
