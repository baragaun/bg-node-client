import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
const findMyUser = async (queryOptions = defaultQueryOptions) => {
    const config = data.config();
    if (!config) {
        console.error('findMyUser: no config.');
        return null;
    }
    if (queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst) {
        try {
            const queryResult = await db.findById(config.myUserId, ModelType.MyUser);
            if (queryResult.object || queryOptions.cachePolicy === CachePolicy.cache) {
                return queryResult.object;
            }
        }
        catch (error) {
            console.error('findMyUser: db.findById failed', error);
            return null;
        }
    }
    try {
        const myUser = await fsdata.myUser.findMyUser();
        if (myUser) {
            // Update local cache:
            await db.replace(myUser, ModelType.MyUser);
        }
        return myUser;
    }
    catch (error) {
        console.error('findMyUser: fsdata.myUser.findMyUser failed', error);
        return null;
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map