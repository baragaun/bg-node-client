import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findGiftCardProducts = async (filter, match, _selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findGiftCardProducts: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findGiftCardProducts: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local Cache
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                const product = libData.getObjectFromCachedList(ModelType.GiftCardProduct, filter.ids[0]);
                if (product) {
                    return { objects: [product] };
                }
            }
            const products = libData.getObjectListFromCache(ModelType.GiftCardProduct);
            if (Array.isArray(products) && products.length > 0) {
                return { objects: products };
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.giftCardProduct.findGiftCardProducts(filter, match, options);
        if (Array.isArray(result.objects) && result.objects.length > 0) {
            libData.setObjectListInCache(ModelType.GiftCardProduct, result.objects);
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findGiftCardProducts;
//# sourceMappingURL=findGiftCardProducts.js.map