import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const endMySession = async () => {
    if (!libData.isInitialized()) {
        logger.error('endMySession: unavailable');
        return;
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('endMySession: unauthorized');
        return;
    }
    if (libData.isOffline()) {
        logger.error('endMySession: offline.');
        return;
    }
    try {
        await fsdata.myUser.endMySession();
        libData.clientInfoStore().sessionEnded();
    }
    catch (error) {
        logger.error('endMySession: fsdata.myUser.endMySession failed', error);
    }
};
export default endMySession;
//# sourceMappingURL=endMySession.js.map