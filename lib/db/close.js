import { isRxDatabase } from "rxdb/plugins/core";
import db from "./helpers/db.js";
import logger from "../helpers/logger.js";
const close = async () => {
    logger.debug("Db.shutdown called.");
    const dbClient = db.getDb();
    if (!isRxDatabase(dbClient)) {
        return;
    }
    await dbClient.close();
};
export default close;
//# sourceMappingURL=close.js.map