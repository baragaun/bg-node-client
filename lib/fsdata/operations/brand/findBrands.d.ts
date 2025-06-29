import { Brand } from '../../../models/Brand.js';
import { BrandListFilter as BrandListFilterFromClient } from '../../../models/BrandListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findBrands: (filter: BrandListFilterFromClient | null | undefined, match: Partial<Brand> | null | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<Brand>>;
export default findBrands;
