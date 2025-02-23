import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { MutationType } from '../types/enums.js';
import db from '../db/db.js';
const createChannelInvitation = async (attributes) => {
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