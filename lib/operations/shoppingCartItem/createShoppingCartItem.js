import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ShoppingCartItem } from '../../models/ShoppingCartItem.js';
const createShoppingCartItem = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createShoppingCartItem: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createShoppingCartItem: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        if (!props) {
            return { error: 'missing-input', operation: MutationType.create };
        }
        if (!props.createdBy) {
            props.createdBy = libData.clientInfoStore().myUserId;
        }
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.create };
        }
        const result = await fsdata.shoppingCartItem.createShoppingCartItem(props);
        if (result.object) {
            result.object = new ShoppingCartItem(result.object);
        }
        if (!result.error || result.object) {
            await db.insert(result.object, ModelType.ShoppingCartItem);
        }
        return result;
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createShoppingCartItem;
//# sourceMappingURL=createShoppingCartItem.js.map