import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateChannelParticipant = async (changes) => {
    if (!libData.isInitialized()) {
        logger.error('updateChannelParticipant: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('updateChannelParticipant: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        return db.update(changes, ModelType.ChannelParticipant);
    }
    catch (error) {
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default updateChannelParticipant;
//# sourceMappingURL=updateChannelParticipant.js.map