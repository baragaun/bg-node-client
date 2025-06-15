import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findMyShoppingCart = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findMyShoppingCart: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const response = await client.query.findMyShoppingCart({
            ...modelFields.shoppingCart,
        });
        logger.debug('fsdata.findMyShoppingCart response:', { response });
        return {
            object: response.data.findMyShoppingCart,
        };
    }
    catch (error) {
        logger.error('fsdata.findMyShoppingCart: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findMyShoppingCart;
//# sourceMappingURL=findMyShoppingCart.js.map