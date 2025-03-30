import { UserIdentType as UserIdentTypeFromClient } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { QueryResult } from '../../types/QueryResult.js';

const isUserIdentAvailable = async (
  userIdent: string,
  identType: UserIdentTypeFromClient,
): Promise<QueryResult<boolean>> => {
  if (!libData.isInitialized()) {
    logger.error('isUserIdentAvailable: unavailable');
    return { error: 'unavailable' };
  }

  if (libData.isOffline() && !libData.config().enableMockMode) {
    logger.error('isUserIdentAvailable: offline');
    return { error: 'offline' };
  }

  try {
    return fsdata.myUser.isUserIdentAvailable(userIdent, identType);
  } catch (error) {
    logger.error('isUserIdentAvailable: fsdata.myUser.isUserIdentAvailable failed', error);
    return { error: (error as Error).message };
  }
};

export default isUserIdentAvailable;
