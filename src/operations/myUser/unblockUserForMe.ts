import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import unblockUserForMeMock from '../../mockOperations/myUser/unblockUserForMeMock.js';
import { MyUser } from '../../models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const unblockUserForMe = async (
  userId: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  if (libData.config().enableMockMode) {
    return unblockUserForMeMock(userId);
  }

  if (!libData.isInitialized()) {
    logger.error('unblockUserForMe: unavailable.');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('unblockUserForMe: user not signed in.');
    return { error: 'unauthorized' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('unblockUserForMe: offline');
    return { error: 'offline' };
  }

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  try {
    const updateResult = await fsdata.myUser.unblockUserForMe(
      userId,
      queryOptions,
    );

    if (updateResult.error) {
      return updateResult;
    }

    if (updateResult.object) {
      // Update local cache:
      await db.replace<MyUser>(updateResult.object, ModelType.MyUser);
    }

    return updateResult;
  } catch (error) {
    logger.error('unblockUserForMe: error.', { error });
    return { error: (error as Error).message };
  }
};

export default unblockUserForMe;
