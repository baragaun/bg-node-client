import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import verifyMyPasswordMock from '../../mockOperations/myUser/verifyMyPasswordMock.js';
import { QueryResult } from '../../types/QueryResult.js';

const verifyMyPassword = async (
  password: string,
): Promise<QueryResult<string>> => {
  try {
    if (libData.config().enableMockMode) {
      return verifyMyPasswordMock(password);
    }

    if (!libData.isInitialized()) {
      logger.error('verifyMyPassword: unavailable');
      return { error: 'unavailable' };
    }

    if (libData.isOffline()) {
      logger.error('verifyMyPassword: offline');
      return { error: 'offline' };
    }

    return fsdata.myUser.verifyMyPassword(password);
  } catch (error) {
    logger.error('verifyMyPassword: fsdata.myUser.verifyMyPassword failed', error);
    return { error: 'system-error' };
  }
};

export default verifyMyPassword;
