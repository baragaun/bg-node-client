import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
const createChannelInvitation = async (attributes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
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