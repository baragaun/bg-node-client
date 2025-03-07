import { MutationType } from '../../enums.js';
import startPasswordResetMutation from '../../fsdata/mutations/startResetPassword.js';
const startPasswordReset = async (input) => {
    try {
        console.log('startPasswordReset Input:', input);
        const verifyEmailResponse = await startPasswordResetMutation(input);
        return {
            operation: MutationType.create,
            object: verifyEmailResponse,
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
export default startPasswordReset;
//# sourceMappingURL=startResetPassword.js.map