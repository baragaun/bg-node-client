import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const verifyWalletItemTransferPassword = async (transferSlug, password) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.verifyWalletItemTransferPassword: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            transferSlug,
            password,
        };
        const response = await client.mutation.verifyWalletItemTransferPassword({
            $: args,
        });
        logger.debug('fsdata.verifyWalletItemTransferPassword response received.', { transferSlug, response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.verifyWalletItemTransferPassword: errors received.', { transferSlug, errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        return { object: response.data.verifyWalletItemTransferPassword };
    }
    catch (error) {
        logger.error('fsdata.verifyWalletItemTransferPassword: error.', { transferSlug, error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default verifyWalletItemTransferPassword;
//# sourceMappingURL=verifyWalletItemTransferPassword.js.map