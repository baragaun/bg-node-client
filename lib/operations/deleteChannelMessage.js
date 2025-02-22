import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';
const deleteChannelMessage = async (id) => {
    try {
        await db.delete(id, ModelType.ChannelMessage);
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
export default deleteChannelMessage;
//# sourceMappingURL=deleteChannelMessage.js.map