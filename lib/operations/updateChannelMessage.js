import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';
const updateChannelMessage = async (changes) => {
    try {
        const updatedChannelMessage = await db.update(changes, ModelType.ChannelMessage);
        if (!updatedChannelMessage) {
            return {
                operation: MutationType.update,
                error: 'not-found',
            };
        }
        return {
            operation: MutationType.update,
            object: updatedChannelMessage,
        };
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