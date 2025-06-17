import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';

const updateWalletItem = async (
  changes: Partial<WalletItem>,
  queryOptions: QueryOptions<WalletItem> = defaultQueryOptionsForMutations,
): Promise<QueryResult<WalletItem>> => {
  try {
    return update<WalletItem>(changes, ModelType.WalletItem, queryOptions);
  } catch (error) {
    logger.error('fsdata.updateWalletItem: failed with error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default updateWalletItem;
