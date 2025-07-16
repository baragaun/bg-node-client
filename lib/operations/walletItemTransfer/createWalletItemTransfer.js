import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const createWalletItemTransfer = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createWalletItemTransfer: unauthorized');
            return { error: 'unauthorized' };
        }
        // const allowNetwork = libData.allowNetwork();
        if (!props) {
            return { error: 'missing-input', operation: MutationType.create };
        }
        return await fsdata.walletItemTransfer.createWalletItemTransfer(props);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createWalletItemTransfer;
//# sourceMappingURL=createWalletItemTransfer.js.map