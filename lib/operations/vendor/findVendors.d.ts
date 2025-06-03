import { Vendor } from '../../models/Vendor.js';
import { VendorListFilter } from '../../models/VendorListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findVendors: (filter: VendorListFilter | null | undefined, match: Partial<Vendor> | null | undefined, _selector: MangoQueryTypes<Vendor> | null | undefined, options: FindObjectsOptions, _queryOptions?: QueryOptions) => Promise<QueryResult<Vendor>>;
export default findVendors;
