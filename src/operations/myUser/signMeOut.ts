import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { MutationResult } from '../../types/MutationResult.js';

const signMeOut = async (): Promise<MutationResult<null>> => {
  try {
    const clientInfo = clientInfoStore.get();
    const signedOutUserId = clientInfo.signedOutUserId;
    await fsdata.myUser.signMeOut();

    // Removing the signed-in user info from local storage; leaving
    // the deviceUuid untouched.
    await clientInfoStore.clearMyUserFromClientInfo(signedOutUserId);

    return {
      operation: MutationType.update,
    };
  } catch (error) {
    console.error(error);
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default signMeOut;
