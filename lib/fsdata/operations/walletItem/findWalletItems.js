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
            id: true,
            ...modelFields.walletItem,
        });
        logger.debug('fsdata.findWalletItems response:', { response });
        return {
            objects: response.data.findWalletItems
                ? response.data.findWalletItems.map((i) => new WalletItem(i))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findWalletItems: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findWalletItems;
//# sourceMappingURL=findWalletItems.js.map