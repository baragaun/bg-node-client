import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
const updateMyUser = async (myUser, queryOptions = defaultQueryOptions) => {
    const config = data.config();
    if (!config) {
        console.error('updateMyUser: no config.');
        return null;
    }
    try {
        if (queryOptions.cachePolicy === CachePolicy.cache ||
            queryOptions.cachePolicy === CachePolicy.cacheFirst) {
            const queryResult = await db.findById(config.myUserId, ModelType.MyUser);
            if (queryResult.object || queryOptions.cachePolicy === CachePolicy.cache) {
                return queryResult.object;
            }
        }
        const updatedMyUser = await fsdata.myUser.updateMyUser(myUser, queryOptions);
        if (updatedMyUser) {
            // Update local cache:
            await db.replace(updatedMyUser, ModelType.MyUser);
        }
        return updatedMyUser;
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map