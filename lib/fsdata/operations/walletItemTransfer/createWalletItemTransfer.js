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
const createWalletItemTransfer = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.createWalletItemTransfer: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: props,
        };
        const response = await client.mutation.createWalletItemTransfer({
            $: args,
            ...modelFields.serviceRequest,
        });
        logger.debug('fsdata.createWalletItemTransfer response:', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.createWalletItemTransfer: errors received', { errorCode: response.errors[0]?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        const serviceRequest = response.data.createWalletItemTransfer;
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
        logger.debug('fsdata.createWalletItemTransfer: finished.', { pollingResponse });
        if (pollingResponse.error) {
            logger.error('fsdata.createWalletItemTransfer: polling failed', { error: pollingResponse.error });
            return { error: pollingResponse.error, serviceRequest };
        }
        if (!pollingResponse.object ||
            !Array.isArray(pollingResponse.object.objectIds) ||
            pollingResponse.object.objectIds.length < 1) {
            logger.error('fsdata.createWalletItemTransfer: wallet item transfer object not found', pollingResponse);
            return { error: ErrorCode.SystemError, serviceRequest };
        }
        const walletItemTransferId = pollingResponse.object.objectIds[0];
        const findResult = await findById(walletItemTransferId, ModelType.WalletItemTransfer);
        if (findResult.error) {
            logger.error('fsdata.createWalletItemTransfer: error loading wallet item transfer', { error: findResult.error, walletItemTransferId });
            return { error: findResult.error, serviceRequest };
        }
        if (!findResult.object) {
            logger.error('fsdata.createWalletItemTransfer: wallet item transfer not found', { walletItemTransferId });
            return { error: ErrorCode.NotFound, serviceRequest };
        }
        return { object: findResult.object, serviceRequest };
    }
    catch (error) {
        logger.error('fsdata.createWalletItemTransfer: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default createWalletItemTransfer;
//# sourceMappingURL=createWalletItemTransfer.js.map