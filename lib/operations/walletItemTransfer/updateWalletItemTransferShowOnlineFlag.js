import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateWalletItemTransferShowOnlineFlag = async (transferSlug, transferSecret, showOnline) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('updateWalletItemTransferShowOnlineFlag: unavailable');
            return { error: 'unavailable' };
        }
        const result = await fsdata.walletItemTransfer.updateWalletItemTransferShowOnlineFlag(transferSlug, transferSecret, showOnline);
        if (result.error) {
            logger.error('updateWalletItemTransferShowOnlineFlag: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default updateWalletItemTransferShowOnlineFlag;
//# sourceMappingURL=updateWalletItemTransferShowOnlineFlag.js.map