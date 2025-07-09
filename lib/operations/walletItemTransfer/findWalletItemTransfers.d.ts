import { WalletItemTransferListFilter } from '../../fsdata/gql/graphql.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findWalletItemTransfers: (filter: WalletItemTransferListFilter | null | undefined, match: Partial<WalletItemTransfer> | null | undefined, _selector: MangoQueryTypes<WalletItemTransfer> | null | undefined, options: FindObjectsOptions, _queryOptions?: QueryOptions) => Promise<QueryResult<WalletItemTransfer>>;
export default findWalletItemTransfers;
