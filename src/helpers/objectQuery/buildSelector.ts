import getChannelSelectorParts from './channel/getChannelSelectorParts.js';
import fromObjectIds from './fromObjectIds.js';
import fromTextSearch from './fromTextSearch.js';
import { ModelType } from '../../enums.js';
import { BaseListFilter } from '../../models/BaseListFilter.js';
import { Model } from '../../models/Model.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';

const buildSelector = <M extends Model = Model, F extends BaseListFilter = BaseListFilter, IdType = string>(
  modelType: ModelType,
  filter: F | null | undefined,
  match: Partial<M> | null | undefined,
  options: FindObjectsOptions,
  objectIdFunc = <T>(id: string): T => id as T,
  idFieldName = 'id',
): MangoQueryTypes<M> => {
  let parts: MangoQueryTypes<M>[] = match && Object.keys(match).length > 0
    ? [match] as MangoQueryTypes<M>[]
    : [];

  if (filter && Object.keys(filter).length > 0) {
    parts = parts.concat(fromObjectIds<M, IdType>(filter, objectIdFunc, idFieldName));
    parts = parts.concat(fromTextSearch<M, F>(modelType, filter));

    if (filter.createdAtFrom) {
      parts.push({ createdAt: { $gte: filter.createdAtFrom } } as MangoQueryTypes<M>);
    }

    if (filter.createdAtUntil) {
      parts.push({ createdAt: { $lte: filter.createdAtUntil } } as MangoQueryTypes<M>);
    }

    if (filter.updatedAtFrom) {
      parts.push({ updatedAt: { $gte: filter.updatedAtFrom } } as MangoQueryTypes<M>);
    }

    if (filter.updatedAtUntil) {
      parts.push({ updatedAt: { $lte: filter.updatedAtUntil } } as MangoQueryTypes<M>);
    }

    if (options && options.includeDeleted) {
      parts.push({ deletedAt: null } as MangoQueryTypes<M>);
    }

    switch (modelType) {
      case ModelType.Channel:
        parts = parts.concat(getChannelSelectorParts(filter));
    }
  }

  if (parts.length < 2) {
    return parts[0] || {};
  }

  return { $and: parts } as MangoQueryTypes<M>;
};

export default buildSelector;
