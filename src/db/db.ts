import close from './close.js';
import count from './count.js';
import countByMatch from './countByMatch.js';
import deleteFunc from './delete.js';
import find from './find.js';
import findAll from './findAll.js';
import findById from './findById.js';
import findByMatch from './findByMatch.js';
import findOne from './findOne.js';
// import db from './helpers/db.js';
import findOneByMatch from './findOneByMatch.js';
import findUpdatedAt from './findUpdatedAt.js';
import init from './initDb.js';
import insert from './insert.js';
import isConnected from './isConnected.js';
import isModelTypeSupported from './isModelTypeSupported.js';
import replace from './replace.js';
import update from './update.js';
import upsert from './upsert.js';
import { Db } from '../types/Db.js';

const db: Db = {
  close,
  count,
  countByMatch,
  delete: deleteFunc,
  find,
  findByMatch,
  findAll,
  findById,
  findOne,
  findOneByMatch,
  findUpdatedAt,
  init,
  insert,
  isConnected,
  isModelTypeSupported,
  // libSignalStores: db.getLibSignalStores,
  replace,
  update,
  upsert,
};

export default db;
