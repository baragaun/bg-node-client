import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const deleteShoppingCartItem = async (id) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.deleteShoppingCartItem: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { id };
        const response = await client.mutation.deleteShoppingCartItem({
            $: args,
            ...modelFields.shoppingCartItem,
        });
        logger.debug('fsdata.deleteShoppingCartItem response:', { response });
        return {};
    }
    catch (error) {
        logger.error('fsdata.deleteShoppingCartItem: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default deleteShoppingCartItem;
//# sourceMappingURL=deleteShoppingCartItem.js.map