import { ProductCategory } from '../../models/ProductCategory.js';
import { ProductCategoryListFilter } from '../../models/ProductCategoryListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findProductCategories: (filter: ProductCategoryListFilter | null | undefined, match: Partial<ProductCategory> | null | undefined, _selector: MangoQueryTypes<ProductCategory> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ProductCategory>>;
export default findProductCategories;
