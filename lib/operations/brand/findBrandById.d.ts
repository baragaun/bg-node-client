import { Brand } from '../../models/Brand.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findBrandById: (id: string, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<Brand>>;
export default findBrandById;
