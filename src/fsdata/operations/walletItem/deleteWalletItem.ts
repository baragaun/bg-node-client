import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import deleteFunc from '../delete.js';

const deleteWalletItem = async (
  id: string,
  deletePhysically: boolean,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {
  try {
    return deleteFunc(id, ModelType.WalletItem, deletePhysically, queryOptions);
  } catch (error) {
    logger.error('fsdata.deleteWalletItem: failed with error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default deleteWalletItem;
