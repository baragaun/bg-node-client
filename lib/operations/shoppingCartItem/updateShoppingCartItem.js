import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateShoppingCartItem = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.ShoppingCartItem, queryOptions);
};
export default updateShoppingCartItem;
//# sourceMappingURL=updateShoppingCartItem.js.map