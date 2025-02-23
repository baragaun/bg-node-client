import db from '../db/db.js';
const findOne = async (match, modelType) => {
    try {
        return db.findOne(match, modelType);
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findOne;
//# sourceMappingURL=findOne.js.map