import deleteFunc from './delete.js';
import find from './find.js';
import findAll from './findAll.js';
import findById from './findById.js';
import findOne from './findOne.js';
import init from './initDb.js';
import insert from './insert.js';
import isConnected from './isConnected.js';
import replace from './replace.js';
import update from './update.js';
import db from './helpers/db.js';
const rxDbStore = {
    delete: deleteFunc,
    find,
    findAll,
    findById,
    findOne,
    init,
    insert,
    isConnected,
    libSignalStores: db.getLibSignalStores,
    replace,
    update,
};
export default rxDbStore;
//# sourceMappingURL=rxDbStore.js.map