import { MutationType } from '../enums.js';

/**
 * The return type for channel object query.
 **/
export interface QueryResult<T = any> {
  operation?: MutationType;
  object?: T | null;
  objects?: T[];
  error?: string;
}
