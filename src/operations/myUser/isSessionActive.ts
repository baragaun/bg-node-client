import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const isSessionActive = (): boolean => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  try {
    const clientInfo = clientInfoStore.get();
    return clientInfo.isSignedIn &&
      clientInfo.sessionStartedAt &&
      !clientInfo.sessionEndedAt;
  } catch (error) {
    logger.error('isSessionActive: fsdata.myUser.isSessionActive failed', error);
    return false;
  }
};

export default isSessionActive;
