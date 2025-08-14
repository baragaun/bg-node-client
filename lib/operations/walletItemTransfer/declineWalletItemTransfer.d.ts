import { ServiceRequest } from '../../models/ServiceRequest.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const declineWalletItemTransfer: (transferSlug: string) => Promise<QueryResult<ServiceRequest>>;
export default declineWalletItemTransfer;
