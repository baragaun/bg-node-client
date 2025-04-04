import db from '../db/db.js';
import { CachePolicy, ModelType, MutationType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import publishMyUserUpdate from '../helpers/publishMyUserUpdate.js';
const update = async (changes, modelType, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('update: unavailable.');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('update: unauthorized.');
            return { error: 'unauthorized' };
        }
        const isOnline = libData.isOnline();
        const allowNetwork = isOnline && queryOptions.cachePolicy !== CachePolicy.cache;
        if (!queryOptions) {
            queryOptions = defaultQueryOptionsForMutations;
        }
        if (!changes.id) {
            if (modelType === ModelType.MyUser) {
                changes.id = libData.clientInfoStore().myUserId;
            }
            if (!changes.id) {
                logger.error('update: missing changes.id.');
                return { error: 'invalid-input' };
            }
        }
        //------------------------------------------------------------------------------------------------
        // Local cache
        if (!allowNetwork || queryOptions.cachePolicy === CachePolicy.cache) {
            let cleanChanges = changes;
            if (modelType === ModelType.MyUser) {
                cleanChanges = { ...changes };
                delete cleanChanges.currentPassword;
                delete cleanChanges.newPassword;
            }
            const updateResult = await db.update(cleanChanges, modelType);
            if (!updateResult.error && updateResult.object && modelType === ModelType.MyUser) {
                publishMyUserUpdate(updateResult.object);
            }
            return updateResult;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        const updateResult = await fsdata.update(changes, modelType, queryOptions);
        if (!updateResult.error && updateResult.object) {
            // Update local cache:
            await db.replace(updateResult.object, modelType);
            if (modelType === ModelType.MyUser) {
                publishMyUserUpdate(updateResult.object);
            }
        }
        return updateResult;
    }
    catch (error) {
        logger.error('update: error.', { error });
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default update;
//# sourceMappingURL=update.js.map