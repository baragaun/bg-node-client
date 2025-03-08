import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
const signMeOut = async () => {
    try {
        await fsdata.myUser.signMeOut();
        const config = data.config();
        const myUserIdSignedOut = config.myUserId;
        config.myUserId = null;
        config.authToken = null;
        data.setConfig(config);
        // Removing the signed-in user info from local storage; leaving
        // the deviceUuid untouched.
        saveUserInfo({
            myUserId: null,
            myUserIdSignedOut,
            authToken: null, // erasing the authToken
        });
        return {
            operation: MutationType.update,
        };
    }
    catch (error) {
        console.error(error);
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default signMeOut;
//# sourceMappingURL=signMeOut.js.map