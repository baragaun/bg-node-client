import { BaseModel } from './models/BaseModel.js';
import { MutationType } from './enums.js';
/**
 * The return type for channel object mutations.
 **/
export interface MutationResult<T = BaseModel> {
    operation: MutationType;
    object?: T;
    error?: string;
}
