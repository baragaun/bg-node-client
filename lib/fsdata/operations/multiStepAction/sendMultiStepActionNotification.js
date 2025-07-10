import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const sendMultiStepActionNotification = async (actionId, email, phoneNumber, notificationMethod) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.sendMultiStepActionNotification: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            input: {
                actionId,
                email,
                phoneNumber,
                notificationMethod: notificationMethod,
            },
        };
        logger.debug('fsdata.sendMultiStepActionNotification: sending:', { args });
        const response = await client.mutation.sendMultiStepActionNotification({ $: args });
        logger.debug('fsdata.sendMultiStepActionNotification: received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.sendMultStepActionNotification: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        return { object: response.data.sendMultiStepActionNotification };
    }
    catch (error) {
        logger.error('fsdata.sendMultiStepActionNotification: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default sendMultiStepActionNotification;
//# sourceMappingURL=sendMultiStepActionNotification.js.map