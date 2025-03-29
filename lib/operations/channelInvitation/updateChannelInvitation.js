import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateChannelInvitation = async (changes) => {
    if (!libData.isInitialized()) {
        logger.error('updateChannelInvitation: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('updateChannelInvitation: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        return db.update(changes, ModelType.ChannelInvitation);
    }
    catch (error) {
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default updateChannelInvitation;
//# sourceMappingURL=updateChannelInvitation.js.map