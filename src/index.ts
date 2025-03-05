import { BgNodeClient } from './types/BgNodeClient.js';
import data from './helpers/data.js';
import init from './init.js';
import operations from './operations/operations.js';
// import db from './db/db.js';

const bgNodeClient: BgNodeClient = {
  addListener: data.addListener,
  init,
  operations,
  removeListener: data.removeListener,
}

export default bgNodeClient;
