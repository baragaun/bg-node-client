import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const createPurchaseOrder = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createPurchaseOrder: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createPurchaseOrder: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        if (!props) {
            return { error: 'missing-input', operation: MutationType.create };
        }
        const userId = libData.clientInfoStore().myUserId;
        if (!props.shoppingCartId) {
            props.shoppingCartId = userId;
        }
        if (!props.userId) {
            props.userId = userId;
        }
        if (!props.createdBy) {
            props.createdBy = userId;
        }
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.create };
        }
        return fsdata.purchaseOrder.createPurchaseOrder(props);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createPurchaseOrder;
//# sourceMappingURL=createPurchaseOrder.js.map