// import { LibSignalStores } from '../libSignalStores/LibSignalStores.js';
let _db = undefined;
// let _libSignalStores: LibSignalStores | undefined = undefined;
const getDb = () => _db;
const setDb = (db) => {
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
//# sourceMappingURL=db.js.map