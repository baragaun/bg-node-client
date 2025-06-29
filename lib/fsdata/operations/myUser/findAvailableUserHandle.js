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
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findAvailableUserHandle: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.findAvailableUserHandle: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.findAvailableUserHandle: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
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