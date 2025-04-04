import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import isUserIdentAvailableMock from '../../mockOperations/myUser/isUserIdentAvailableMock.js';
const isUserIdentAvailable = async (userIdent, identType) => {
    try {
        if (libData.config().enableMockMode) {
            return isUserIdentAvailableMock(userIdent, identType);
        }
        if (!libData.isInitialized()) {
            logger.error('isUserIdentAvailable: unavailable');
            return { error: 'unavailable' };
        }
        if (libData.isOffline() && !libData.config().enableMockMode) {
            logger.error('isUserIdentAvailable: offline');
            return { error: 'offline' };
        }
        return fsdata.myUser.isUserIdentAvailable(userIdent, identType);
    }
    catch (error) {
        logger.error('isUserIdentAvailable: fsdata.myUser.isUserIdentAvailable failed', error);
        return { error: error.message };
    }
};
export default isUserIdentAvailable;
//# sourceMappingURL=isUserIdentAvailable.js.map