import { MutationType } from '../enums.js';
/**
 * The return type for channel object mutations.
 **/
export interface MutationResult<T> {
    operation: MutationType;
    object?: T;
    error?: string;
}
