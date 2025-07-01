import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequestResult as ServiceRequestResultFromGql, } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
const clearMyShoppingCart = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.clearMyShoppingCart: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const response = await client.mutation.clearMyShoppingCart({ ...modelFields.serviceRequest });
        logger.debug('fsdata.clearMyShoppingCart response:', { response });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.clearMyShoppingCart: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        const serviceRequest = response.data.clearMyShoppingCart;
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
        logger.debug('fsdata.clearMyShoppingCart: finished.', { pollingResponse });
        if (pollingResponse.error) {
            logger.error('fsdata.clearMyShoppingCart: polling failed', { error: pollingResponse.error });
            return { error: pollingResponse.error, serviceRequest };
        }
        return {
            object: response.data.clearMyShoppingCart,
        };
    }
    catch (error) {
        logger.error('fsdata.clearMyShoppingCart: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default clearMyShoppingCart;
//# sourceMappingURL=clearMyShoppingCart.js.map