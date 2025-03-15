import findMyUser from './findMyUser.js';
import { CachePolicy, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
const signUpUser = async (input) => {
    try {
        const argInput = input;
        const userAuthResponse = await fsdata.myUser.signUpUser(argInput);
        let myUser = null;
        if (!userAuthResponse.userId) {
            console.error('signUpUser: userId is missing');
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
        myUser = await findMyUser({ cachePolicy: CachePolicy.network });
        return {
            operation: MutationType.create,
            object: { userAuthResponse, myUser },
        };
    }
    catch (error) {
        console.error(error);
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map