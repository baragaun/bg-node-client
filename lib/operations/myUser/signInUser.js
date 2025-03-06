import signInUserMutation from '../../fsdata/mutations/signInUser.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MutationType } from '../../types/enums.js';
import findMyUser from './findMyUser.js';
const signInUser = async (input) => {
    try {
        const argInput = input;
        console.log('SignInUser Input:', input);
        const userAuthResponse = await signInUserMutation(argInput);
        let myUser = null;
        if (userAuthResponse.userId) {
            // Making the user info available to the rest of the client:
            const config = data.config();
            config.myUserId = userAuthResponse.userId;
            config.authToken = userAuthResponse.authToken;
            data.setConfig(config);
            // Save the data to LocalStorage:
            saveUserInfo(userAuthResponse.userId, undefined, userAuthResponse.authToken);
            // Getting my user to save it into the cache:
            myUser = await findMyUser({ useCache: false });
        }
        return {
            operation: MutationType.create,
            object: { userAuthResponse, myUser },
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