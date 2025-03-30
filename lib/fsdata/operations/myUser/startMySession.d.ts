import { QueryResult } from '../../../types/QueryResult.js';
declare const startMySession: (pushNotificationToken: string | null | undefined) => Promise<QueryResult<void>>;
export default startMySession;
