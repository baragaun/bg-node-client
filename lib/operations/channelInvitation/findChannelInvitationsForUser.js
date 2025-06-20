import db from '../../db/db.js';
import { CachePolicy, ModelType, } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findChannelInvitationsForUser = async (userId, onlyUnseen, onlyPending, direction, options, queryOptions = defaultQueryOptions) => {
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
        // Local DB
        if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
            // todo: proper filtering
            const localResult = await db.findAll(ModelType.ChannelInvitation);
            let list = localResult.objects;
            if (options.skip > 0 && options.limit > 0) {
                list = list.slice(options.skip, options.skip + options.limit);
            }
            if ((!localResult.error && list) || !allowNetwork) {
                return {
                    objects: list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
                };
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const result = await fsdata.channelInvitation.findChannelInvitationsForUser(userId, onlyUnseen, onlyPending, direction, options);
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
//# sourceMappingURL=findChannelInvitationsForUser.js.map