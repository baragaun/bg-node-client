import { CachePolicy } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findPurchaseOrders = async (filter, match, _selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findPurchaseOrders: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findPurchaseOrders: unauthorized');
            return { error: 'unauthorized' };
        }
        const myUserId = libData.clientInfoStore().myUserId;
        if (!myUserId) {
            logger.error('findPurchaseOrders: myUserId not set');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
        //   if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        //     return db.findById<PurchaseOrder>(filter.ids[0], ModelType.PurchaseOrder);
        //   }
        //
        //   const localResult = await db.findById<PurchaseOrder>(
        //     myUserId,
        //     ModelType.PurchaseOrder,
        //   );
        //
        //   if (!localResult.error && localResult.object) {
        //     return localResult;
        //   }
        // }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.purchaseOrder.findPurchaseOrders(filter, match, options);
        if (result.error) {
            logger.error('findPurchaseOrders: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        // if (Array.isArray(result.objects) && result.objects.length > 0) {
        //   for (const purchaseOrder of result.objects) {
        //     await db.upsert<PurchaseOrder>(purchaseOrder, ModelType.PurchaseOrder);
        //   }
        // }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findPurchaseOrders;
//# sourceMappingURL=findPurchaseOrders.js.map