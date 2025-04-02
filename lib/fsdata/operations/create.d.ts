import { ModelType } from '../../enums.js';
import { BaseModel } from '../../models/BaseModel.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const create: <T extends BaseModel = BaseModel>(props: Partial<T>, modelType: ModelType) => Promise<QueryResult<T>>;
export default create;
