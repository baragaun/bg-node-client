import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const verifyMyPassword = async (password) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.verifyMyPassword: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { password };
        logger.debug('fsdata.verifyMyPassword: sending.', { args });
        const response = await client.query.verifyMyPassword({ $: args });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.verifyMyPassword: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.verifyMyPassword: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.verifyMyPassword: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        return { object: response.data.verifyMyPassword };
    }
    catch (error) {
        logger.error('fsdata.verifyMyPassword: failed with error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default verifyMyPassword;
//# sourceMappingURL=verifyMyPassword.js.map