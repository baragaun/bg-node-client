import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MyUserInput } from '../../fsdata/gql/graphql.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserChanges } from '../../models/MyUserChanges.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateMyUser = async (
  changes: Partial<MyUserChanges>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  if (!libData.isInitialized()) {
    logger.error('updateMyUser: unavailable.');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('updateMyUser: unavailable.');
    return { error: 'unauthorized' };
  }

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  if (!changes.id) {
    changes.id = libData.clientInfoStore().myUserId;
  }

  try {
    if (
      queryOptions.cachePolicy === CachePolicy.cache ||
      queryOptions.cachePolicy === CachePolicy.cacheFirst ||
      libData.isOffline()
    ) {
      const queryResult = await db.findById<MyUser>(
        libData.clientInfoStore().myUserId,
        ModelType.MyUser,
      );

      if (
        queryResult.object ||
        queryOptions.cachePolicy === CachePolicy.cache
      ) {
        // With the policy set to CachePolicy.cache, we will only update
        // the local copy.
        const changesWithoutPassword = { ...changes };
        delete changesWithoutPassword.currentPassword; // Don't allow password change via this method
        delete changesWithoutPassword.newPassword; // Don't allow password change via this method

        const QueryResult = await db.update<MyUser>(
          changes,
          ModelType.MyUser,
        );

        if (queryOptions.cachePolicy === CachePolicy.cache || libData.isOffline()) {
          // If the policy is not cacheFirst, we are only handling the cache:
          return QueryResult;
        }
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
    logger.error('updateMyUser: error.', { error });
    return { error: (error as Error).message };
  }
};

export default updateMyUser;
