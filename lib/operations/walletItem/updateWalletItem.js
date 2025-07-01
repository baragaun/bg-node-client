import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateWalletItem = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.WalletItem, queryOptions);
};
export default updateWalletItem;
//# sourceMappingURL=updateWalletItem.js.map