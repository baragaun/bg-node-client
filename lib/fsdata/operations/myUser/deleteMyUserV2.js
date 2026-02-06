import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const deleteMyUserV2 = async (cause, description, deletePhysically) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.deleteMyUserV2: unavailable');
            return { error: 'unavailable' };
        }
        const clientInfo = libData.clientInfoStore().clientInfo;
        const myUserId = clientInfo.myUserId;
        const client = graffleClientStore.get();
        logger.debug('fsdata.deleteMyUserV2: sending');
        const args = { cause, description, deletePhysically };
        const response = await client.mutation.deleteMyUserV2({
            $: args,
            ...modelFields.serviceRequest,
        });
        logger.debug('fsdata.deleteMyUserV2: response received.', { response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.deleteMyUserV2: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        if (!response.data.deleteMyUserV2?.id) {
            logger.error('fsdata.deleteMyUserV2: incorrect response', { expected: myUserId, actual: response.data.deleteMyUserV2 });
            return { error: 'incorrect response' };
        }
        return {};
    }
    catch (error) {
        logger.error('fsdata.deleteMyUserV2 failed.', { error: error.messages, stack: error.stack, headers: helpers.headers() });
        return {};
    }
};
export default deleteMyUserV2;
//# sourceMappingURL=deleteMyUserV2.js.map