import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const sendMultiStepActionNotification = async (actionId, email, phoneNumber, notificationMethod) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
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