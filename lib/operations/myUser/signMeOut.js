import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const signMeOut = async () => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
    }
    try {
        const signedOutUserId = clientInfo.signedOutUserId;
        await fsdata.myUser.signMeOut();
        // Removing the signed-in user info from local storage; leaving
        // the deviceUuid untouched.
        await clientInfoStore.clearMyUserFromClientInfo(signedOutUserId);
        return {
            operation: MutationType.update,
        };
    }
    catch (error) {
        logger.error(error);
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default signMeOut;
//# sourceMappingURL=signMeOut.js.map