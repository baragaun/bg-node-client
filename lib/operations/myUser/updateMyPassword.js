import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateMyPassword = async (oldPassword, newPassword, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        logger.error('updateMyPassword: unavailable.');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('updateMyPassword: user not signed in.');
        return { error: 'unauthorized' };
    }
    if (libData.isOffline() && !libData.config().enableMockMode) {
        logger.error('updateMyPassword: offline');
        return { error: 'offline' };
    }
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        const input = {
            id: libData.clientInfoStore().myUserId,
            currentPassword: oldPassword,
            newPassword,
        };
        const QueryResult = await fsdata.myUser.updateMyUser(input, queryOptions);
        if (QueryResult.error) {
            return QueryResult;
        }
        if (QueryResult.object) {
            // Update local cache:
            await db.replace(QueryResult.object, ModelType.MyUser);
        }
        return QueryResult;
    }
    catch (error) {
        logger.error('updateMyPassword: error.', { error });
        return { error: error.message };
    }
};
export default updateMyPassword;
//# sourceMappingURL=updateMyPassword.js.map