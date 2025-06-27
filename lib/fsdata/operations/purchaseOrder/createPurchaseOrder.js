import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { PurchaseOrderInput } from '../../../models/PurchaseOrderInput.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const createPurchaseOrder = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createPurchaseOrder: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: new PurchaseOrderInput(props),
        };
        const response = await client.mutation.createPurchaseOrder({
            $: args,
            id: true,
            result: true,
            message: true,
            objectIds: true,
            errorCode: true,
        });
        logger.debug('fsdata.createPurchaseOrder response:', { response });
        return {
            object: response.data.createPurchaseOrder ? response.data.createPurchaseOrder : null,
        };
    }
    catch (error) {
        logger.error('fsdata.createPurchaseOrder: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createPurchaseOrder;
//# sourceMappingURL=createPurchaseOrder.js.map