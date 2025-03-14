import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MutationResult } from '../../types/MutationResult.js';

const deleteMyUser = async (
  cause: string | null | undefined,
  description: string | null | undefined,
  deletePhysically: boolean,
): Promise<MutationResult<null>> => {
  const config = data.config();

  if (!config) {
    console.error('deleteMyUser: no config.');
    return null;
  }

  const myUserIdSignedOut = config.myUserId;

  try {
    await fsdata.myUser.deleteMyUser(cause, description, deletePhysically);

    config.myUserId = null;
    config.authToken = null;
    data.setConfig(config);

    // Removing the signed-in user info from local storage; leaving
    // the deviceUuid untouched.
    saveUserInfo({
      myUserId: null,
      myUserIdSignedOut,
      authToken: null, // erasing the authToken
    });

    return {
      operation: MutationType.delete,
    };
  } catch (error) {
    console.error('deleteMyUser: fsdata.myUser.deleteMyUser failed', error);
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
};

export default deleteMyUser;
