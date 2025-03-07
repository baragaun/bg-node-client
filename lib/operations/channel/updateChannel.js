import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
const updateChannel = async (changes) => {
    try {
        return db.update(changes, ModelType.Channel);
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