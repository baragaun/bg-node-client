import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
const deleteChannel = async (id) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
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