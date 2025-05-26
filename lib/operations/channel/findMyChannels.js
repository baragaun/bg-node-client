import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
const findMyChannels = async (filter, match, selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findMyChannels: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findMyChannels: unauthorized');
            return { error: 'unauthorized' };
        }
        const myUserId = libData.clientInfoStore().myUserId;
        if (!myUserId) {
            logger.error('findMyChannels: myUserId not set');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local cache
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                return db.findById(filter.ids[0], ModelType.Channel);
            }
            if (filter) {
                if (!filter.userId) {
                    filter.userId = myUserId;
                }
            }
            else {
                filter = { userId: myUserId };
            }
            const localQuery = buildQuery(ModelType.Channel, filter, match, selector, options);
            const localResult = await db.find(localQuery, ModelType.Channel);
            if ((!localResult.error && localResult.objects) || !allowNetwork) {
                return localResult;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.channel.findMyChannels(filter, match, options);
        if (Array.isArray(result.objects) && result.objects.length > 0) {
            for (const channel of result.objects) {
                await db.upsert(channel, ModelType.Channel);
            }
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findMyChannels;
//# sourceMappingURL=findMyChannels.js.map