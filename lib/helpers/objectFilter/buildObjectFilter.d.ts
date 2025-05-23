import { ModelType } from '../../enums.js';
import { BaseListFilter } from '../../models/BaseListFilter.js';
import { Model } from '../../models/Model.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQuerySelector } from '../../types/MangoQuerySelector.js';
declare const buildObjectFilter: <M extends Model = Model, F extends BaseListFilter = BaseListFilter, IdType = string>(modelType: ModelType, filter: F | null | undefined, match: Partial<M> | null | undefined, options: FindObjectsOptions, objectIdFunc?: <T>(id: string) => T, idFieldName?: string) => MangoQuerySelector<M>;
export default buildObjectFilter;
