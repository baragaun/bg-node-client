import fsdata from '../../fsdata/fsdata.js';
import data from '../../helpers/data.js';
import logger from '../../helpers/logger.js';
const findAvailableUserHandle = async (startValue) => {
    const config = data.config();
    if (!config) {
        logger.error('findAvailableUserHandle: no config.');
        return null;
    }
    try {
        return fsdata.myUser.findAvailableUserHandle(startValue);
    }
    catch (error) {
        logger.error('findAvailableUserHandle: fsdata.myUser.findAvailableUserHandle failed', error);
        return null;
    }
};
export default findAvailableUserHandle;
//# sourceMappingURL=findAvailableUserHandle.js.map