import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const declineWalletItemTransfer = async (transferSlug) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('declineWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        const result = await fsdata.walletItemTransfer.declineWalletItemTransfer(transferSlug);
        if (result.error) {
            logger.error('declineWalletItemTransfer: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default declineWalletItemTransfer;
//# sourceMappingURL=declineWalletItemTransfer.js.map