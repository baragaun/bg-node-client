import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const sendMultiStepActionNotification = async (actionId, email, phoneNumber, notificationMethod) => {
    if (!libData.isInitialized()) {
        logger.error('sendMultiStepActionNotification: unavailable');
        return { error: 'unavailable' };
    }
    try {
        logger.debug('BgNodeClient.operations.multiStepAction.sendMultiStepActionNotification called.', { actionId, notificationMethod });
        const response = await fsdata.multiStepAction.sendMultiStepActionNotification(actionId, email, phoneNumber, notificationMethod);
        logger.debug('BgNodeClient.operations.multiStepAction.sendMultiStepActionNotification response received.', { actionId, notificationMethod, response });
        return response;
    }
    catch (error) {
        logger.error('sendMultiStepActionNotification: error.', { error });
        return { error: error.message };
    }
};
export default sendMultiStepActionNotification;
//# sourceMappingURL=sendMultiStepActionNotification.js.map