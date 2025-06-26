import { ServiceRequest } from '../../fsdata/gql/graphql.js';
import { PurchaseOrder } from '../../models/PurchaseOrder.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const createPurchaseOrder: (props: Partial<PurchaseOrder>) => Promise<QueryResult<ServiceRequest>>;
export default createPurchaseOrder;
