import { BaseListFilter } from '../../models/BaseListFilter.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
declare function fromObjectIds<M, ObjectIdType = string>(filter: BaseListFilter, objectIdFunc?: <T>(id: string) => T, idFieldName?: string): MangoQueryTypes<M>[];
export default fromObjectIds;
