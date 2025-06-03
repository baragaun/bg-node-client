import { Vendor } from '../../../models/Vendor.js';
import { VendorListFilter as VendorListFilterFromClient } from '../../../models/VendorListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findVendors: (filter: VendorListFilterFromClient | null | undefined, match: Partial<Vendor> | null | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<Vendor>>;
export default findVendors;
