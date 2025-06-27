import { PurchaseOrderInput } from '../../../models/PurchaseOrderInput.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ServiceRequest } from '../../gql/graphql.js';
declare const createPurchaseOrder: (props: Partial<PurchaseOrderInput>) => Promise<QueryResult<ServiceRequest>>;
export default createPurchaseOrder;
