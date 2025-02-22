import { Db } from '../../types/Db.js';
import deleteFunc from './delete.js';
import findAll from './findAll.js';
import findById from './findById.js';
import init from './init.js';
import insert from './insert.js';
import replace from './replace.js';
import update from './update.js';

const rxDbStore: Db = {
  delete: deleteFunc,
  findAll,
  findById,
  init,
  insert,
  replace,
  update,
};

export default rxDbStore;
