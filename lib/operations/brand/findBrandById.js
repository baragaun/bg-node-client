import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findBrandById = async (id, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findBrandById: unavailable');
            return { error: 'unavailable' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        const loadFromLocal = queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork;
        if (loadFromLocal) {
            const cachedObject = libData.getObjectFromCachedList(ModelType.Brand, id);
            if (cachedObject) {
                return { object: cachedObject };
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        return fsdata.findById(id, ModelType.Brand, undefined, options);
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findBrandById;
//# sourceMappingURL=findBrandById.js.map