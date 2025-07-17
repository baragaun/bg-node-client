import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
const unblockUserForMeV2 = async (userId, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.unblockUserForMeV2: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        if (!queryOptions) {
            queryOptions = defaultQueryOptionsForMutations;
        }
        const args = { userId };
        logger.debug('fsdata.unblockUserForMeV2: sending.', { args });
        const response = await client.mutation.unblockUserForMeV2({ $: args });
        logger.debug('fsdata.unblockUserForMeV2: response received.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.unblockUserForMeV2: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        if (response.errors) {
            logger.error('fsdata.unblockUserForMeV2: failed with error.', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.unblockUserForMeV2) {
            logger.error('fsdata.unblockUserForMeV2: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        queryOptions.polling = {
            enabled: true,
            isInTargetStateFunc: ((updatedServiceRequest) => !!updatedServiceRequest.finishedAt),
        };
        logger.debug('fsdata.unblockUserForMeV2: starting polling.');
        const pollingResult = await pollForUpdatedObject(response.data.unblockUserForMeV2.id, ModelType.ServiceRequest, queryOptions);
        logger.debug('fsdata.unblockUserForMeV2: polling finished.', { pollingResult });
        return pollingResult;
    }
    catch (error) {
        logger.error('fsdata.unblockUserForMeV2: failed with error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default unblockUserForMeV2;
//# sourceMappingURL=unblockUserForMeV2.js.map