import { ModelType } from '../types/enums.js';
import db from '../db/db.js';
const findChannels = async (filter, skip, limit) => {
    try {
        if (filter.id) {
            const channel = await db.findById(filter.id, ModelType.Channel);
            return { object: channel };
        }
        const channels = await db.findAll(ModelType.Channel);
        let list = channels;
        if (filter.userId) {
            list = channels.filter((channel) => {
                if (!Array.isArray(channel.userIds)) {
                    return { error: 'channel-missing-userid' };
                }
                return channel.userIds.includes(filter.userId);
            });
        }
        if (filter.name) {
            list = channels.filter(c => c.name && c.name.localeCompare(filter.name) === 0);
        }
        if (skip > 0 && limit > 0) {
            list = list.slice(skip, skip + limit);
        }
        return {
            objects: list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
        };
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findChannels;
//# sourceMappingURL=findChannels.js.map