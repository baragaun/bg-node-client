import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const createPurchaseOrder = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createPurchaseOrder: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: new PurchaseOrder(props),
        };
        const response = await client.mutation.createPurchaseOrder({
            $: args,
            ...modelFields.purchaseOrder,
        });
        logger.debug('fsdata.createPurchaseOrder response:', { response });
        return {
            object: response.data.createPurchaseOrder
                ? new PurchaseOrder(response.data.createPurchaseOrder)
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createPurchaseOrder: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createPurchaseOrder;
//# sourceMappingURL=createPurchaseOrder.js.map