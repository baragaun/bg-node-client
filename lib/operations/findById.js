import db from '../db/db.js';
import { CachePolicy } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const findById = async (id, modelType, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findById: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findById: unauthorized');
            return { error: 'unauthorized' };
        }
        const isOnline = libData.isOnline();
        const allowNetwork = isOnline && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local cache
        if ((queryOptions.cachePolicy === CachePolicy.cacheFirst ||
            !allowNetwork) &&
            db.isModelTypeSupported(modelType)) {
            const result = await db.findById(id, modelType);
            if ((result.object && !result.error) || !allowNetwork) {
                return result;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const response = await fsdata.findById(id, modelType);
        if (response.error) {
            logger.error('findById: fsdata.findById failed', { error: response.error });
            return response;
        }
        else if (response.object) {
            // todo: What if the object does not exist anymore. How do we delete it from the local store?
            // Update local cache:
            await db.replace(response.object, modelType);
        }
        return response;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findById;
//# sourceMappingURL=findById.js.map