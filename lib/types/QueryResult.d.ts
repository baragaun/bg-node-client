import { Model } from './models/Model.js';
/**
 * The return type for channel object query.
 **/
export interface QueryResult<T extends Model = Model> {
    object?: T | null;
    objects?: T[];
    error?: string;
}
