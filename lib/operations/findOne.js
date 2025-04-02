import db from '../db/db.js';
import { CachePolicy } from '../enums.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const findOne = async (query, modelType, queryOptions = defaultQueryOptions) => {
    if (!libData.isInitialized()) {
        logger.error('findOne: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('findOne: unauthorized');
        return { error: 'unauthorized' };
    }
    if (queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst ||
        libData.isOffline()) {
        try {
            const result = await db.findOne(query, modelType);
            if (!result.error &&
                (queryOptions.cachePolicy === CachePolicy.cache || libData.isOffline()) &&
                result.object) {
                return result;
            }
        }
        catch (error) {
            return { error: error.message };
        }
    }
    return { object: null };
};
export default findOne;
//# sourceMappingURL=findOne.js.map