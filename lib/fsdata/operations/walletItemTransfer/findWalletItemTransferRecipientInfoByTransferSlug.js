import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransferRecipientInfo } from '../../../models/WalletItemTransferRecipientInfo.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findWalletItemTransferRecipientInfoByTransferSlug = async (transferSlug) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findWalletItemTransferRecipientInfoByTransferSlug: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            transferSlug,
        };
        const response = await client.query.findWalletItemTransferRecipientInfoByTransferSlug({
            $: args,
            ...modelFields.walletItemTransferRecipientInfo,
        });
        logger.debug('fsdata.findWalletItemTransferRecipientInfoByTransferSlug response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findWalletItemTransferRecipientInfoByTransferSlug: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            object: new WalletItemTransferRecipientInfo(response.data.findWalletItemTransferRecipientInfoByTransferSlug),
        };
    }
    catch (error) {
        logger.error('fsdata.findWalletItemTransferRecipientInfoByTransferSlug: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findWalletItemTransferRecipientInfoByTransferSlug;
//# sourceMappingURL=findWalletItemTransferRecipientInfoByTransferSlug.js.map