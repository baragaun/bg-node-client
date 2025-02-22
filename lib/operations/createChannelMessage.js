import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';
const createChannelMessage = async (attributes) => {
    try {
        const channel = db.findById(attributes.channelId, ModelType.Channel);
        if (!channel) {
            return {
                operation: MutationType.create,
                error: 'channel-not-found',
            };
        }
        const input = new ChannelMessage(attributes);
        const message = await db.insert(input);
        return {
            operation: MutationType.create,
            object: message,
        };
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