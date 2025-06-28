import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import helpers from '../../helpers/helpers.js';
import deleteFunc from '../delete.js';
const deleteShoppingCartItem = async (id, deletePhysically) => {
    try {
        return deleteFunc(id, ModelType.ShoppingCartItem, deletePhysically);
    }
    catch (error) {
        logger.error('fsdata.deleteShoppingCartItem: failed with error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default deleteShoppingCartItem;
//# sourceMappingURL=deleteShoppingCartItem.js.map