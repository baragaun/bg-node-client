import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const endMySession = async (): Promise<void> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('endMySession: unavailable');
      return;
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('endMySession: unauthorized');
      return;
    }

    if (libData.isOnline()) {
      await fsdata.myUser.endMySession();
    } else if (!libData.isInMockMode()) {
      logger.error('endMySession: offline.');
    }

    libData.clientInfoStore().sessionEnded();
  } catch (error) {
    logger.error('endMySession: fsdata.myUser.endMySession failed', error);
  }
};

export default endMySession;
