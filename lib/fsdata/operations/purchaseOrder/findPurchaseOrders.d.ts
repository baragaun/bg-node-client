import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { PurchaseOrderListFilter } from '../../../models/PurchaseOrderListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findPurchaseOrders: (filter: PurchaseOrderListFilter | null | undefined, match: Partial<PurchaseOrder> | null | undefined, options: FindObjectsOptions) => Promise<QueryResult<PurchaseOrder>>;
export default findPurchaseOrders;
