import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findProductCategories = async (filter, match, _selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findProductCategories: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findProductCategories: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local Cache
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                const productCategory = libData.getObjectFromCachedList(ModelType.ProductCategory, filter.ids[0]);
                if (productCategory) {
                    return { objects: [productCategory] };
                }
            }
            const productCategories = libData.getObjectListFromCache(ModelType.ProductCategory);
            if (Array.isArray(productCategories) && productCategories.length > 0) {
                return { objects: productCategories };
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.productCategory.findProductCategories(filter, match, options);
        if (Array.isArray(result.objects) && result.objects.length > 0) {
            libData.setObjectListInCache(ModelType.ProductCategory, result.objects);
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findProductCategories;
//# sourceMappingURL=findProductCategories.js.map