import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const clearMyShoppingCart = async (queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('clearMyShoppingCart: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('clearMyShoppingCart: unauthorized');
            return { error: 'unauthorized' };
        }
        const myUserId = libData.clientInfoStore().myUserId;
        if (!myUserId) {
            logger.error('clearMyShoppingCart: myUserId not set');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            const localResult = await db.findById(myUserId, ModelType.ShoppingCart);
            // todo: delete items
            if (!localResult.error && localResult.object) {
                return {};
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.shoppingCart.clearMyShoppingCart();
        if (result.error) {
            logger.error('clearMyShoppingCart: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default clearMyShoppingCart;
//# sourceMappingURL=clearMyShoppingCart.js.map