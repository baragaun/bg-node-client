import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
const createChannelInvitation = async (attributes) => {
    if (!libData.isInitialized()) {
        logger.error('createChannelInvitation: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('createChannelInvitation: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        const channel = new ChannelInvitation(attributes);
        return db.insert(channel);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createChannelInvitation;
//# sourceMappingURL=createChannelInvitation.js.map