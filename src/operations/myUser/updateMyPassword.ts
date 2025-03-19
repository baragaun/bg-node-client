import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MyUserInput } from '../../fsdata/gql/graphql.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import logger from '../../helpers/logger.js';
import { MutationResult, MyUser } from '../../types/index.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const updateMyPassword = async (
  oldPassword: string,
  newPassword: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<MutationResult<MyUser>> => {
  const clientInfo = clientInfoStore.get();
  const myUserId = clientInfo.myUserId;
  const result: MutationResult<MyUser | null> = {
    operation: MutationType.update,
  };

  if (!myUserId) {
    logger.error('updateMyPassword: myUserId not found.');
    result.error = 'unauthorized';
    return result;
  }

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  try {
    const input: MyUserInput = {
      id: myUserId,
      currentPassword: oldPassword,
      newPassword,
    };
    const mutationResult = await fsdata.myUser.updateMyUser(
      input,
      queryOptions,
    );

    if (mutationResult.error) {
      result.error = mutationResult.error;
      return result;
    }

    if (mutationResult.object) {
      // Update local cache:
      await db.replace<MyUser>(mutationResult.object, ModelType.MyUser);
    }

    result.object = mutationResult.object;
    return result;
  } catch (error) {
    logger.error(error);
    result.error = error.message;
    return result;
  }
};

export default updateMyPassword;
