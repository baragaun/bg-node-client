import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
const verifyMultiStepActionToken = async (actionId, confirmToken, newPassword) => {
    console.log('verifyMultiStepActionToken Input:', { actionId, newPassword, confirmToken });
    try {
        const run = data.multiStepActionRun(actionId);
        if (run) {
            run.confirmToken = confirmToken;
        }
        const response = await fsdata.multiStepAction.verifyMultiStepActionToken(actionId, confirmToken, newPassword);
        return {
            operation: MutationType.create,
            object: response,
        };
    }
    catch (error) {
        console.error(error);
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default verifyMultiStepActionToken;
//# sourceMappingURL=verifyMultiStepActionToken.js.map