import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const signUpUser = async (input) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.signUpUser: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        input.checkAvailable = true;
        const args = {
            input: input,
        };
        const response = await client.mutation.signUpUser({
            $: args,
            userId: true,
            authToken: true,
        });
        logger.debug('fsdata.signUpUser response:', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.signUpUser: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return { object: response.data.signUpUser };
    }
    catch (error) {
        logger.error('fsdata.signUpUser mutation error:', { input, error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map