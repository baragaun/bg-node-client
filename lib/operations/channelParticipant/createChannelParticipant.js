import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
const createChannelParticipant = async (attributes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
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