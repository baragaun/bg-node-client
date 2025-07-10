import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findWalletItems = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findWalletItems: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findWalletItems({
            $: args,
            ...modelFields.walletItem,
        });
        logger.debug('fsdata.findWalletItems received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findWalletItems: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return {
            objects: response.data.findWalletItems
                ? response.data.findWalletItems.map((item) => new WalletItem(item))
                : [],
        };
    }
    catch (error) {
        logger.error('fsdata.findWalletItems: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findWalletItems;
//# sourceMappingURL=findWalletItems.js.map