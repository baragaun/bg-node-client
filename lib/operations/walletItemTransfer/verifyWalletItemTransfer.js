import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const verifyWalletItemTransfer = async (transferSecret, walletItemId) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('verifyWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('verifyWalletItemTransfer: unauthorized');
            return { error: 'unauthorized' };
        }
        const result = await fsdata.walletItemTransfer.verifyWalletItemTransfer(transferSecret, walletItemId);
        if (result.error) {
            logger.error('verifyWalletItemTransfer: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default verifyWalletItemTransfer;
//# sourceMappingURL=verifyWalletItemTransfer.js.map