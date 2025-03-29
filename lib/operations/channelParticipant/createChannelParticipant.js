import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
const createChannelParticipant = async (attributes) => {
    if (!libData.isInitialized()) {
        logger.error('createChannelParticipant: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('createChannelParticipant: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        const channel = new ChannelParticipant(attributes);
        return db.insert(channel);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createChannelParticipant;
//# sourceMappingURL=createChannelParticipant.js.map