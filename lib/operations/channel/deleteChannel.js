import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const deleteChannel = async (id) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('deleteChannel: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('deleteChannel: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        //------------------------------------------------------------------------------------------------
        // Local cache
        const resultLocal = await db.delete(id, ModelType.Channel);
        if (resultLocal.error) {
            // If the local delete fails, return the error
            logger.error('deleteChannel: failed to delete from local cache', { id, error: resultLocal.error });
            return resultLocal;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return resultLocal;
        }
        return fsdata.delete(id, ModelType.Channel);
    }
    catch (error) {
        return {
            operation: MutationType.delete,
            error: error.message,
        };
    }
};
export default deleteChannel;
//# sourceMappingURL=deleteChannel.js.map