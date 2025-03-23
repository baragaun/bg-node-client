import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
const createChannelMessage = async (attributes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
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