import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const endMySession = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.endMySession: unavailable');
            return { error: 'unavailable' };
        }
        const clientInfo = libData.clientInfoStore().clientInfo;
        const myUserId = clientInfo.myUserId;
        const client = graffleClientStore.get();
        logger.debug('fsdata.endMySession: sending');
        const response = await client.mutation.endMySession();
        logger.debug('fsdata.endMySession: response received.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.endMySession: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        if (response.errors) {
            logger.error('fsdata.endMySession: failed with error.', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (response.data.endMySession !== myUserId) {
            logger.error('fsdata.endMySession: incorrect response', { expected: myUserId, actual: response.data.endMySession });
            return { error: 'incorrect response' };
        }
        return {};
    }
    catch (error) {
        logger.error('fsdata.endMySession failed.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default endMySession;
//# sourceMappingURL=endMySession.js.map