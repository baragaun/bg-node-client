import { ServiceRequest } from '../../fsdata/gql/graphql.js';
import { PurchaseOrderInput } from '../../models/PurchaseOrderInput.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const createPurchaseOrder: (props: PurchaseOrderInput) => Promise<QueryResult<ServiceRequest>>;
export default createPurchaseOrder;
