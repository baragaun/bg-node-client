// import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const deleteShoppingCartItem = async (id, deletePhysically) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('deleteShoppingCartItem: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('deleteShoppingCartItem: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        if (!id) {
            return { error: 'missing-input', operation: MutationType.delete };
        }
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (!allowNetwork) {
            // todo: remove from ShoppingCart.items
            // const response = await db.insert<ShoppingCartItem>(props, ModelType.ShoppingCartItem);
            //
            // if (response.object) {
            //   response.object = new ShoppingCartItem(response.object);
            //   return response;
            // }
            return {};
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.delete };
        }
        const result = await fsdata.delete(id, ModelType.ShoppingCartItem, deletePhysically);
        if (!result.error || result.object) {
            // todo: remove from ShoppingCart.items
            // await db.insert<ShoppingCartItem>(result.object, ModelType.ShoppingCartItem);
        }
        return result;
    }
    catch (error) {
        return {
            operation: MutationType.delete,
            error: error.message,
        };
    }
};
export default deleteShoppingCartItem;
//# sourceMappingURL=deleteShoppingCartItem.js.map