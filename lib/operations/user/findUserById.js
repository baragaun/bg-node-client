import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findUserById = async (id, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findUserById: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findUserById: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            const result = await db.findById(id, ModelType.User);
            if ((result.object && !result.error) || !allowNetwork) {
                return result;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const response = await fsdata.user.findUserById(id);
        if (response.error) {
            logger.error('findUserById: fsdata.findUserById failed', { error: response.error });
            return response;
        }
        if (response.object) {
            // todo: What if the object does not exist anymore. How do we delete it from the local store?
            // Update local cache:
            await db.replace(response.object, ModelType.User);
        }
        return response;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findUserById;
//# sourceMappingURL=findUserById.js.map