import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateChannel = async (changes) => {
    if (!libData.isInitialized()) {
        logger.error('updateChannel: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('updateChannel: unauthorized');
        return { error: 'unauthorized' };
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