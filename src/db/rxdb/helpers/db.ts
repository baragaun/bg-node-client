import { RxDatabase } from 'rxdb';

let _db: RxDatabase | undefined = undefined;

const getDb = (): RxDatabase | undefined => _db;

const setDb = (db: RxDatabase): void => {
  _db = db;
}

export default {
  getDb,
  setDb,
}
