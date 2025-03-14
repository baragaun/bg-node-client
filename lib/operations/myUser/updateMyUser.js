import db from '../../db/db.js';
import { CachePolicy, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
const updateMyUser = async (myUser, queryOptions = defaultQueryOptionsForMutations) => {
    const result = { operation: MutationType.update };
    const config = data.config();
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    if (!config) {
        console.error('updateMyUser: no config.');
        result.error = 'not-available';
        return result;
    }
    try {
        if (queryOptions.cachePolicy === CachePolicy.cache ||
            queryOptions.cachePolicy === CachePolicy.cacheFirst) {
            const queryResult = await db.findById(config.myUserId, ModelType.MyUser);
            if (queryResult.object || queryOptions.cachePolicy === CachePolicy.cache) {
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
        console.error(error);
        result.error = error.message;
        return result;
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map