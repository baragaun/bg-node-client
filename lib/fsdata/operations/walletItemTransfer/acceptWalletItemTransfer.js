import { ModelType, ServiceRequestResult } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { getObjectIdFromServiceRequest } from '../../../utils/getObjectIdFromServiceRequest.js';
import { ErrorCode, ServiceRequestResult as ServiceRequestResultFromGql, } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
import findById from '../findById.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
const acceptWalletItemTransfer = async (transferSlug, transferSecret) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.acceptWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            transferSlug,
            transferSecret,
        };
        const response = await client.mutation.acceptWalletItemTransfer({
            $: args,
            ...modelFields.serviceRequest,
        });
        logger.debug('fsdata.acceptWalletItemTransfer response received.', { transferSlug, response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.acceptWalletItemTransfer: errors received.', { transferSlug, errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        let serviceRequest = response.data.acceptWalletItemTransfer;
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
        serviceRequest = pollingResponse.object;
        logger.debug('fsdata.acceptWalletItemTransfer: finished.', { transferSlug, pollingResponse });
        if (pollingResponse.error) {
            logger.error('fsdata.acceptWalletItemTransfer: polling failed', { transferSlug, error: pollingResponse.error });
            return { error: pollingResponse.error, serviceRequest };
        }
        if (serviceRequest.result === ServiceRequestResult.error) {
            logger.error('fsdata.acceptWalletItemTransfer: processes failed.', { transferSlug, serviceRequest });
            return { error: pollingResponse.error, serviceRequest };
        }
        if (!serviceRequest ||
            !Array.isArray(serviceRequest.objectIds) ||
            serviceRequest.objectIds.length < 1) {
            logger.error('fsdata.acceptWalletItemTransfer: wallet item transfer object not found', { transferSlug, pollingResponse });
            return { error: ErrorCode.SystemError, serviceRequest };
        }
        const walletItemId = getObjectIdFromServiceRequest(serviceRequest, ModelType.WalletItem);
        if (!walletItemId) {
            logger.error('fsdata.acceptWalletItemTransfer: failed to extract walletItemId from serviceRequest.', { transferSlug, serviceRequestId: serviceRequest.id, pollingResponse });
            return { error: ErrorCode.SystemError, serviceRequest };
        }
        const findResult = await findById(walletItemId, ModelType.WalletItem);
        if (findResult.error) {
            logger.error('fsdata.acceptWalletItemTransfer: error loading wallet item transfer.', { transferSlug, error: findResult.error, walletItemId });
            return { error: findResult.error, serviceRequest };
        }
        if (!findResult.object) {
            logger.error('fsdata.acceptWalletItemTransfer: wallet item transfer not found.', { transferSlug, walletItemId });
            return { error: ErrorCode.NotFound, serviceRequest };
        }
        return { object: findResult.object, serviceRequest };
    }
    catch (error) {
        logger.error('fsdata.acceptWalletItemTransfer: error.', { transferSlug, error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default acceptWalletItemTransfer;
//# sourceMappingURL=acceptWalletItemTransfer.js.map