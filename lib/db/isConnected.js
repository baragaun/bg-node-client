import db from "./helpers/db.js";
let _db = undefined;
const isConnected = () => {
    if (!_db) {
        _db = db.getDb();
    }
    return !!_db;
};
export default isConnected;
//# sourceMappingURL=isConnected.js.map