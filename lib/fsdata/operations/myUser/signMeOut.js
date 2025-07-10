import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const signMeOut = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.signMeOut: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        logger.debug('fsdata.signMeOut: sending');
        const response = await client.mutation.signMeOut();
        logger.debug('fsdata.signMeOut: response received.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.signMeOut: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        if (response.errors) {
            logger.error('fsdata.signMeOut: failed with error.', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        return {};
    }
    catch (error) {
        logger.error('fsdata.signMeOut: mutation error:', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default signMeOut;
//# sourceMappingURL=signMeOut.js.map