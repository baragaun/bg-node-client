import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateMyUser = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        logger.error('updateMyUser: unavailable.');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('updateMyUser: unavailable.');
        return { error: 'unauthorized' };
    }
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    if (!changes.id) {
        changes.id = libData.clientInfoStore().myUserId;
    }
    try {
        if (queryOptions.cachePolicy === CachePolicy.cache ||
            queryOptions.cachePolicy === CachePolicy.cacheFirst ||
            libData.isOffline()) {
            const queryResult = await db.findById(libData.clientInfoStore().myUserId, ModelType.MyUser);
            if (queryResult.object ||
                queryOptions.cachePolicy === CachePolicy.cache) {
                // With the policy set to CachePolicy.cache, we will only update
                // the local copy.
                const changesWithoutPassword = { ...changes };
                delete changesWithoutPassword.currentPassword; // Don't allow password change via this method
                delete changesWithoutPassword.newPassword; // Don't allow password change via this method
                const QueryResult = await db.update(changes, ModelType.MyUser);
                if (queryOptions.cachePolicy === CachePolicy.cache || libData.isOffline()) {
                    // If the policy is not cacheFirst, we are only handling the cache:
                    return QueryResult;
                }
            }
        }
        const updateResult = await fsdata.myUser.updateMyUser(changes, queryOptions);
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
        logger.error('updateMyUser: error.', { error });
        return { error: error.message };
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map