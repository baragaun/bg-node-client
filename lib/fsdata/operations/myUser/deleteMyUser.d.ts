import { QueryResult } from '../../../types/QueryResult.js';
declare const deleteMyUser: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<QueryResult<void>>;
export default deleteMyUser;
