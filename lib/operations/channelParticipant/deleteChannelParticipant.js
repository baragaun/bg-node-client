import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
const deleteChannelParticipant = async (id) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        await db.delete(id, ModelType.ChannelParticipant);
        return {
            operation: MutationType.delete,
        };
    }
    catch (error) {
        return {
            operation: MutationType.delete,
            error: error.message,
        };
    }
};
export default deleteChannelParticipant;
//# sourceMappingURL=deleteChannelParticipant.js.map