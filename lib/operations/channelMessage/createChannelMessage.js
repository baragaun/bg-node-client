import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
const createChannelMessage = async (attributes) => {
    if (!libData.isInitialized()) {
        logger.error('createChannelMessage: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('createChannelMessage: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        const channel = db.findById(attributes.channelId, ModelType.Channel);
        if (!channel) {
            return {
                operation: MutationType.create,
                error: 'channel-not-found',
            };
        }
        const input = new ChannelMessage(attributes);
        return db.insert(input);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createChannelMessage;
//# sourceMappingURL=createChannelMessage.js.map