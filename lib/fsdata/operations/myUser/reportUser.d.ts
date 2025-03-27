import { MutationResult } from '../../../types/MutationResult.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { ReportUserReasonTextId } from '../../gql/graphql.js';
declare const reportUser: (userId: string, reasonTextId: ReportUserReasonTextId, messageText: string | undefined, queryOptions?: QueryOptions) => Promise<MutationResult<void>>;
export default reportUser;
