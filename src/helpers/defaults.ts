import { CachePolicy } from '../enums.js';
import { QueryOptions } from '../types/index.js';

export const defaultQueryOptions: QueryOptions = {
  cachePolicy: CachePolicy.cacheFirst,
  polling: {
    isInTargetStateFunc: 'watch-updated-at',
    oldUpdatedAt: undefined,
    initialDelay: 1000,
    interval: 1000,
  },
};
