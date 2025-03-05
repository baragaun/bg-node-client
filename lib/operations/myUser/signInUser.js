import { MutationType } from '../../types/enums.js';
import signInUserMutation from '../../fsdata/mutations/signInUser.js';
const signInUser = async (ident, identType, password) => {
    try {
        const input = {
            ident,
            identType,
            password,
        };
        const authResponse = await signInUserMutation(input);
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
export default signInUser;
//# sourceMappingURL=signInUser.js.map