import db from '../../db/db.js';
import { CachePolicy, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
const updateMyUser = async (myUser, queryOptions = defaultQueryOptionsForMutations) => {
    const result = {
        operation: MutationType.update,
    };
    const clientInfo = clientInfoStore.get();
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        if (queryOptions.cachePolicy === CachePolicy.cache ||
            queryOptions.cachePolicy === CachePolicy.cacheFirst) {
            const queryResult = await db.findById(clientInfo.myUserId, ModelType.MyUser);
            if (queryResult.object ||
                queryOptions.cachePolicy === CachePolicy.cache) {
                result.object = queryResult.object;
                return result;
            }
        }
        const updatedMyUser = await fsdata.myUser.updateMyUser(myUser, queryOptions);
        if (updatedMyUser) {
            // Update local cache:
            await db.replace(updatedMyUser, ModelType.MyUser);
        }
        result.object = updatedMyUser;
        return result;
    }
    catch (error) {
        logger.error(error);
        result.error = error.message;
        return result;
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map