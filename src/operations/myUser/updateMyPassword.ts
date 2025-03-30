import updateMyUser from './updateMyUser.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserChanges } from '../../models/MyUserChanges.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateMyPassword = async (
  oldPassword: string,
  newPassword: string,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<MyUser>> => {
  const changes: Partial<MyUserChanges> = {
    id: libData.clientInfoStore().myUserId,
    currentPassword: oldPassword,
    newPassword,
  };

  return updateMyUser(changes, queryOptions);
};

export default updateMyPassword;
