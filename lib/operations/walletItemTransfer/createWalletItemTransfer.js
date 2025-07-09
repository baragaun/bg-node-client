import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const createWalletItemTransfer = async (props, _queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createWalletItemTransfer: unauthorized');
            return { error: 'unauthorized' };
        }
        const result = await fsdata.walletItemTransfer.createWalletItemTransfer(props);
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default createWalletItemTransfer;
//# sourceMappingURL=createWalletItemTransfer.js.map