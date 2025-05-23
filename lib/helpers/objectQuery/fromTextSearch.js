import { ModelType } from '../../enums.js';
import { Channel } from '../../models/Channel.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { User } from '../../models/User.js';
const getTextSearchFields = (modelType) => {
    switch (modelType) {
        case ModelType.Channel:
            return Channel.searchFields;
        case ModelType.ChannelMessage:
            return ChannelMessage.searchFields;
        case ModelType.ChannelInvitation:
            return ChannelInvitation.searchFields;
        case ModelType.User:
            return User.searchFields;
        default:
            return [];
    }
};
const fromTextSearch = (modelType, filter) => {
    if (!filter || !filter.searchText) {
        return [];
    }
    const parts = [];
    const textSearchFields = filter.textSearchFields || getTextSearchFields(modelType) || [];
    if (!Array.isArray(textSearchFields) || textSearchFields.length < 1) {
        return [];
    }
    const flags = filter.caseSensitive === true ? '' : 'i';
    const regex = new RegExp(`.*${filter.searchText}.*`, flags);
    parts.push({
        $or: textSearchFields.map(field => ({ [field]: regex })),
    });
    return parts;
};
export default fromTextSearch;
//# sourceMappingURL=fromTextSearch.js.map