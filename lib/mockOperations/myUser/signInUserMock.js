import db from '../../db/db.js';
import { AuthType, BgListenerTopic, ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const signInUserMock = async (input) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('signInUserMock: unavailable');
            return { error: 'unavailable' };
        }
        if (libData.isOffline() && !libData.config().enableMockMode) {
            logger.error('signInUserMock: offline');
            return { error: 'offline' };
        }
        const findResult = await db.findOne({
            selector: {
                $or: [
                    { email: input.ident },
                    { userHandle: input.ident },
                ],
            },
        }, ModelType.MyUser);
        if (findResult.error || !findResult.object) {
            return { error: findResult.error || 'not-found or' };
        }
        const myUser = findResult.object;
        const userAuthResponse = {
            userId: myUser.id,
            firstName: myUser.firstName || '',
            lastName: myUser.lastName || '',
            authToken: `mock-${crypto.randomUUID().replaceAll('-', '')}`,
            authTokenExpiresAt: new Date(Date.now() + 10 * 24 * 3600 * 1000).toISOString(),
            authType: AuthType.token,
            foundUser: true,
            onboardingStage: '', // todo
        };
        // Making the user info available to the rest of the client:
        // Save the data to LocalStorage:
        await libData.clientInfoStore().save({
            myUserId: userAuthResponse.userId,
            signedOutUserId: null,
            authToken: userAuthResponse.authToken,
        });
        for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.myUser &&
                typeof listener.onSignedIn === 'function') {
                const listenerResponse = listener.onSignedIn();
                if (listenerResponse && typeof listenerResponse.then === 'function') {
                    listenerResponse.catch((error) => {
                        logger.error('signInUserMock: listener onSignedIn failed.', { error });
                    });
                }
            }
        }
        return { object: { userAuthResponse, myUser } };
    }
    catch (error) {
        logger.error('signInUserMock failed.', error);
        return { error: error.message };
    }
};
export default signInUserMock;
//# sourceMappingURL=signInUserMock.js.map