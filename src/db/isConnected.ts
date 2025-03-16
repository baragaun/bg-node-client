import { RxDatabase } from "rxdb";

import db from "./helpers/db.js";

let _db: RxDatabase | undefined = undefined;

const isConnected = (): boolean => {
  if (!_db) {
    _db = db.getDb();
  }

  return !!_db;
};

export default isConnected;
