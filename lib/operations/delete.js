import db from '../db/db.js';
import { MutationType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const deleteFnc = async (id, modelType) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('deleteFnc: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('deleteFnc: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        //------------------------------------------------------------------------------------------------
        // Local cache
        const resultLocal = await db.delete(id, modelType);
        if (resultLocal.error) {
            // If the local delete fails, return the error
            logger.error('deleteFnc: failed to delete from local cache', { id, error: resultLocal.error });
            return resultLocal;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return resultLocal;
        }
        return fsdata.delete(id, modelType);
    }
    catch (error) {
        return { operation: MutationType.delete, error: error.message };
    }
};
export default deleteFnc;
//# sourceMappingURL=delete.js.map