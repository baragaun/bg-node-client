import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
const updateChannelMessage = async (changes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        return db.update(changes, ModelType.ChannelMessage);
    }
    catch (error) {
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default updateChannelMessage;
//# sourceMappingURL=updateChannelMessage.js.map