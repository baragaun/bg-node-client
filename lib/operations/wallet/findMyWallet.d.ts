import { Wallet } from '../../models/Wallet.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findMyWallet: (queryOptions?: QueryOptions) => Promise<QueryResult<Wallet>>;
export default findMyWallet;
