import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
const deleteChannelParticipant = async (id) => {
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