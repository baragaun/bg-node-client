import { BaseModel } from './models/BaseModel.js';
import { MutationType } from './enums.js';

/**
 * The return type for channel object mutations.
 **/
export interface MutateResult<T extends BaseModel = BaseModel> {
  operation: MutationType;
  object?: T;
  error?: string;
}

