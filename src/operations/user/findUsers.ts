import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { User } from '../../models/User.js';
import { UserListFilter } from '../../models/UserListFilter.js';
import { UserListItem } from '../../models/UserListItem.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findUsers = async (
  filter: UserListFilter | null | undefined,
  match: Partial<User> | null | undefined,
  selector: MangoQueryTypes<User> | null | undefined,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<UserListItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findUsers: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findUsers: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        const singleObjectResult = await db.findById<User>(filter.ids[0], ModelType.User);
        if (singleObjectResult.error) {
          logger.error('findUsers: did not find user by ID', { id: filter.ids[0] });
          return { error: singleObjectResult.error };
        }
        return { objects: [singleObjectResult.object as unknown as UserListItem] };
      }

      const localQuery = buildQuery<User, UserListFilter>(
        ModelType.User,
        filter,
        match,
        selector,
        options,
      );

      const localResult = await db.find<User>(localQuery, ModelType.User);

      if ((!localResult.error && localResult.objects) || !allowNetwork) {
        return localResult as unknown as QueryResult<UserListItem>;
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.user.findUsers(
      filter,
      match,
      options,
    );

    if (Array.isArray(result.objects) && result.objects.length > 0) {
      // for (const user of result.objects) {
      //   await db.upsert<User>(user as unknown as User, ModelType.User);
      // }
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findUsers;
