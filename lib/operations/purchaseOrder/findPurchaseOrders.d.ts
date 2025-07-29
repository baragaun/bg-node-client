import { PurchaseOrder } from '../../models/PurchaseOrder.js';
import { PurchaseOrderListFilter } from '../../models/PurchaseOrderListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findPurchaseOrders: (filter: PurchaseOrderListFilter | null | undefined, match: Partial<PurchaseOrder> | null | undefined, _selector: MangoQueryTypes<PurchaseOrder> | null | undefined, options: FindObjectsOptions, _queryOptions?: QueryOptions) => Promise<QueryResult<PurchaseOrder>>;
export default findPurchaseOrders;
