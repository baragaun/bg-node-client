import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const deleteChannelParticipant = async (id) => {
    if (!libData.isInitialized()) {
        logger.error('deleteChannelParticipant: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('deleteChannelParticipant: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        await db.delete(id, ModelType.ChannelParticipant);
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
export default deleteChannelParticipant;
//# sourceMappingURL=deleteChannelParticipant.js.map