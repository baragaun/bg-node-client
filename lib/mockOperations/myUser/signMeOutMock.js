import { BgListenerTopic } from '../../enums.js';
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
        const signedOutUserId = clientInfo.signedOutUserId;
        // Removing the signed-in user info from local storage; leaving
        // the deviceUuid untouched.
        await libData.clientInfoStore().clearMyUserFromClientInfo(signedOutUserId);
        for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.myUser &&
                typeof listener.onSignedOut === 'function') {
                const listenerResponse = listener.onSignedOut();
                if (listenerResponse && typeof listenerResponse.then === 'function') {
                    listenerResponse.catch((error) => {
                        logger.error('signMeOutMock: listener onSignedOut failed.', { error });
                    });
                }
            }
        }
        return {};
    }
    catch (error) {
        logger.error(error);
        return { error: error.message };
    }
};
export default signMeOutMock;
//# sourceMappingURL=signMeOutMock.js.map