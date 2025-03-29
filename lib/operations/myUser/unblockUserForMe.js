import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const unblockUserForMe = async (userId, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        logger.error('unblockUserForMe: unavailable.');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('unblockUserForMe: user not signed in.');
        return { error: 'unauthorized' };
    }
    if (libData.isOffline() && !libData.config().enableMockMode) {
        logger.error('unblockUserForMe: offline');
        return { error: 'offline' };
    }
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        const updateResult = await fsdata.myUser.unblockUserForMe(userId, queryOptions);
        if (updateResult.error) {
            return updateResult;
        }
        if (updateResult.object) {
            // Update local cache:
            await db.replace(updateResult.object, ModelType.MyUser);
        }
        return updateResult;
    }
    catch (error) {
        logger.error('unblockUserForMe: error.', { error });
        return { error: error.message };
    }
};
export default unblockUserForMe;
//# sourceMappingURL=unblockUserForMe.js.map