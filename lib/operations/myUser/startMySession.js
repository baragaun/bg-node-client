import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const startMySession = async () => {
    if (!libData.isInitialized()) {
        logger.error('startMySession: unavailable.');
        return;
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('startMySession: user not signed in.');
        return;
    }
    if (libData.isOffline()) {
        logger.error('startMySession: offline.');
        return;
    }
    try {
        await fsdata.myUser.startMySession();
        libData.clientInfoStore().sessionStarted();
    }
    catch (error) {
        logger.error('startMySession: error.', { error });
    }
};
export default startMySession;
//# sourceMappingURL=startMySession.js.map