import libData from '../../libData.js';
let enableGroupChannels = undefined;
const getChannelSelectorParts = (filter) => {
    if (!filter) {
        return [];
    }
    if (enableGroupChannels === undefined) {
        const config = libData.getConfig();
        enableGroupChannels = config.enableGroupChannels ?? false;
    }
    const parts = [];
    if (filter?.userId) {
        if (enableGroupChannels) {
            parts.push({ userIds: { $elemMatch: { $eq: filter.userId } } });
        }
        else {
            parts.push({
                $or: [
                    { createdBy: filter.userId },
                    { otherUserId: filter.userId },
                ],
            });
        }
    }
    if (Array.isArray(filter.userIds) && filter.userIds.length > 2) {
        if (enableGroupChannels) {
            parts.push({ userIds: { $in: filter.userIds } });
        }
        else {
            parts.push({
                $or: [
                    { createdBy: { $in: filter.userIds } },
                    { otherUserId: { $in: filter.userIds } },
                ],
            });
        }
    }
    return parts;
};
export default getChannelSelectorParts;
//# sourceMappingURL=getChannelSelectorParts.js.map