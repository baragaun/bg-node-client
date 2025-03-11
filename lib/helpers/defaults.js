import { CachePolicy } from '../enums.js';
export const defaultQueryOptions = {
    cachePolicy: CachePolicy.cacheFirst,
};
export const defaultQueryOptionsForMutations = {
    cachePolicy: CachePolicy.network,
    polling: {
        enabled: false,
        isInTargetStateFunc: 'watch-updated-at',
        oldUpdatedAt: undefined,
        initialDelay: 1000,
        interval: 1000,
        timeout: 60000,
    },
};
//# sourceMappingURL=defaults.js.map