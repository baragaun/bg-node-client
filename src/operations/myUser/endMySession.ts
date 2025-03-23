import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const endMySession = async (): Promise<void> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  try {
    await fsdata.myUser.endMySession();
    clientInfoStore.sessionEnded();
  } catch (error) {
    logger.error('endMySession: fsdata.myUser.endMySession failed', error);
    return null;
  }
};

export default endMySession;
