import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';
const updateChannel = async (changes) => {
    try {
        const updatedChannel = await db.update(changes, ModelType.Channel);
        if (!updatedChannel) {
            return {
                operation: MutationType.update,
                error: 'not-found',
            };
        }
        return {
            operation: MutationType.update,
            object: updatedChannel,
        };
    }
    catch (error) {
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default updateChannel;
//# sourceMappingURL=updateChannel.js.map