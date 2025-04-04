import { BgListenerTopic } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MyUserListener } from '../../types/MyUserListener.js';
import { QueryResult } from '../../types/QueryResult.js';

const signMeOutMock = async (): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('signMeOutMock: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.config().enableMockMode) {
      logger.error('signMeOutMock: not in mock mode');
      return { error: 'not-in-mock-mode' };
    }

    const clientInfo = libData.clientInfoStore().clientInfo;

    if (!clientInfo.isSignedIn) {
      return { error: 'unauthorized' };
    }

    const signedOutUserId = clientInfo.signedOutUserId;

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
            logger.error('signMeOutMock: listener onSignedOut failed.',
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

export default signMeOutMock;
