import fromObjectIds from './fromObjectIds.js';
import fromTextSearch from './fromTextSearch.js';
const buildObjectFilter = (modelType, filter, match, options, objectIdFunc = (id) => id, idFieldName = 'id') => {
    let parts = match && Object.keys(match).length > 0
        ? [match]
        : [];
    parts = parts.concat(fromObjectIds(filter, objectIdFunc, idFieldName));
    parts = parts.concat(fromTextSearch(modelType, filter));
    if (filter.createdAtFrom) {
        parts.push({ createdAt: { $gte: filter.createdAtFrom } });
    }
    if (filter.createdAtUntil) {
        parts.push({ createdAt: { $lte: filter.createdAtUntil } });
    }
    if (filter.updatedAtFrom) {
        parts.push({ updatedAt: { $gte: filter.updatedAtFrom } });
    }
    if (filter.updatedAtUntil) {
        parts.push({ updatedAt: { $lte: filter.updatedAtUntil } });
    }
    if (options && options.includeDeleted) {
        parts.push({ deletedAt: null });
    }
    if (parts.length < 2) {
        return parts[0] || {};
    }
    return { $and: parts };
};
export default buildObjectFilter;
//# sourceMappingURL=buildObjectFilter.js.map