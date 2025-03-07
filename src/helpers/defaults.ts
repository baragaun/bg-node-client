import { CachePolicy } from '../enums.js';
import { QueryOptions } from '../types/index.js';

export const defaultQueryOptions: QueryOptions = {
  cachePolicy: CachePolicy.cacheFirst,
};
