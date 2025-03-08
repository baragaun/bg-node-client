import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import { MyUser } from '../../types/models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const updateMyUser = async (
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<MyUser | null> => {
  const config = data.config();

  if (!config) {
    console.error('updateMyUser: no config.');
    return null;
  }

  try {
    if (
      queryOptions.cachePolicy === CachePolicy.cache ||
      queryOptions.cachePolicy === CachePolicy.cacheFirst
    ) {
      const queryResult = await db.findById<MyUser>(config.myUserId, ModelType.MyUser);

      if (queryResult.object || queryOptions.cachePolicy === CachePolicy.cache) {
        return queryResult.object;
      }
    }

    const myUser = await fsdata.myUser.updateMyUser();

    if (myUser) {
      // Update local cache:
      await db.replace<MyUser>(myUser);
    }

    return myUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateMyUser;
