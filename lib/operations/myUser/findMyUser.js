import db from '../../db/db.js';
import findMyUserQuery from '../../fsdata/queries/findMyUser.js';
import data from '../../helpers/data.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import { CachePolicy, ModelType } from '../../types/index.js';
import { MyUser } from '../../types/models/MyUser.js';
const findMyUser = async (queryOptions = defaultQueryOptions) => {
    const config = data.config();
    if (!config) {
        console.error('findMyUser: no config.');
        return null;
    }
    try {
        if (queryOptions.cachePolicy === CachePolicy.cache || queryOptions.cachePolicy === CachePolicy.cacheFirst) {
            const queryResult = await db.findById(config.myUserId, ModelType.MyUser);
            if (queryResult.object || queryOptions.cachePolicy === CachePolicy.cache) {
                return queryResult.object;
            }
        }
        const myUser = await findMyUserQuery();
        if (myUser) {
            // Update local cache:
            await db.replace(myUser);
        }
        return new MyUser(myUser);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map