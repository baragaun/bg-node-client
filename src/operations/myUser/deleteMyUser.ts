import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import logger from '../../helpers/logger.js';
import { MutationResult } from '../../types/MutationResult.js';

const deleteMyUser = async (
  cause: string | null | undefined,
  description: string | null | undefined,
  deletePhysically: boolean,
): Promise<MutationResult<null>> => {
  const signedOutUserId = clientInfoStore.get().signedOutUserId;

  try {
    await fsdata.myUser.deleteMyUser(cause, description, deletePhysically);

    // Removing the signed-in user info from local storage; leaving
    // the deviceUuid untouched.
    await clientInfoStore.clearMyUserFromClientInfo(signedOutUserId);

    return {
      operation: MutationType.delete,
    };
  } catch (error) {
    logger.error('deleteMyUser: fsdata.myUser.deleteMyUser failed', error);
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
};

export default deleteMyUser;
