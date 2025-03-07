import { MutationType } from '../../enums.js';
import verifyMultiStepActionTokenMutation from '../../fsdata/mutations/verifyMultiStepActionToken.js';
const verifyMultiStepActionToken = async (input) => {
    try {
        console.log('verifyMultiStepActionToken Input:', input);
        const verifyMultiStepActionTokenResponse = await verifyMultiStepActionTokenMutation(input);
        return {
            operation: MutationType.create,
            object: verifyMultiStepActionTokenResponse,
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