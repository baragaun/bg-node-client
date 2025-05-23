import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
const findChannelInvitationsForUser = async (filter, match, selector, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findChannelInvitations: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findChannelInvitations: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local cache
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
                return db.findById(filter.ids[0], ModelType.ChannelInvitation);
            }
            const localQuery = buildQuery(ModelType.Channel, filter, match, selector, options);
            const localResult = await db.find(localQuery, ModelType.ChannelInvitation);
            if ((!localResult.error && localResult.objects) || !allowNetwork) {
                return localResult;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.channelInvitation.findChannelInvitations(filter, match, options);
        if (Array.isArray(result.objects) && result.objects.length > 0) {
            for (const invitation of result.objects) {
                await db.upsert(invitation, ModelType.ChannelInvitation);
            }
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findChannelInvitationsForUser;
//# sourceMappingURL=findChannelInvitations.js.map