import db from '../../db/db.js';
import { CachePolicy, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MyUserInput } from '../../fsdata/gql/graphql.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const updateMyUser = async (
  changes: Partial<MyUser>,
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

  if (!changes.id) {
    changes.id = clientInfo.myUserId;
  }

  try {
    if (
      queryOptions.cachePolicy === CachePolicy.cache ||
      queryOptions.cachePolicy === CachePolicy.cacheFirst
    ) {
      const queryResult = await db.findById<MyUser>(
        clientInfo.myUserId,
        ModelType.MyUser,
      );

      if (
        queryResult.object ||
        queryOptions.cachePolicy === CachePolicy.cache
      ) {
        // With the policy set to CachePolicy.cache, we will only update
        // the local copy.
        const mutationResult = await db.update<MyUser>(
          changes,
          ModelType.MyUser,
        );

        if (mutationResult.error) {
          result.error = mutationResult.error;
          return result;
        }

        result.object = mutationResult.object;
        return result;
      }
    }

    const updateResult = await fsdata.myUser.updateMyUser(
      changes as unknown as MyUserInput,
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

export default updateMyUser;
