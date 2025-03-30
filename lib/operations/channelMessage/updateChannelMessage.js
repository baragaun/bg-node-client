import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const updateChannelMessage = async (changes) => {
    if (!libData.isInitialized()) {
        logger.error('updateChannelMessage: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('updateChannelMessage: unauthorized');
        return { error: 'unauthorized' };
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