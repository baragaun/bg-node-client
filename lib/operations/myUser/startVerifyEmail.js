import { MutationType } from '../../enums.js';
import startVerifyEmailMutation from '../../fsdata/mutations/startVerifyEmail.js';
const startVerifyEmail = async (input) => {
    try {
        console.log('startVerifyEmail Input:', input);
        const verifyEmailResponse = await startVerifyEmailMutation(input);
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
export default startVerifyEmail;
//# sourceMappingURL=startVerifyEmail.js.map