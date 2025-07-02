import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { WalletItem } from '../../models/WalletItem.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateWalletItem = async (
  changes: Partial<WalletItem>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<WalletItem>> => {
  return update<WalletItem>(changes, ModelType.WalletItem, queryOptions);
};

export default updateWalletItem;
