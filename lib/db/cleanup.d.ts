import { ModelType } from '../enums.js';
import { QueryResult } from '../types/QueryResult.js';
declare const cleanup: (modelType: ModelType) => Promise<QueryResult<void>>;
export default cleanup;
