import { ModelType } from '../../enums.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const deleteObject: (id: string, modelType: ModelType) => Promise<QueryResult<void>>;
export default deleteObject;
