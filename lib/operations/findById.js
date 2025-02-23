import db from '../db/db.js';
const findById = async (id, modelType) => {
    try {
        return db.findById(id, modelType);
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findById;
//# sourceMappingURL=findById.js.map