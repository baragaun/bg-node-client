import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const startMySessionV2 = async (): Promise<void> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.myUserId) {
    throw new Error('not-authorized');
  }

  try {
    const contentStatus = await fsdata.myUser.startMySessionV2();

    if (contentStatus) {
      const clientInfo = clientInfoStore.get();
      clientInfo.remoteContentStatus = contentStatus;
      clientInfoStore.sessionStarted();
    }
  } catch (error) {
    logger.error('startMySessionV2: fsdata.myUser.startMySessionV2 failed', error);
    return null;
  }
};

export default startMySessionV2;
