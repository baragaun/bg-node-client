import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';
const updateChannelInvitation = async (changes) => {
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