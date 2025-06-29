import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const deleteMyUser = async (cause, description, deletePhysically) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.deleteMyUser: unavailable');
            return { error: 'unavailable' };
        }
        const clientInfo = libData.clientInfoStore().clientInfo;
        const myUserId = clientInfo.myUserId;
        const client = graffleClientStore.get();
        logger.debug('fsdata.deleteMyUser: sending');
        const args = { cause, description, deletePhysically };
        const response = await client.mutation.deleteMyUser({ $: args });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.deleteMyUser: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.deleteMyUser: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.deleteMyUser: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (response.data.deleteMyUser !== myUserId) {
            logger.error('fsdata.deleteMyUser: incorrect response', { expected: myUserId, actual: response.data.deleteMyUser });
            return { error: 'incorrect response' };
        }
        return {};
    }
    catch (error) {
        logger.error('fsdata.deleteMyUser failed.', { error: error.messages, stack: error.stack, headers: helpers.headers() });
        return {};
    }
};
export default deleteMyUser;
//# sourceMappingURL=deleteMyUser.js.map