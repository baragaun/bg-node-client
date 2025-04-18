import { CachePolicy } from '../enums.js';
import { QueryOptions } from '../types/QueryOptions.js';

export const defaultQueryOptions: QueryOptions = {
  cachePolicy: CachePolicy.cacheFirst,
};

export const defaultQueryOptionsForMutations: QueryOptions = {
  cachePolicy: CachePolicy.network,
  polling: {
    enabled: false,
    isInTargetStateFunc: 'watch-updated-at',
    oldUpdatedAt: undefined,
    initialDelay: 1000,
    interval: 1000,
    timeout: 15 * 60 * 1000, // 15 minutes
  },
};
