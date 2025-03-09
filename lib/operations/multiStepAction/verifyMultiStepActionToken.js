import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
const verifyMultiStepActionToken = async (input) => {
    try {
        console.log('verifyMultiStepActionToken Input:', input);
        const response = await fsdata.multiStepAction.verifyMultiStepActionToken(input);
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