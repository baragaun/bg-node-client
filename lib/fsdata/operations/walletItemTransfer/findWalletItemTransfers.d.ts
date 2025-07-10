import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { WalletItemTransferListFilter } from '../../gql/graphql.js';
declare const findWalletItemTransfers: (filter: WalletItemTransferListFilter, match: Partial<WalletItemTransfer>, options: FindObjectsOptions) => Promise<QueryResult<WalletItemTransfer>>;
export default findWalletItemTransfers;
