import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const deleteMyUserV2: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<QueryResult<ServiceRequest>>;
export default deleteMyUserV2;
