import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const endMySession = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('endMySession: unavailable');
            return;
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('endMySession: unauthorized');
            return;
        }
        if (libData.isOnline()) {
            await fsdata.myUser.endMySession();
        }
        else {
            logger.error('endMySession: offline.');
        }
        libData.clientInfoStore().sessionEnded();
    }
    catch (error) {
        logger.error('endMySession: fsdata.myUser.endMySession failed', error);
    }
};
export default endMySession;
//# sourceMappingURL=endMySession.js.map