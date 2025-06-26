import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ServiceRequest } from '../../gql/graphql.js';
declare const createPurchaseOrder: (props: Partial<PurchaseOrder>) => Promise<QueryResult<ServiceRequest>>;
export default createPurchaseOrder;
