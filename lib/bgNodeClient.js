import data from './helpers/data.js';
import operations from './operations/operations.js';
// import db from './db/db.js';
const bgNodeClient = {
    addListener: data.addListener,
    operations,
    removeListener: data.removeListener,
};
export default bgNodeClient;
//# sourceMappingURL=bgNodeClient.js.map