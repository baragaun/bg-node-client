import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const startMySession = async () => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        const contentStatus = await fsdata.myUser.startMySession();
        if (contentStatus) {
            const clientInfo = clientInfoStore.get();
            clientInfo.remoteContentStatus = contentStatus;
            clientInfoStore.sessionStarted();
        }
    }
    catch (error) {
        logger.error('startMySession: fsdata.myUser.startMySession failed', error);
        return null;
    }
};
export default startMySession;
//# sourceMappingURL=startMySession.js.map