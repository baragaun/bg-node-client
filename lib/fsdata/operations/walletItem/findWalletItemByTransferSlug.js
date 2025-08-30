import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findWalletItemByTransferSlug = async (transferSlug, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findWalletItemByTransferSlug: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            transferSlug,
            options: options,
        };
        const response = await client.query.findWalletItemByTransferSlug({
            $: args,
            ...modelFields.walletItem,
        });
        logger.debug('fsdata.findWalletItemByTransferSlug received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findWalletItemByTransferSlug: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            object: response.data.findWalletItemByTransferSlug
                ? new WalletItem(response.data.findWalletItemByTransferSlug)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findWalletItemByTransferSlug: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findWalletItemByTransferSlug;
//# sourceMappingURL=findWalletItemByTransferSlug.js.map