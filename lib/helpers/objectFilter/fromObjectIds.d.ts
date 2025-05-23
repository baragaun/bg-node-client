import { BaseListFilter } from '../../models/BaseListFilter.js';
import { MangoQuerySelector } from '../../types/MangoQuerySelector.js';
declare function fromObjectIds<M, ObjectIdType = string>(filter: BaseListFilter, objectIdFunc?: <T>(id: string) => T, idFieldName?: string): MangoQuerySelector<M>[];
export default fromObjectIds;
