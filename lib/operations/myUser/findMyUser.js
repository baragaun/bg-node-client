import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findMyUser = async (queryOptions = defaultQueryOptions) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
    }
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
            logger.error('findMyUser: db.findById failed', error);
            return null;
        }
    }
    try {
        const myUser = await fsdata.myUser.findMyUser();
        if (myUser) {
            // Update local cache:
            await db.replace(myUser, ModelType.MyUser);
            clientInfoStore.updateMyUserUpdatedAt(new Date(myUser.updatedAt).getTime());
        }
        return myUser;
    }
    catch (error) {
        logger.error('findMyUser: fsdata.myUser.findMyUser failed', error);
        return null;
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map