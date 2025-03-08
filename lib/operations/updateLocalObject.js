import db from '../db/db.js';
import fsdata from '../fsdata/fsdata.js';
const updateLocalObject = async (id, object, modelType, options) => {
    if (!object) {
        object = await fsdata.pollForUpdatedObject(modelType, id, options);
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