import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const findAvailableUserHandle = async (startValue) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findAvailableUserHandle: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { startValue };
        logger.debug('fsdata.findAvailableUserHandle: sending.', { args });
        const response = await client.query.findAvailableUserHandle({ $: args });
        logger.debug('fsdata.findAvailableUserHandle: response received.', { response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.findAvailableUserHandle: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
        }
        if (!response.data.findAvailableUserHandle) {
            logger.error('fsdata.findAvailableUserHandle: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        return { object: response.data.findAvailableUserHandle };
    }
    catch (error) {
        logger.error('fsdata.findAvailableUserHandle failed.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findAvailableUserHandle;
//# sourceMappingURL=findAvailableUserHandle.js.map