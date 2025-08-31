import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findWalletItemTransferAcceptInfoByTransferSlug = async (transferSlug) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findWalletItemTransferAcceptInfoByTransferSlug: unavailable');
            return { error: 'unavailable' };
        }
        return fsdata.walletItemTransfer.findWalletItemTransferAcceptInfoByTransferSlug(transferSlug);
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findWalletItemTransferAcceptInfoByTransferSlug;
//# sourceMappingURL=findWalletItemTransferAcceptInfoByTransferSlug.js.map