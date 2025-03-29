import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const isSessionActive = (): boolean => {
  if (!libData.isInitialized()) {
    logger.error('isSessionActive: unavailable');
    return false;
  }

  try {
    return libData.clientInfoStore().clientInfo.isSessionActive;
  } catch (error) {
    logger.error('isSessionActive: fsdata.myUser.isSessionActive failed', error);
    return false;
  }
};

export default isSessionActive;
