import data from './helpers/data.js';
import operations from './operations/operations.js';
import { BgNodeClient } from './types/BgNodeClient.js';
// import db from './db/db.js';

const bgNodeClient: BgNodeClient = {
  addListener: data.addListener,
  operations,
  removeListener: data.removeListener,
};

export default bgNodeClient;
