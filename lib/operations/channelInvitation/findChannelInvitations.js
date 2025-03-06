import db from '../../db/db.js';
import { ModelType } from '../../types/enums.js';
const findChannelInvitations = async (filter, match, skip, limit) => {
    try {
        if (Array.isArray(filter.ids) && filter.ids.length === 1) {
            return db.findById(filter.ids[0], ModelType.ChannelInvitation);
        }
        const { objects: messages } = await db.findAll(ModelType.ChannelInvitation);
        let list = messages;
        if (!match.channelId) {
            list = messages.filter((m) => m.channelId === match.channelId);
        }
        if (skip > 0 && limit > 0) {
            list = list.slice(skip, skip + limit);
        }
        return {
            objects: list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
        };
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findChannelInvitations;
//# sourceMappingURL=findChannelInvitations.js.map