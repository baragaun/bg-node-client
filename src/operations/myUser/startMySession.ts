import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const startMySession = async (
  pushNotificationToken: string | null | undefined,
): Promise<void> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('startMySession: unavailable.');
      return;
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('startMySession: user not signed in.');
      return;
    }

    if (libData.isOnline()) {
      await fsdata.myUser.startMySession(pushNotificationToken);
    } else if (!libData.isInMockMode()) {
      logger.error('startMySession: offline.');
    }

    libData.clientInfoStore().sessionStarted();
  } catch (error) {
    logger.error('startMySession: error.', { error });
  }
};

export default startMySession;
