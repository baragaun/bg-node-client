// import db from '../../db/db.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findVendors = async (filter, match, _selector, options, _queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findVendors: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findVendors: unauthorized');
            return { error: 'unauthorized' };
        }
        // const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
        //   if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        //     return db.findById<Vendor>(filter.ids[0], ModelType.Vendor);
        //   }
        //
        //   const localQuery = buildQuery<Vendor, VendorListFilter>(
        //     ModelType.Vendor,
        //     filter,
        //     match,
        //     selector,
        //     options,
        //   );
        //
        //   const localResult = await db.find<Vendor>(localQuery, ModelType.Vendor);
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
        const result = await fsdata.vendor.findVendors(filter, match, options);
        // if (Array.isArray(result.objects) && result.objects.length > 0) {
        //   for (const vendor of result.objects) {
        //     await db.upsert<Vendor>(vendor, ModelType.Vendor);
        //   }
        // }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findVendors;
//# sourceMappingURL=findVendors.js.map