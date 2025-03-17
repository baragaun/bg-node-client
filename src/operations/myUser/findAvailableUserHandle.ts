import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';

const findAvailableUserHandle = async (startValue: string): Promise<string> => {
  const config = libData.config();

  if (!config) {
    logger.error('findAvailableUserHandle: no config.');
    return null;
  }

  try {
    return fsdata.myUser.findAvailableUserHandle(startValue);
  } catch (error) {
    logger.error(
      'findAvailableUserHandle: fsdata.myUser.findAvailableUserHandle failed',
      error,
    );
    return null;
  }
};

export default findAvailableUserHandle;
