import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const verifyWalletItemTransfer = async (transferSecret, walletItemId) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.verifyWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            transferSecret,
            walletItemId,
        };
        const response = await client.query.verifyWalletItemTransfer({
            $: args,
            ...modelFields.walletItem,
        });
        logger.debug('fsdata.verifyWalletItemTransfer response:', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.verifyWalletItemTransfer: errors received', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            object: response.data.verifyWalletItemTransfer
                ? new WalletItem(response.data.verifyWalletItemTransfer)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.verifyWalletItemTransfer: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default verifyWalletItemTransfer;
//# sourceMappingURL=verifyWalletItemTransfer.js.map