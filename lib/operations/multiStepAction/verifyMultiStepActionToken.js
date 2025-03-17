import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const verifyMultiStepActionToken = async (actionId, confirmToken, newPassword) => {
    try {
        const run = libData.multiStepActionRun(actionId);
        if (run) {
            run.confirmToken = confirmToken;
        }
        logger.debug('BgNodeClient.operations.multiStepAction.verifyMultiStepActionToken called.', {
            actionId,
            confirmToken,
            newPassword,
            run,
        });
        const response = await fsdata.multiStepAction.verifyMultiStepActionToken(actionId, confirmToken, newPassword);
        logger.debug('BgNodeClient.operations.multiStepAction.verifyMultiStepActionToken response received.', { actionId, confirmToken, newPassword, response });
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
export default verifyMultiStepActionToken;
//# sourceMappingURL=verifyMultiStepActionToken.js.map