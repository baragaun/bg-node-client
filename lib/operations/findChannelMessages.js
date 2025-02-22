import { ModelType } from '../types/enums.js';
import db from '../db/db.js';
const findChannelMessages = async (filter, skip, limit) => {
    try {
        if (filter.id) {
            const message = await db.findById(filter.id, ModelType.ChannelMessage);
            return { object: message };
        }
        const messages = await db.findAll(ModelType.ChannelMessage);
        let list = messages;
        if (!filter.channelId) {
            list = messages.filter(m => m.channelId === filter.channelId);
        }
        if (skip > 0 && limit > 0) {
            list = list.slice(skip, skip + limit);
        }
        return {
            objects: list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        };
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findChannelMessages;
//# sourceMappingURL=findChannelMessages.js.map