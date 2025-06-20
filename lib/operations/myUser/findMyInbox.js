import db from '../../db/db.js';
import { BgListenerTopic, CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findMyInbox = async (queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findMyInbox: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findMyInbox: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            const result = await db.findById(libData.clientInfoStore().myUserId, ModelType.MyUser);
            if ((!result.error && result.object) || !allowNetwork) {
                return result;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const response = await fsdata.myUser.findMyInbox();
        if (response.error || !response.object) {
            return response;
        }
        logger.debug('findMyInbox: replacing local user inbox');
        await db.replace(response.object, ModelType.UserInbox);
        // libData.clientInfoStore().updateMyUserUpdatedAt(new Date(response.object.updatedAt).getTime());
        for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.myUser &&
                typeof listener.onMyInboxUpdated === 'function') {
                logger.debug('findMyInbox: notifying listener', { id: listener.id });
                const listenerResponse = listener.onMyInboxUpdated(response.object);
                if (listenerResponse && typeof listenerResponse.then === 'function') {
                    listenerResponse.catch((error) => {
                        logger.error('findMyInbox: listener onMyInboxUpdated failed.', { error });
                    });
                }
            }
        }
        return response;
    }
    catch (error) {
        logger.error('findMyInbox: fsdata.myUser.findMyInbox failed', error);
        return { error: error.message };
    }
};
export default findMyInbox;
//# sourceMappingURL=findMyInbox.js.map