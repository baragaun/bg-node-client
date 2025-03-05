import { MutationType } from '../../types/enums.js';
import signInUserMutation from '../../fsdata/mutations/signInUser.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import data from '../../helpers/data.js';
const signInUser = async (ident, identType, password) => {
    try {
        const input = {
            ident,
            identType,
            password,
        };
        console.log('SignInUser Input:', input);
        const authResponse = await signInUserMutation(input);
        // Making the user info available to the rest of the client:
        const config = data.config();
        config.myUserId = authResponse.userId;
        config.authToken = authResponse.authToken;
        data.setConfig(config);
        // Save the data to LocalStorage:
        saveUserInfo(authResponse.userId, undefined, authResponse.authToken);
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