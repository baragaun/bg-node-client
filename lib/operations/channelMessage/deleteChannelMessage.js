import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
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