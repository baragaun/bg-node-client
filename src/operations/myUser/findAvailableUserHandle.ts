import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import findAvailableUserHandleMock from '../../mockOperations/myUser/findAvailableUserHandleMock.js';
import { QueryResult } from '../../types/QueryResult.js';

const findAvailableUserHandle = async (
  startValue: string,
): Promise<QueryResult<string>> => {
  try {
    if (libData.config().enableMockMode) {
      return findAvailableUserHandleMock(startValue);
    }

    if (!libData.isInitialized()) {
      logger.error('findAvailableUserHandle: unavailable');
      return { error: 'unavailable' };
    }

    if (libData.isOffline() && !libData.config().enableMockMode) {
      return { error: 'offline' };
    }

    if (libData.isOnline()) {
      return fsdata.myUser.findAvailableUserHandle(startValue);
    }

    return { object: crypto.randomUUID().replaceAll('-', '') };
  } catch (error) {
    logger.error('findAvailableUserHandle: fsdata.myUser.findAvailableUserHandle failed', error);
    return { error: 'system-error' };
  }
};

export default findAvailableUserHandle;
