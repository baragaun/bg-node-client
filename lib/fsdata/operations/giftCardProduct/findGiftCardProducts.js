import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { GiftCardProduct } from '../../../models/GiftCardProduct.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findGiftCardProducts = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findGiftCardProducts: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findGiftCardProducts({
            $: args,
            ...modelFields.giftCardProduct,
        });
        logger.debug('fsdata.findGiftCardProducts response:', { response });
        return {
            objects: response.data.findGiftCardProducts
                ? response.data.findGiftCardProducts.map((giftCard) => new GiftCardProduct(giftCard))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findGiftCardProducts: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findGiftCardProducts;
//# sourceMappingURL=findGiftCardProducts.js.map