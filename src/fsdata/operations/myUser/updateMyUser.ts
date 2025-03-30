import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { MyUserChanges } from '../../../models/MyUserChanges.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';

const updateMyUser = async (
  changes: Partial<MyUserChanges>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  try {
    return update<MyUser>(changes, ModelType.MyUser, queryOptions);
  } catch (error) {
    logger.error('fsdata.updateMyUser: failed with error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default updateMyUser;
