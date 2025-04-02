import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ReportUserReasonTextId } from '../../gql/graphql.js';
declare const reportUser: (userId: string, reasonTextId: ReportUserReasonTextId, messageText: string | undefined, _queryOptions?: QueryOptions) => Promise<QueryResult<void>>;
export default reportUser;
