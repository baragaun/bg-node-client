import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const deleteChannelInvitation = async (id) => {
    if (!libData.isInitialized()) {
        logger.error('deleteChannelInvitation: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('deleteChannelInvitation: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        await db.delete(id, ModelType.ChannelInvitation);
        return {
            operation: MutationType.delete,
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