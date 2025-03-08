import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
const startVerifyEmail = async (input) => {
    try {
        console.log('startVerifyEmail Input:', input);
        const verifyEmailResponse = await fsdata.myUser.startVerifyEmail(input);
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