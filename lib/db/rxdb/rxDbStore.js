import deleteFunc from './delete.js';
import find from './find.js';
import findAll from './findAll.js';
import findById from './findById.js';
import findOne from './findOne.js';
import init from './init.js';
import insert from './insert.js';
import replace from './replace.js';
import update from './update.js';
const rxDbStore = {
    delete: deleteFunc,
    find,
    findAll,
    findById,
    findOne,
    init,
    insert,
    replace,
    update,
};
export default rxDbStore;
//# sourceMappingURL=rxDbStore.js.map