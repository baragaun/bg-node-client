import db from '../db/db.js';
import { CachePolicy } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const findById = async (id, modelType, queryOptions = defaultQueryOptions) => {
    if (!libData.isInitialized()) {
        logger.error('findById: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('findById: unauthorized');
        return { error: 'unauthorized' };
    }
    if (queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst) {
        try {
            const result = await db.findById(id, modelType);
            if (result.object || queryOptions.cachePolicy === CachePolicy.cache) {
                return result;
            }
        }
        catch (error) {
            return { error: error.message };
        }
    }
    const response = await fsdata.findById(id, modelType);
    if (response.error) {
        logger.error('findById: fsdata.findById failed', { error: response.error });
        return response;
    }
    if (response.object) {
        // todo: What if the object does not exist anymore. How do we delete it from the local store?
        // Update local cache:
        await db.replace(response.object, modelType);
    }
    return response;
};
export default findById;
//# sourceMappingURL=findById.js.map