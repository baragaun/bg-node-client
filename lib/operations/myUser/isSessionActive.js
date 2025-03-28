import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const isSessionActive = () => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        return clientInfoStore.get().isSessionActive;
    }
    catch (error) {
        logger.error('isSessionActive: fsdata.myUser.isSessionActive failed', error);
        return false;
    }
};
export default isSessionActive;
//# sourceMappingURL=isSessionActive.js.map