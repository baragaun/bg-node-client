import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
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