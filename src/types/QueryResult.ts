import { BaseModel } from './models/BaseModel.js';

/**
 * The return type for channel object query.
 **/
export interface QueryResult<T extends BaseModel = BaseModel> {
  object?: T | null;
  objects?: T[];
  error?: string;
}
