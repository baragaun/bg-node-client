import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const startMySessionV2 = async (): Promise<void> => {
  if (!libData.isInitialized()) {
    logger.error('startMySessionV2: unavailable.');
    return;
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('startMySessionV2: user not signed in.');
    return;
  }

  if (libData.isOffline()) {
    logger.error('startMySessionV2: offline.');
    return;
  }

  try {
    const response = await fsdata.myUser.startMySessionV2();

    if (response.error || !response.object) {
      logger.error('startMySessionV2: failed to start session.', { response });
      return;
    }

    const clientInfo = libData.clientInfoStore().clientInfo;
    clientInfo.remoteContentStatus = response.object;
    libData.clientInfoStore().sessionStarted();
  } catch (error) {
    logger.error('startMySessionV2: error.', { error });
  }
};

export default startMySessionV2;
