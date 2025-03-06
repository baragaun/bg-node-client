import { CachePolicy, QueryOptions } from '../types/index.js';

export const defaultQueryOptions: QueryOptions = {
  cachePolicy: CachePolicy.cacheFirst,
};
