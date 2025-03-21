import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import logger from '../../helpers/logger.js';
const sendMultiStepActionNotification = async (actionId, email, phoneNumber, notificationMethod) => {
    try {
        logger.debug('BgNodeClient.operations.multiStepAction.sendMultiStepActionNotification called.', { actionId, notificationMethod });
        const response = await fsdata.multiStepAction.sendMultiStepActionNotification(actionId, email, phoneNumber, notificationMethod);
        logger.debug('BgNodeClient.operations.multiStepAction.sendMultiStepActionNotification response received.', { actionId, notificationMethod, response });
        return {
            operation: MutationType.create,
            object: response,
        };
    }
    catch (error) {
        logger.error(error);
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default sendMultiStepActionNotification;
//# sourceMappingURL=sendMultiStepActionNotification.js.map