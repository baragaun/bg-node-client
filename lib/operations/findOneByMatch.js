import db from '../db/db.js';
import { CachePolicy } from '../enums.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const findOneByMatch = async (match, modelType, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findOneByMatch: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findOneByMatch: unauthorized');
            return { error: 'unauthorized' };
        }
        const isOnline = libData.isOnline();
        const allowNetwork = isOnline && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local cache
        if ((queryOptions.cachePolicy === CachePolicy.cache ||
            queryOptions.cachePolicy === CachePolicy.cacheFirst ||
            libData.isOffline()) &&
            db.isModelTypeSupported(modelType)) {
            const result = await db.findOneByMatch(match, modelType);
            if (!result.error &&
                (queryOptions.cachePolicy === CachePolicy.cache || libData.isOffline()) &&
                result.object) {
                return result;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        // todo: get it from the network
        return { object: null };
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findOneByMatch;
//# sourceMappingURL=findOneByMatch.js.map