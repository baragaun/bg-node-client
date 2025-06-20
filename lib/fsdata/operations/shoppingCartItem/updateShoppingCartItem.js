import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';
const updateShoppingCartItem = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        return update(changes, ModelType.ShoppingCartItem, queryOptions);
    }
    catch (error) {
        logger.error('fsdata.updateShoppingCartItem: failed with error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default updateShoppingCartItem;
//# sourceMappingURL=updateShoppingCartItem.js.map