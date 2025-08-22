import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findWalletItemTransfers = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findWalletItemTransfers: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findWalletItemTransfers({
            $: args,
            ...modelFields.walletItemTransfer,
        });
        logger.debug('fsdata.findWalletItemTransfers response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findWalletItemTransfers: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            objects: response.data.findWalletItemTransfers
                ? response.data.findWalletItemTransfers.map((transfer) => new WalletItemTransfer(transfer))
                : [],
        };
    }
    catch (error) {
        logger.error('fsdata.findWalletItemTransfers: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findWalletItemTransfers;
//# sourceMappingURL=findWalletItemTransfers.js.map