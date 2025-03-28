import { ReportUserReasonTextId as ReportUserReasonTextIdFromClient } from '../../enums.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const reportUserForMe: (userId: string, reasonTextId: ReportUserReasonTextIdFromClient, messageText: string | undefined, queryOptions?: QueryOptions) => Promise<MutationResult<void>>;
export default reportUserForMe;
