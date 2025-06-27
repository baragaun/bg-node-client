import { PurchaseOrderInput } from '../../../models/PurchaseOrderInput.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const createPurchaseOrder: (props: Partial<PurchaseOrderInput>) => Promise<QueryResult<ServiceRequest>>;
export default createPurchaseOrder;
