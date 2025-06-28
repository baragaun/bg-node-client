import { ProductCategory } from '../../../models/ProductCategory.js';
import { ProductCategoryListFilter } from '../../../models/ProductCategoryListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findProductCategories: (filter: ProductCategoryListFilter | null | undefined, match: Partial<ProductCategory> | null | undefined, options: FindObjectsOptions) => Promise<QueryResult<ProductCategory>>;
export default findProductCategories;
