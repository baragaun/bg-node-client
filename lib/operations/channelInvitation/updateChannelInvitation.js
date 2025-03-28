import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
const updateChannelInvitation = async (changes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
    }
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