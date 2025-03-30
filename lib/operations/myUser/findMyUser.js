import db from '../../db/db.js';
import { BgListenerTopic, CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findMyUser = async (queryOptions = defaultQueryOptions) => {
    if (!libData.isInitialized()) {
        logger.error('findMyUser: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('findMyUser: unauthorized');
        return { error: 'unauthorized' };
    }
    if (queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst ||
        libData.isOffline()) {
        try {
            const queryResult = await db.findById(libData.clientInfoStore().myUserId, ModelType.MyUser);
            if (queryResult.object ||
                queryOptions.cachePolicy === CachePolicy.cache ||
                libData.isOffline()) {
                return queryResult;
            }
        }
        catch (error) {
            logger.error('findMyUser: db.findById failed', { error });
            return { error: error.message };
        }
    }
    try {
        const response = await fsdata.myUser.findMyUser();
        if (response.error) {
            return response;
        }
        // Update local cache:
        await db.replace(response.object, ModelType.MyUser);
        libData.clientInfoStore().updateMyUserUpdatedAt(new Date(response.object.updatedAt).getTime());
        for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.myUser &&
                typeof listener.onMyUserUpdated === 'function') {
                const listenerResponse = listener.onMyUserUpdated(response.object);
                if (listenerResponse && typeof listenerResponse.then === 'function') {
                    listenerResponse.catch((error) => {
                        logger.error('findMyUser: listener onMyUserUpdated failed.', { error });
                    });
                }
            }
        }
        return response;
    }
    catch (error) {
        logger.error('findMyUser: fsdata.myUser.findMyUser failed', error);
        return { error: error.message };
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map