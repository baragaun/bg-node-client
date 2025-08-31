import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findWalletItemById = async (id, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findWalletItemById: unavailable');
            return { error: 'unavailable' };
        }
        return fsdata.findById(id, ModelType.WalletItem, undefined, options);
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findWalletItemById;
//# sourceMappingURL=findWalletItemById.js.map