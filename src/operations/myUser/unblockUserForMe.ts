import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const unblockUserForMe = async (
  userId: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<MutationResult<MyUser>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  const result: MutationResult<MyUser | null> = {
    operation: MutationType.update,
  };

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
    logger.error(error);
    result.error = error.message;
    return result;
  }
};

export default unblockUserForMe;
