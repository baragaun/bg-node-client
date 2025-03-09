import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import { MyUser } from '../../types/models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const findMyUser = async (
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<MyUser | null> => {
  const config = data.config();

  if (!config) {
    console.error('findMyUser: no config.');
    return null;
  }

  if (
    queryOptions.cachePolicy === CachePolicy.cache ||
    queryOptions.cachePolicy === CachePolicy.cacheFirst
  ) {
    try {
      const queryResult = await db.findById<MyUser>(config.myUserId, ModelType.MyUser);

      if (queryResult.object || queryOptions.cachePolicy === CachePolicy.cache) {
        return queryResult.object;
      }
    } catch (error) {
      console.error('findMyUser: db.findById failed', error);
      return null;
    }
  }

  try {
    const myUser = await fsdata.myUser.findMyUser();

    if (myUser) {
      // Update local cache:
      await db.replace<MyUser>(myUser, ModelType.MyUser);
    }

    return myUser;
  } catch (error) {
    console.error('findMyUser: fsdata.myUser.findMyUser failed', error);
    return null;
  }
};

export default findMyUser;
