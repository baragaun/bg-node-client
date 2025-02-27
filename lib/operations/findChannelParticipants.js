import { ModelType } from '../types/enums.js';
import db from '../db/db.js';
const findChannelParticipants = async (filter, match, skip, limit) => {
    try {
        if (Array.isArray(filter.ids) && filter.ids.length === 1) {
            return db.findById(filter.ids[0], ModelType.ChannelParticipant);
        }
        const { objects: participants } = await db.findAll(ModelType.ChannelParticipant);
        let list = participants;
        if (filter.channelId || match.channelId) {
            list = participants.filter(m => m.channelId === filter.channelId || match.channelId);
        }
        if (skip > 0 && limit > 0) {
            list = list.slice(skip, skip + limit);
        }
        return {
            objects: list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        };
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findChannelParticipants;
//# sourceMappingURL=findChannelParticipants.js.map