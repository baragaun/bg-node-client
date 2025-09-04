import { Brand } from '../../models/Brand.js';
import { BrandListFilter } from '../../models/BrandListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findBrands: (filter: BrandListFilter | null | undefined, match: Partial<Brand> | null | undefined, _selector: MangoQueryTypes<Brand> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<Brand>>;
export default findBrands;
