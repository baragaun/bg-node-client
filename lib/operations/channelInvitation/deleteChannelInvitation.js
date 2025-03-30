import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const deleteChannelInvitation = async (id) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('deleteChannelInvitation: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('deleteChannelInvitation: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        //------------------------------------------------------------------------------------------------
        // Local cache
        if (!allowNetwork) {
            return db.delete(id, ModelType.ChannelInvitation);
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.delete };
        }
        return {
            operation: MutationType.delete,
            error: 'not-implemented',
        };
    }
    catch (error) {
        return {
            operation: MutationType.delete,
            error: error.message,
        };
    }
};
export default deleteChannelInvitation;
//# sourceMappingURL=deleteChannelInvitation.js.map