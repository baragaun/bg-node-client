import { ModelType } from '../../types/enums.js';
import db from '../../db/db.js';
const findChannels = async (filter, match, skip, limit) => {
    try {
        if (Array.isArray(filter.ids) && filter.ids.length === 1) {
            return db.findById(filter.ids[0], ModelType.Channel);
        }
        const { objects: channels } = await db.findAll(ModelType.Channel);
        let list = channels;
        if (filter.userId) {
            list = channels.filter((channel) => {
                if (!Array.isArray(channel.userIds)) {
                    return { error: 'channel-missing-userid' };
                }
                return channel.userIds.includes(filter.userId);
            });
        }
        if (match.name) {
            list = channels.filter((c) => c.name && c.name.localeCompare(match.name) === 0);
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
export default findChannels;
//# sourceMappingURL=findChannels.js.map