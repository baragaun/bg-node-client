import { BgListenerTopic, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { BgMyUserListener } from '../../types/BgMyUserListener.js';
import { MutationResult } from '../../types/MutationResult.js';

const deleteMyUser = async (
  cause: string | null | undefined,
  description: string | null | undefined,
  deletePhysically: boolean,
): Promise<MutationResult<null>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  const signedOutUserId = clientInfo.myUserId || clientInfo.signedOutUserId;

  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  try {
    await fsdata.myUser.deleteMyUser(cause, description, deletePhysically);

    // Removing the signed-in user info from local storage; leaving
    // the deviceUuid untouched.
    await clientInfoStore.clearMyUserFromClientInfo(signedOutUserId);

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as BgMyUserListener).onSignedOut === 'function'
      ) {
        (listener as BgMyUserListener).onSignedOut();
      }
    }

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
