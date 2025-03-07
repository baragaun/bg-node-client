import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import findMyUserQuery from '../../fsdata/queries/findMyUser.js';
import data from '../../helpers/data.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import { MyUser } from '../../types/models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const findMyUser = async (queryOptions: QueryOptions = defaultQueryOptions): Promise<MyUser | null> => {
  const config = data.config();

  if (!config) {
    console.error('findMyUser: no config.');
    return null;
  }

  try {
    if (queryOptions.cachePolicy === CachePolicy.cache || queryOptions.cachePolicy === CachePolicy.cacheFirst) {
      const queryResult = await db.findById<MyUser>(config.myUserId, ModelType.MyUser);

      if (queryResult.object || queryOptions.cachePolicy === CachePolicy.cache) {
        return queryResult.object;
      }
    }

    const myUser = await findMyUserQuery();

    if (myUser) {
      // Update local cache:
      await db.replace<MyUser>(myUser);
    }

    return new MyUser(myUser);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default findMyUser;
