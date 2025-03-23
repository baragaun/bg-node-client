import findMyUser from './findMyUser.js';
import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const signUpUser = async (input) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        const userAuthResponse = await fsdata.myUser.signUpUser(input);
        let myUser = null;
        if (!userAuthResponse.userId) {
            logger.error('signUpUser: userId is missing', {
                userAuthResponse,
                input,
            });
            return {
                operation: MutationType.create,
                error: 'UserId is missing',
            };
        }
        await clientInfoStore.persist({
            myUserId: userAuthResponse.userId,
            signedOutUserId: null,
            authToken: userAuthResponse.authToken,
        });
        // Getting my user to save it into the cache:
        myUser = await findMyUser({
            cachePolicy: CachePolicy.network,
            polling: { enabled: false },
        });
        return {
            operation: MutationType.create,
            object: { userAuthResponse, myUser },
        };
    }
    catch (error) {
        logger.error(error);
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map