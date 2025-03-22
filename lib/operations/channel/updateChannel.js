import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
const updateChannel = async (changes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
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