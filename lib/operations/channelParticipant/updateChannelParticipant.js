import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
const updateChannelParticipant = async (changes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
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