import { ProductCategory } from '../../../models/ProductCategory.js';
import { ProductCategoryListFilter as ProduceCategoryListFilterFromClient } from '../../../models/ProductCategoryListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findProductCategories: (filter: ProduceCategoryListFilterFromClient | null | undefined, match: Partial<ProductCategory> | null | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<ProductCategory>>;
export default findProductCategories;
