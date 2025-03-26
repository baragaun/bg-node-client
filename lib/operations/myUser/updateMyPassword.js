import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateMyPassword = async (oldPassword, newPassword, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
    }
    const myUserId = clientInfo.myUserId;
    const result = {
        operation: MutationType.update,
    };
    if (!myUserId) {
        logger.error('updateMyPassword: myUserId not found.');
        result.error = 'unauthorized';
        return result;
    }
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        const input = {
            id: myUserId,
            currentPassword: oldPassword,
            newPassword,
        };
        const mutationResult = await fsdata.myUser.updateMyUser(input, queryOptions);
        if (mutationResult.error) {
            result.error = mutationResult.error;
            return result;
        }
        if (mutationResult.object) {
            // Update local cache:
            await db.replace(mutationResult.object, ModelType.MyUser);
        }
        result.object = mutationResult.object;
        return result;
    }
    catch (error) {
        logger.error(error);
        result.error = error.message;
        return result;
    }
};
export default updateMyPassword;
//# sourceMappingURL=updateMyPassword.js.map