import { MangoQuery } from 'rxdb';
import { ModelType } from '../../enums.js';
import { BaseListFilter } from '../../models/BaseListFilter.js';
import { Model } from '../../models/Model.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
declare const buildQuery: <M extends Model = Model, F extends BaseListFilter = BaseListFilter, IdType = string>(modelType: ModelType, filter: F | null | undefined, match: Partial<M> | null | undefined, selector: MangoQueryTypes<M> | null | undefined, options: FindObjectsOptions | null | undefined, objectIdFunc?: <T>(id: string) => T, idFieldName?: string) => MangoQuery<M>;
export default buildQuery;
