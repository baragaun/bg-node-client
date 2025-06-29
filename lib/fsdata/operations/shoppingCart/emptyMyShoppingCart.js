import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const emptyMyShoppingCart = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.emptyMyShoppingCart: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const response = await client.mutation.emptyMyShoppingCart();
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.emptyMyShoppingCart: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.emptyMyShoppingCart response:', { response });
        return {
            object: response.data.emptyMyShoppingCart,
        };
    }
    catch (error) {
        logger.error('fsdata.emptyMyShoppingCart: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default emptyMyShoppingCart;
//# sourceMappingURL=emptyMyShoppingCart.js.map