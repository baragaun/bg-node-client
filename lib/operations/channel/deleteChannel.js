import db from '../../db/db.js';
import { ModelType, MutationType } from '../../types/enums.js';
const deleteChannel = async (id) => {
    try {
        await db.delete(id, ModelType.Channel);
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
export default deleteChannel;
//# sourceMappingURL=deleteChannel.js.map