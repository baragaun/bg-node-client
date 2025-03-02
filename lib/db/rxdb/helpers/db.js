let _db = undefined;
let _libSignalStores = undefined;
const getDb = () => _db;
const setDb = (db) => {
    _db = db;
};
const getLibSignalStores = () => _libSignalStores;
const setLibSignalStores = (libSignalStores) => {
    _libSignalStores = libSignalStores;
};
export default {
    getDb,
    getLibSignalStores,
    setDb,
    setLibSignalStores,
};
//# sourceMappingURL=db.js.map