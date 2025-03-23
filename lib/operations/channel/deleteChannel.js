import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
const deleteChannel = async (id) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
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