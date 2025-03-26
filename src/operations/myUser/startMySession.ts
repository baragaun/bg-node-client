import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const startMySession = async (): Promise<void> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.myUserId) {
    throw new Error('not-authorized');
  }

  try {
    await fsdata.myUser.startMySession();

    clientInfoStore.sessionStarted();
  } catch (error) {
    logger.error('startMySession: fsdata.myUser.startMySession failed', error);
    return null;
  }
};

export default startMySession;
