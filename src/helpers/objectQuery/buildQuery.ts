import { MangoQuery } from 'rxdb';

import buildSelector from './buildSelector.js';
import { ModelType } from '../../enums.js';
import { BaseListFilter } from '../../models/BaseListFilter.js';
import { Model } from '../../models/Model.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQuerySortPart, MangoQueryTypes } from '../../types/mangoQuery.js';

const buildQuery = <M extends Model = Model, F extends BaseListFilter = BaseListFilter, IdType = string>(
  modelType: ModelType,
  filter: F | null | undefined,
  match: Partial<M> | null | undefined,
  selector: MangoQueryTypes<M> | null | undefined,
  options: FindObjectsOptions | null | undefined,
  objectIdFunc = <T>(id: string): T => id as T,
  idFieldName = 'id',
): MangoQuery<M> => {
  const query: MangoQuery<M> = {
    selector: selector || buildSelector<M, F, IdType>(modelType, filter, match, options, objectIdFunc, idFieldName),
  };

  if (options) {
    if (options.sort) {
      query.sort = options.sort
        .filter(item => item.field)
        .map(item => ({ [item.field]: item.direction || 'asc' })) as MangoQuerySortPart<M>[];
    }

    if (!isNaN(options.skip) && options.skip > 0) {
      query.skip = options.skip;
    }

    if (!isNaN(options.limit) && options.limit > 0) {
      query.limit = options.limit;
    }
  }

  return query;
};

export default buildQuery;
