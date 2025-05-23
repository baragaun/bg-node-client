import { ModelType } from '../../enums.js';
import { BaseListFilter } from '../../models/BaseListFilter.js';
import { Channel } from '../../models/Channel.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { Model } from '../../models/Model.js';
import { User } from '../../models/User.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';

const getTextSearchFields = (modelType: ModelType): string[] => {
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

const fromTextSearch = <M extends Model = Model, F extends BaseListFilter = BaseListFilter>(
  modelType: ModelType,
  filter: F | null | undefined,
): MangoQueryTypes<M>[] =>{
  if (!filter || !filter.searchText) {
    return [];
  }

  const parts: MangoQueryTypes<M>[] = [];
  const textSearchFields = filter.textSearchFields || getTextSearchFields(modelType) || [];

  if (!Array.isArray(textSearchFields) || textSearchFields.length < 1) {
    return [];
  }

  const flags = filter.caseSensitive === true ? '' : 'i';
  const regex = new RegExp(`.*${filter.searchText}.*`, flags);

  parts.push({
    $or: textSearchFields.map(field => ({ [field]: regex })),
  } as MangoQueryTypes<M>);

  return parts;
};

export default fromTextSearch;
