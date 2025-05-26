import { BaseListFilter } from '../../models/BaseListFilter.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import logger from '../logger.js';

function fromObjectIds<M, ObjectIdType = string>(
  filter: BaseListFilter,
  objectIdFunc = <T>(id: string): T => id as T,
  idFieldName = 'id',
): MangoQueryTypes<M>[] {
  if (
    !filter ||
    (!Array.isArray(filter.ids) && !Array.isArray(filter.excludeIds)) ||
    (filter.ids.length < 1 && filter.excludeIds.length < 1)
  ) {
    return [];
  }

  const parts: MangoQueryTypes<M>[] = [];

  if (Array.isArray(filter.ids) && filter.ids.length > 0) {
    const objectIds: ObjectIdType[] = [];
    for (const id of filter.ids) {
      try {
        objectIds.push(objectIdFunc(id));
      } catch (error) {
        logger.error('objectFilter.fromObjectIds: error building ObjectId',
          { filter, error }, { remote: true });
      }
    }
    parts.push({
      [idFieldName]: {
        $in: objectIds,
      },
    } as MangoQueryTypes<M>);
  }

  if (Array.isArray(filter.excludeIds) && filter.excludeIds.length > 0) {
    const objectIds: ObjectIdType[] = [];
    for (const id of filter.excludeIds) {
      try {
        objectIds.push(objectIdFunc(id));
      } catch (error) {
        logger.error('objectFilter.fromObjectIds: error building ObjectId',
          { filter, error }, { remote: true });
      }
    }
    parts.push({
      [idFieldName]: {
        $nin: objectIds,
      },
    } as MangoQueryTypes<M>);
  }

  return parts;
}

export default fromObjectIds;
