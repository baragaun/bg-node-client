import { RxDatabase } from "rxdb";
// import { LibSignalStores } from 'libSignalStores/LibSignalStores.js';

let _db: RxDatabase | undefined = undefined;
// let _libSignalStores: LibSignalStores | undefined = undefined;

const getDb = (): RxDatabase | undefined => _db;

const setDb = (db: RxDatabase): void => {
  _db = db;
};

// const getLibSignalStores = (): LibSignalStores | undefined => _libSignalStores;

// const setLibSignalStores = (libSignalStores: LibSignalStores): void => {
//   _libSignalStores = libSignalStores;
// };

export default {
  getDb,
  // getLibSignalStores,
  setDb,
  // setLibSignalStores,
};
