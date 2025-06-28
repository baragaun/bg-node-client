import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ErrorCode, ServiceRequestResult as ServiceRequestResultFromGql, } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
import findById from '../findById.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
const createPurchaseOrder = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createPurchaseOrder: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: props,
        };
        const response = await client.mutation.createPurchaseOrder({
            $: args,
            ...modelFields.serviceRequest,
        });
        logger.debug('fsdata.createPurchaseOrder response:', { response });
        const serviceRequest = response.data.createPurchaseOrder;
        const queryOptions = defaultQueryOptionsForMutations;
        queryOptions.polling = {
            enabled: true,
            isInTargetStateFunc: (sr) => (!!sr.finishedAt ||
                sr.result !== ServiceRequestResultFromGql.Unset),
            initialDelay: 1000,
            interval: 1000,
            timeout: 15 * 60 * 1000, // 15 minutes
        };
        const pollingResponse = await pollForUpdatedObject(serviceRequest.id, ModelType.ServiceRequest, queryOptions);
        logger.debug('fsdata.createPurchaseOrder: finished.', { pollingResponse });
        if (pollingResponse.error) {
            logger.error('fsdata.createPurchaseOrder: polling failed', { error: pollingResponse.error });
            return { error: pollingResponse.error, serviceRequest };
        }
        if (!pollingResponse.object ||
            !Array.isArray(pollingResponse.object.objectIds) ||
            pollingResponse.object.objectIds.length < 1) {
            logger.error('fsdata.createPurchaseOrder: purchase order object not found');
            return { error: ErrorCode.SystemError, serviceRequest };
        }
        const purchaseOrderId = pollingResponse.object.objectIds[0];
        const findResult = await findById(purchaseOrderId, ModelType.PurchaseOrder, { updatedAt: true });
        return { ...findResult, serviceRequest };
    }
    catch (error) {
        logger.error('fsdata.createPurchaseOrder: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createPurchaseOrder;
//# sourceMappingURL=createPurchaseOrder.js.map