import { ModelType } from '../types/enums.js';
import db from '../db/db.js';
const findChannelMessages = async (filter, match, skip, limit) => {
    try {
        if (Array.isArray(filter.ids) && filter.ids.length === 1) {
            return db.findById(filter.ids[0], ModelType.ChannelMessage);
        }
        const { objects: messages } = await db.findAll(ModelType.ChannelMessage);
        let list = messages;
        if (filter.channelId || match.channelId) {
            list = messages.filter(m => m.channelId === filter.channelId || match.channelId);
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