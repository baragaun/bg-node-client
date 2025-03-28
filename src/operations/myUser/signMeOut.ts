import { BgListenerTopic, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { BgMyUserListener } from '../../types/BgMyUserListener.js';
import { MutationResult } from '../../types/MutationResult.js';

const signMeOut = async (): Promise<MutationResult<null>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  try {
    const signedOutUserId = clientInfo.signedOutUserId;
    await fsdata.myUser.signMeOut();

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
      operation: MutationType.update,
    };
  } catch (error) {
    logger.error(error);
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default signMeOut;
