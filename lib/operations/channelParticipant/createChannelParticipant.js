import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
const createChannelParticipant = async (attributes) => {
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