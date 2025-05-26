import getChannelSelectorParts from './channel/getChannelSelectorParts.js';
import fromObjectIds from './fromObjectIds.js';
import fromTextSearch from './fromTextSearch.js';
import { ModelType } from '../../enums.js';
const buildSelector = (modelType, filter, match, options, objectIdFunc = (id) => id, idFieldName = 'id') => {
    let parts = match && Object.keys(match).length > 0
        ? [match]
        : [];
    if (filter && Object.keys(filter).length > 0) {
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
        switch (modelType) {
            case ModelType.Channel:
                parts = parts.concat(getChannelSelectorParts(filter));
        }
    }
    if (parts.length < 2) {
        return parts[0] || {};
    }
    return { $and: parts };
};
export default buildSelector;
//# sourceMappingURL=buildSelector.js.map