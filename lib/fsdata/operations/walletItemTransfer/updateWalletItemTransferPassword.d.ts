import { QueryResult } from '../../../types/QueryResult.js';
declare const updateWalletItemTransferPassword: (transferSlug: string, transferSecret: string, password: string) => Promise<QueryResult<void>>;
export default updateWalletItemTransferPassword;
