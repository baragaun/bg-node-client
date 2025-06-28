import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const createPurchaseOrder: (props: Partial<PurchaseOrder>) => Promise<QueryResult<PurchaseOrder>>;
export default createPurchaseOrder;
