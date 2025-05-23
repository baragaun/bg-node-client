import logger from '../logger.js';
function fromObjectIds(filter, objectIdFunc = (id) => id, idFieldName = 'id') {
    if (!filter ||
        (!Array.isArray(filter.ids) && !Array.isArray(filter.excludeIds)) ||
        (filter.ids.length < 1 && filter.excludeIds.length < 1)) {
        return [];
    }
    const parts = [];
    if (Array.isArray(filter.ids) && filter.ids.length > 0) {
        const objectIds = [];
        for (const id of filter.ids) {
            try {
                objectIds.push(objectIdFunc(id));
            }
            catch (error) {
                logger.error('objectFilter.fromObjectIds: error building ObjectId', { filter, error }, { remote: true });
            }
        }
        parts.push({
            [idFieldName]: {
                $in: objectIds,
            },
        });
    }
    if (Array.isArray(filter.excludeIds) && filter.excludeIds.length > 0) {
        const objectIds = [];
        for (const id of filter.excludeIds) {
            try {
                objectIds.push(objectIdFunc(id));
            }
            catch (error) {
                logger.error('objectFilter.fromObjectIds: error building ObjectId', { filter, error }, { remote: true });
            }
        }
        parts.push({
            [idFieldName]: {
                $nin: objectIds,
            },
        });
    }
    return parts;
}
export default fromObjectIds;
//# sourceMappingURL=fromObjectIds.js.map