import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const verifyMultiStepActionToken = async (actionId, confirmToken, newPassword) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.verifyMultiStepActionToken: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: {
                actionId,
                token: confirmToken,
                newPassword,
            },
        };
        logger.debug('fsdata.verifyMultiStepActionToken: sending:', { args });
        const response = await client.mutation.verifyMultiStepActionToken({
            $: args,
            ...modelFields.sidMultiStepActionProgress,
        });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.verifyMultiStepActionToken: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.verifyMultiStepActionToken: received response:', { response });
        return { object: response.data.verifyMultiStepActionToken };
    }
    catch (error) {
        logger.error('verifyMultiStepActionToken mutation error:', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default verifyMultiStepActionToken;
//# sourceMappingURL=verifyMultiStepActionToken.js.map