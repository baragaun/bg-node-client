import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
const findChannels = async (filter, match, selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findChannels: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findChannels: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                return db.findById(filter.ids[0], ModelType.Channel);
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
        const result = await fsdata.channel.findChannels(filter, match, options);
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
export default findChannels;
//# sourceMappingURL=findChannels.js.map