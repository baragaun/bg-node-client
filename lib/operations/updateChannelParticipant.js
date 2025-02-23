import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';
const updateChannelParticipant = async (changes) => {
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