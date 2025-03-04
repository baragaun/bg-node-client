import { MutationType } from '../types/enums.js';
import signUpUserMutation from '../graphql/mutations/signUpUser.js';
const signUpUser = async (userHandle, email, password) => {
    try {
        const input = {
            userHandle,
            email,
            password,
        };
        const authResponse = await signUpUserMutation(input);
        return {
            operation: MutationType.create,
            object: authResponse,
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
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map