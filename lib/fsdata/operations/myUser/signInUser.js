import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const SignInUser = async (input) => {
    if (!libData.isInitialized()) {
        logger.error('fsdata.signInUser: unavailable');
        return { error: 'unavailable' };
    }
    const client = graffleClientStore.get();
    logger.debug('fsdata.signInUser: sending input', { input });
    try {
        const response = await client.mutation.signInUser({
            $: { input },
            userId: true,
            authToken: true,
        });
        logger.debug('fsdata.signInUser: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.signInUser: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        return { object: response.data.signInUser };
    }
    catch (error) {
        logger.error('fsdata.signInUser: failed', { input, error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default SignInUser;
//# sourceMappingURL=signInUser.js.map