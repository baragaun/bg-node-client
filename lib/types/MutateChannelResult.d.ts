import { BaseModel } from './models/BaseModel';
import { MutationType } from './enums';
/**
 * The return type for channel object mutations.
 **/
export interface MutateChannelResult<T extends BaseModel = BaseModel> {
    operation: MutationType;
    object?: T;
    error?: string;
}
