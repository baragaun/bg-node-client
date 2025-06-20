import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findMyShoppingCart = async (queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findMyShoppingCart: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findMyShoppingCart: unauthorized');
            return { error: 'unauthorized' };
        }
        const myUserId = libData.clientInfoStore().myUserId;
        if (!myUserId) {
            logger.error('findMyShoppingCart: myUserId not set');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
        //   const localResult = await db.findById<ShoppingCart>(
        //     myUserId,
        //     ModelType.ShoppingCart,
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
        const result = await fsdata.shoppingCart.findMyShoppingCart();
        if (result.error) {
            logger.error('findMyShoppingCart: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        if (result.object) {
            const shoppingCart = { ...result.object };
            await db.upsert(shoppingCart, ModelType.ShoppingCart);
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findMyShoppingCart;
//# sourceMappingURL=findMyShoppingCart.js.map