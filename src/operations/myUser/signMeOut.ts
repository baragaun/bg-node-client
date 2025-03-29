import { BgListenerTopic } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryResult } from '../../types/QueryResult.js';

const signMeOut = async (): Promise<QueryResult<void>> => {
  if (!libData.isInitialized()) {
    logger.error('signMeOut: unavailable');
    return { error: 'unavailable' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('signMeOut: offline');
    return { error: 'offline' };
  }

  const clientInfo = libData.clientInfoStore().clientInfo;

  if (!clientInfo.isSignedIn) {
    return { error: 'unauthorized' };
  }

  try {
    const signedOutUserId = clientInfo.signedOutUserId;
    await fsdata.myUser.signMeOut();

    // Removing the signed-in user info from local storage; leaving
    // the deviceUuid untouched.
    await libData.clientInfoStore().clearMyUserFromClientInfo(signedOutUserId);

    for (const listener of libData.listeners()) {
      if (
        listener.topic === BgListenerTopic.myUser &&
        typeof (listener as MyUserListener).onSignedOut === 'function'
      ) {
        const listenerResponse = (listener as MyUserListener).onSignedOut();
        if (listenerResponse && typeof listenerResponse.then === 'function') {
          listenerResponse.catch((error) => {
            logger.error('signMeOut: listener onSignedOut failed.',
              { error });
          });
        }
      }
    }

    return {};
  } catch (error) {
    logger.error(error);
    return { error: (error as Error).message };
  }
};

export default signMeOut;
