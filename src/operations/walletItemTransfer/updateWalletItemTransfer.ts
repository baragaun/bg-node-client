import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateWalletItemTransfer = async (
  changes: Partial<WalletItemTransfer>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<WalletItemTransfer>> => {
  return update<WalletItemTransfer>(changes, ModelType.WalletItemTransfer, queryOptions);
};

export default updateWalletItemTransfer;
