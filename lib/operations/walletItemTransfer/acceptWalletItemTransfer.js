import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const acceptWalletItemTransfer = async (transferSlug, transferSecret) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('acceptWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        const result = await fsdata.walletItemTransfer.acceptWalletItemTransfer(transferSlug, transferSecret);
        if (result.error) {
            logger.error('acceptWalletItemTransfer: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default acceptWalletItemTransfer;
//# sourceMappingURL=acceptWalletItemTransfer.js.map