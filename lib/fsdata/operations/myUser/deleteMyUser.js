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
        const response = await client.mutation.deleteMyUserV2({ $: args });
        logger.debug('fsdata.deleteMyUser: response received.', { response: JSON.stringify(response) });
        if (response.error) {
            logger.error('fsdata.deleteMyUser: errors received.', { errorCode: response.error?.extensions?.code, errors: JSON.stringify(response.error) });
            return { error: response.error };
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