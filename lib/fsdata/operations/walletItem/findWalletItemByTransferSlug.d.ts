import { WalletItem } from '../../../models/WalletItem.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findWalletItemByTransferSlug: (transferSlug: string, options: FindObjectsOptions) => Promise<QueryResult<WalletItem>>;
export default findWalletItemByTransferSlug;
