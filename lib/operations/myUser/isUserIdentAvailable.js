import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const isUserIdentAvailable = async (userIdent, identType) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const config = libData.config();
    if (!config) {
        logger.error('isUserIdentAvailable: no config.');
        return null;
    }
    try {
        return fsdata.myUser.isUserIdentAvailable(userIdent, identType);
    }
    catch (error) {
        logger.error('isUserIdentAvailable: fsdata.myUser.isUserIdentAvailable failed', error);
        return null;
    }
};
export default isUserIdentAvailable;
//# sourceMappingURL=isUserIdentAvailable.js.map