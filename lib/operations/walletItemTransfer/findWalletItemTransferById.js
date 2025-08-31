import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findWalletItemTransferById = async (id, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findWalletItemTransferById: unavailable');
            return { error: 'unavailable' };
        }
        return fsdata.findById(id, ModelType.WalletItemTransfer, undefined, options);
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findWalletItemTransferById;
//# sourceMappingURL=findWalletItemTransferById.js.map