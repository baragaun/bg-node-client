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
        logger.debug('fsdata.createWalletItem response received.', { props, response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.createWalletItem: errors received.', { props, errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
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