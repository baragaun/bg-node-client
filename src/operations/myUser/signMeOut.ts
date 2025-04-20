import fsdata from '../../fsdata/fsdata.js';
import clearUser from '../../helpers/clearUser.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import signMeOutMock from '../../mockOperations/myUser/signMeOutMock.js';
import { QueryResult } from '../../types/QueryResult.js';

const signMeOut = async (): Promise<QueryResult<void>> => {
  try {
    if (libData.config().enableMockMode) {
      return signMeOutMock();
    }

    if (!libData.isInitialized()) {
      logger.error('signMeOut: unavailable');
      return { error: 'unavailable' };
    }

    if (libData.isOffline()) {
      logger.error('signMeOut: offline');
      return { error: 'offline' };
    }

    const clientInfo = libData.clientInfoStore().clientInfo;

    if (!clientInfo.isSignedIn) {
      return { error: 'unauthorized' };
    }

    await fsdata.myUser.signMeOut();

    await clearUser(false);

    return {};
  } catch (error) {
    logger.error(error);
    return { error: (error as Error).message };
  }
};

export default signMeOut;
