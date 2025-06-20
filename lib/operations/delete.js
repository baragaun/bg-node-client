import db from '../db/db.js';
import { CachePolicy, MutationType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const deleteFnc = async (id, modelType, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('operations.deleteFnc: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('operations.deleteFnc: unauthorized');
            return { error: 'unauthorized' };
        }
        const isOnline = libData.isOnline();
        const allowNetwork = isOnline && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local cache
        if (db.isModelTypeSupported(modelType)) {
            const resultLocal = await db.delete(id, modelType);
            if (resultLocal.error) {
                // If the local delete fails, return the error
                logger.error('operations.deleteFnc: failed to delete from local cache', { id, error: resultLocal.error });
                return resultLocal;
            }
            if (!allowNetwork) {
                return resultLocal;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        return fsdata.delete(id, modelType);
    }
    catch (error) {
        return { operation: MutationType.delete, error: error.message };
    }
};
export default deleteFnc;
//# sourceMappingURL=delete.js.map