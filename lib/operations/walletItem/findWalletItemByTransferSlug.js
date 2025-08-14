import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findWalletItemByTransferSlug = async (transferSlug, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findWalletItemByTransferSlug: unavailable');
            return { error: 'unavailable' };
        }
        const result = await fsdata.walletItem.findWalletItemByTransferSlug(transferSlug, options);
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findWalletItemByTransferSlug;
//# sourceMappingURL=findWalletItemByTransferSlug.js.map