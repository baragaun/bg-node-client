import findMyUser from './findMyUser.js';
import { BgListenerTopic, CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const signInUser = async (input) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        const userAuthResponse = await fsdata.myUser.signInUser(input);
        if (!userAuthResponse.userId) {
            logger.error('signInUser: no userId in response.', {
                userAuthResponse,
                input,
            });
            return {
                operation: MutationType.update,
                error: 'system error',
            };
        }
        // Making the user info available to the rest of the client:
        // Save the data to LocalStorage:
        await clientInfoStore.persist({
            myUserId: userAuthResponse.userId,
            signedOutUserId: null,
            authToken: userAuthResponse.authToken,
        });
        // Fetching a fresh copy of the user:
        const myUser = await findMyUser({
            cachePolicy: CachePolicy.network,
            polling: { enabled: false },
        });
        for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.myUser) {
                if (listener.onSignedIn) {
                    listener.onSignedIn();
                }
            }
        }
        return {
            operation: MutationType.update,
            object: { userAuthResponse, myUser },
        };
    }
    catch (error) {
        logger.error('signInUser failed.', error);
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default signInUser;
//# sourceMappingURL=signInUser.js.map