import db from '../db/db.js';
import fsdata from '../fsdata/fsdata.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const updateLocalObject = async (id, object, modelType, options) => {
    if (!libData.isInitialized()) {
        logger.error('updateLocalObject: unavailable');
        return { error: 'unavailable' };
    }
    if (!object) {
        const pollingResult = await fsdata.pollForUpdatedObject(id, modelType, options);
        if (pollingResult.error || !pollingResult.object) {
            return pollingResult;
        }
        object = pollingResult.object;
    }
    if (!object) {
        return { error: 'system-error' };
    }
    return db.replace(object, modelType);
};
export default updateLocalObject;
//# sourceMappingURL=updateLocalObject.js.map