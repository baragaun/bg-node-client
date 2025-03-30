import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const isUserIdentAvailable = async (userIdent, identType) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.isUserIdentAvailable: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            ident: userIdent,
            identType: identType,
        };
        logger.debug('fsdata.isUserIdentAvailable: sending.', { args });
        const response = await client.query.isUserIdentAvailable({ $: args });
        logger.debug('fsdata.isUserIdentAvailable: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.isUserIdentAvailable: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (response.data.isUserIdentAvailable !== true && response.data.isUserIdentAvailable !== false) {
            logger.error('fsdata.isUserIdentAvailable: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        return { object: response.data.isUserIdentAvailable };
    }
    catch (error) {
        logger.error('fsdata.isUserIdentAvailable failed.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default isUserIdentAvailable;
//# sourceMappingURL=isUserIdentAvailable.js.map