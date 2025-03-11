import helpers from './helpers.js';
import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
const verifyMultiStepActionToken = async (actionId, confirmToken, newPassword) => {
    console.log('verifyMultiStepActionToken Input:', { actionId, newPassword, confirmToken });
    try {
        const run = helpers.run(actionId);
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