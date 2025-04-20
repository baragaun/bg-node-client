import clearUser from '../../helpers/clearUser.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const signMeOutMock = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('signMeOutMock: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.config().enableMockMode) {
            logger.error('signMeOutMock: not in mock mode');
            return { error: 'not-in-mock-mode' };
        }
        const clientInfo = libData.clientInfoStore().clientInfo;
        if (!clientInfo.isSignedIn) {
            return { error: 'unauthorized' };
        }
        await clearUser(false);
        return {};
    }
    catch (error) {
        logger.error(error);
        return { error: error.message };
    }
};
export default signMeOutMock;
//# sourceMappingURL=signMeOutMock.js.map