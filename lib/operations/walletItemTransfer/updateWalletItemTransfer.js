import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import update from '../update.js';
const updateWalletItemTransfer = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    return update(changes, ModelType.WalletItemTransfer, queryOptions);
};
export default updateWalletItemTransfer;
//# sourceMappingURL=updateWalletItemTransfer.js.map