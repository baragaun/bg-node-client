import db from '../../db/db.js';
import { CachePolicy, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
const updateMyUser = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const result = {
        operation: MutationType.update,
    };
    const clientInfo = clientInfoStore.get();
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    if (!changes.id) {
        changes.id = clientInfo.myUserId;
    }
    try {
        if (queryOptions.cachePolicy === CachePolicy.cache ||
            queryOptions.cachePolicy === CachePolicy.cacheFirst) {
            const queryResult = await db.findById(clientInfo.myUserId, ModelType.MyUser);
            if (queryResult.object ||
                queryOptions.cachePolicy === CachePolicy.cache) {
                // With the policy set to CachePolicy.cache, we will only update
                // the local copy.
                const mutationResult = await db.update(changes, ModelType.MyUser);
                if (mutationResult.error) {
                    result.error = mutationResult.error;
                    return result;
                }
                result.object = mutationResult.object;
                return result;
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
        logger.error(error);
        result.error = error.message;
        return result;
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map