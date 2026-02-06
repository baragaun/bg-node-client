import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const createShoppingCartItem = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createShoppingCartItem: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: props,
        };
        const response = await client.mutation.createShoppingCartItem({
            $: args,
            ...modelFields.shoppingCartItem,
        });
        logger.debug('fsdata.createShoppingCartItem received response.', { response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.createShoppingCartItem: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        logger.debug('fsdata.createShoppingCartItem response:', { response: JSON.stringify(response) });
        return {
            object: response.data.createShoppingCartItem
                ? new ShoppingCartItem(response.data.createShoppingCartItem)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createShoppingCartItem: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createShoppingCartItem;
//# sourceMappingURL=createShoppingCartItem.js.map