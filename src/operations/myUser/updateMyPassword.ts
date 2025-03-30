import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MyUserInput } from '../../fsdata/gql/graphql.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateMyPassword = async (
  oldPassword: string,
  newPassword: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  if (!libData.isInitialized()) {
    logger.error('updateMyPassword: unavailable.');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('updateMyPassword: user not signed in.');
    return { error: 'unauthorized' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('updateMyPassword: offline');
    return { error: 'offline' };
  }

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  try {
    const input: MyUserInput = {
      id: libData.clientInfoStore().myUserId,
      currentPassword: oldPassword,
      newPassword,
    };
    const QueryResult = await fsdata.myUser.updateMyUser(
      input,
      queryOptions,
    );

    if (QueryResult.error) {
      return QueryResult;
    }

    if (QueryResult.object) {
      // Update local cache:
      await db.replace<MyUser>(QueryResult.object, ModelType.MyUser);
    }

    return QueryResult;
  } catch (error) {
    logger.error('updateMyPassword: error.', { error });
    return { error: (error as Error).message };
  }
};

export default updateMyPassword;
