import findMyUser from './findMyUser.js';
import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import logger from '../../helpers/logger.js';
const signUpUser = async (input) => {
    try {
        const argInput = input;
        const userAuthResponse = await fsdata.myUser.signUpUser(argInput);
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
        await clientInfoStore.save({
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