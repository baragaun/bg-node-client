import db from '../db/db.js';
import { MutationType } from '../types/enums.js';
const insertOne = async (object) => {
    try {
        return db.insert(object);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default insertOne;
//# sourceMappingURL=insertOne.js.map