import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
const findChannelParticipants = async (filter, match, selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findChannelParticipants: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findChannelParticipants: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                return db.findById(filter.ids[0], ModelType.ChannelParticipant);
            }
            const localQuery = buildQuery(ModelType.Channel, filter, match, selector, options);
            const localResult = await db.find(localQuery, ModelType.ChannelParticipant);
            if ((!localResult.error && localResult.objects) || !allowNetwork) {
                return localResult;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.channelParticipant.findChannelParticipants(filter, match, options);
        if (result.error) {
            logger.error('findChannelParticipants: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        if (Array.isArray(result.objects) && result.objects.length > 0) {
            for (const participant of result.objects) {
                await db.upsert(participant, ModelType.ChannelParticipant);
            }
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findChannelParticipants;
//# sourceMappingURL=findChannelParticipants.js.map