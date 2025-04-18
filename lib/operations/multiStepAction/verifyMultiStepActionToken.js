import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const verifyMultiStepActionToken = async (actionId, confirmToken, newPassword) => {
    if (!libData.isInitialized()) {
        logger.error('verifyMultiStepActionToken: unavailable');
        return { error: 'unavailable' };
    }
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
        return response;
    }
    catch (error) {
        logger.error('verifyMultiStepActionToken: failed to verify token', { error });
        return { error: error.message };
    }
};
export default verifyMultiStepActionToken;
//# sourceMappingURL=verifyMultiStepActionToken.js.map