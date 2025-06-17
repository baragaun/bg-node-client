import { Wallet } from '../../../models/Wallet.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyWallet: () => Promise<QueryResult<Wallet>>;
export default findMyWallet;
