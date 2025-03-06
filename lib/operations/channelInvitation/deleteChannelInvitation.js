import db from '../../db/db.js';
import { ModelType, MutationType } from '../../types/enums.js';
const deleteChannelInvitation = async (id) => {
    try {
        await db.delete(id, ModelType.ChannelInvitation);
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
export default deleteChannelInvitation;
//# sourceMappingURL=deleteChannelInvitation.js.map