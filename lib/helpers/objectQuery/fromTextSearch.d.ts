import { ModelType } from '../../enums.js';
import { BaseListFilter } from '../../models/BaseListFilter.js';
import { Model } from '../../models/Model.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
declare const fromTextSearch: <M extends Model = Model, F extends BaseListFilter = BaseListFilter>(modelType: ModelType, filter: F | null | undefined) => MangoQueryTypes<M>[];
export default fromTextSearch;
