import db from '../db/db.js';
import fsdata from '../fsdata/fsdata.js';
import libData from '../helpers/libData.js';
const updateLocalObject = async (id, object, modelType, options) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    if (!object) {
        object = await fsdata.pollForUpdatedObject(id, modelType, options);
        if (!object) {
            return null;
        }
    }
    if (!object) {
        return null;
    }
    await db.replace(object, modelType);
    return object;
};
export default updateLocalObject;
//# sourceMappingURL=updateLocalObject.js.map