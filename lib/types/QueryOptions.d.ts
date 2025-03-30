import { CachePolicy } from '../enums.js';
import { Model } from '../models/Model.js';
export type IsInTargetStateFunc<T extends Model = Model> = (obj: T) => boolean;
export interface QueryPollingOptions<T extends Model = Model> {
    enabled: boolean;
    isInTargetStateFunc?: IsInTargetStateFunc<T> | 'watch-updated-at';
    oldUpdatedAt?: string;
    initialDelay?: number;
    interval?: number;
    timeout?: number;
}
export interface QueryOptions<T extends Model = Model> {
    cachePolicy?: CachePolicy;
    polling?: QueryPollingOptions<T>;
}
