import { QueryResult } from '../../types/QueryResult.js';
declare const verifyWalletItemTransferPassword: (transferSlug: string, password: string) => Promise<QueryResult<boolean>>;
export default verifyWalletItemTransferPassword;
