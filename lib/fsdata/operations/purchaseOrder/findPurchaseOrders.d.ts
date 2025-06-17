import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { PurchaseOrderListFilter as PurchaseOrderListFilterFromClient } from '../../../models/PurchaseOrderListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findPurchaseOrders: (filter: PurchaseOrderListFilterFromClient | null | undefined, match: Partial<PurchaseOrder> | null | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<PurchaseOrder>>;
export default findPurchaseOrders;
