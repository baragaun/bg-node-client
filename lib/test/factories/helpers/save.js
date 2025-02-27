import db from '../../../db/db.js';
const save = async (object) => {
    if (!db.isConnected()) {
        throw new Error('db-not-available');
    }
    if (!db.isConnected()) {
        throw new Error('db-not-available');
    }
    await db.insert(object);
    return object;
};
export default save;
//# sourceMappingURL=save.js.map