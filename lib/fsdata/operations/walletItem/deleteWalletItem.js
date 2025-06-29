import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import helpers from '../../helpers/helpers.js';
import deleteFunc from '../delete.js';
const deleteWalletItem = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        return deleteFunc(id, ModelType.WalletItem, deletePhysically, queryOptions);
    }
    catch (error) {
        logger.error('fsdata.deleteWalletItem: failed with error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default deleteWalletItem;
//# sourceMappingURL=deleteWalletItem.js.map