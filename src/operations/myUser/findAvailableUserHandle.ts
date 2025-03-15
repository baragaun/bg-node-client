import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';

const findAvailableUserHandle = async (startValue: string): Promise<string> => {
  const config = data.config();

  if (!config) {
    console.error('findAvailableUserHandle: no config.');
    return null;
  }

  try {
    return fsdata.myUser.findAvailableUserHandle(startValue);
  } catch (error) {
    console.error(
      'findAvailableUserHandle: fsdata.myUser.findAvailableUserHandle failed',
      error,
    );
    return null;
  }
};

export default findAvailableUserHandle;
