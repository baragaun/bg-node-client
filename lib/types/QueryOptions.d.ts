import { CachePolicy } from '../enums.js';
import { Model } from '../types/models/Model.js';
export type IsInTargetStateFunc = <T extends Model = Model>(obj: T) => boolean;
export interface QueryPollingOptions {
    enabled: boolean;
    isInTargetStateFunc?: IsInTargetStateFunc | 'watch-updated-at';
    oldUpdatedAt?: string;
    initialDelay?: number;
    interval?: number;
    timeout?: number;
}
export interface QueryOptions {
    cachePolicy?: CachePolicy;
    polling?: QueryPollingOptions;
}
