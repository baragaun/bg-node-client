import { UserIdentType as UserIdentTypeFromClient } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import logger from '../../helpers/logger.js';

const isUserIdentAvailable = async (
  userIdent: string,
  identType: UserIdentTypeFromClient,
): Promise<boolean> => {
  const config = data.config();

  if (!config) {
    logger.error('isUserIdentAvailable: no config.');
    return null;
  }

  try {
    return fsdata.myUser.isUserIdentAvailable(userIdent, identType);
  } catch (error) {
    logger.error(
      'isUserIdentAvailable: fsdata.myUser.isUserIdentAvailable failed',
      error,
    );
    return null;
  }
};

export default isUserIdentAvailable;
