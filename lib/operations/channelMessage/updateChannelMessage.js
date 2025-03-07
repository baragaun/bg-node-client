import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
const updateChannelMessage = async (changes) => {
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