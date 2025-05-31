import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
const findUsers = async (filter, match, selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findUsers: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findUsers: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local cache
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                const singleObjectResult = await db.findById(filter.ids[0], ModelType.User);
                if (singleObjectResult.error) {
                    logger.error('findUsers: did not find user by ID', { id: filter.ids[0] });
                    return { error: singleObjectResult.error };
                }
                return { objects: [singleObjectResult.object] };
            }
            const localQuery = buildQuery(ModelType.User, filter, match, selector, options);
            const localResult = await db.find(localQuery, ModelType.User);
            if ((!localResult.error && localResult.objects) || !allowNetwork) {
                return localResult;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.user.findUsers(filter, match, options);
        if (Array.isArray(result.objects) && result.objects.length > 0) {
            for (const user of result.objects) {
                await db.upsert(user, ModelType.User);
            }
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findUsers;
//# sourceMappingURL=findUsers.js.map