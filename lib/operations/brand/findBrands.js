// import db from '../../db/db.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findBrands = async (filter, match, _selector, options, _queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findBrands: unavailable');
            return { error: 'unavailable' };
        }
        // if (!libData.clientInfoStore().isSignedIn) {
        //   logger.error('findBrands: unauthorized');
        //   return { error: 'unauthorized' };
        // }
        // const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
        //   if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        //     return db.findById<Brand>(filter.ids[0], ModelType.Brand);
        //   }
        //
        //   const localQuery = buildQuery<Brand, BrandListFilter>(
        //     ModelType.Brand,
        //     filter,
        //     match,
        //     selector,
        //     options,
        //   );
        //
        //   const localResult = await db.find<Brand>(localQuery, ModelType.Brand);
        //
        //   if ((!localResult.error && localResult.objects) || !allowNetwork) {
        //     return localResult;
        //   }
        // }
        //------------------------------------------------------------------------------------------------
        // Network
        // if (!allowNetwork) {
        //   return { error: 'offline' };
        // }
        const result = await fsdata.brand.findBrands(filter, match, options);
        // if (Array.isArray(result.objects) && result.objects.length > 0) {
        //   for (const brand of result.objects) {
        //     await db.upsert<Brand>(brand, ModelType.Brand);
        //   }
        // }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findBrands;
//# sourceMappingURL=findBrands.js.map