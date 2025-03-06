import signMeOutMutation from '../../fsdata/mutations/signMeOut.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MutationType } from '../../types/enums.js';
const signMeOut = async () => {
    try {
        await signMeOutMutation();
        const config = data.config();
        config.myUserId = null;
        config.authToken = null;
        data.setConfig(config);
        // Save the data to LocalStorage:
        saveUserInfo(undefined, undefined, null);
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