import { ReportUserReasonTextId as ReportUserReasonTextIdFromClient } from '../../enums.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const reportUserForMe: (userId: string, reasonTextId: ReportUserReasonTextIdFromClient, messageText: string | undefined, queryOptions?: QueryOptions) => Promise<QueryResult<void>>;
export default reportUserForMe;
