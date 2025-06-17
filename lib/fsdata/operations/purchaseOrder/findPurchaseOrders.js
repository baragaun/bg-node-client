import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findPurchaseOrders = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findPurchaseOrders: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findPurchaseOrders({
            $: args,
            ...modelFields.purchaseOrder,
        });
        logger.debug('fsdata.findPurchaseOrders response:', { response });
        return {
            objects: response.data.findPurchaseOrders
                ? response.data.findPurchaseOrders.map((purchaseOrder) => new PurchaseOrder(purchaseOrder))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findPurchaseOrders: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findPurchaseOrders;
//# sourceMappingURL=findPurchaseOrders.js.map