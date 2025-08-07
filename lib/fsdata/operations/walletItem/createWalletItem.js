import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const createWalletItem = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createWalletItem: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: props,
        };
        const response = await client.mutation.createWalletItem({
            $: args,
            ...modelFields.walletItem,
        });
        logger.debug('fsdata.createWalletItem received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.createWalletItem: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.createWalletItem response:', { response: JSON.stringify(response) });
        return {
            object: response.data.createWalletItem
                ? new WalletItem(response.data.createWalletItem)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createWalletItem: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createWalletItem;
//# sourceMappingURL=createWalletItem.js.map