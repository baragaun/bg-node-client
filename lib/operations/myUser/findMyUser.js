import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
const findMyUser = async (queryOptions = defaultQueryOptions) => {
    const clientInfo = clientInfoStore.get();
    if (queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst) {
        try {
            const queryResult = await db.findById(clientInfo.myUserId, ModelType.MyUser);
            if (queryResult.object ||
                queryOptions.cachePolicy === CachePolicy.cache) {
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