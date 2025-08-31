// import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findBrands = async (filter, match, _selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findBrands: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findBrands: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local Cache
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                const brand = libData.getObjectFromCachedList(ModelType.Brand, filter.ids[0]);
                if (brand) {
                    return { objects: [brand] };
                }
            }
            const brands = libData.getObjectListFromCache(ModelType.Brand);
            if (Array.isArray(brands) && brands.length > 0) {
                return { objects: brands };
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.brand.findBrands(filter, match, options);
        if (Array.isArray(result.objects) && result.objects.length > 0) {
            libData.setObjectListInCache(ModelType.Brand, result.objects);
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findBrands;
//# sourceMappingURL=findBrands.js.map