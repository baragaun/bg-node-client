import { ContentStatus } from '../../../models/ContentStatus.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const startMySessionV2: (pushNotificationToken: string | null | undefined, returnContentStatus: boolean) => Promise<QueryResult<ContentStatus>>;
export default startMySessionV2;
