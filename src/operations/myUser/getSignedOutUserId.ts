import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const getSignedOutUserId = (): string | null => {
  if (!libData.isInitialized()) {
    logger.error('getSignedOutUserId: unavailable');
    return null;
  }

  return libData.clientInfoStore().clientInfo.signedOutUserId;
};

export default getSignedOutUserId;
