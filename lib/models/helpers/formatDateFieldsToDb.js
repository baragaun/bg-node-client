const formatDateFieldsToDb = (obj, dateFields) => {
    for (const field of dateFields) {
        if (obj[field]) {
            obj[field] = obj[field].toISOString();
        }
        else if (obj[field] === null) {
            obj[field] = '';
        }
        else if (obj[field] === undefined) {
            delete obj[field];
        }
    }
    return obj;
};
export default formatDateFieldsToDb;
//# sourceMappingURL=formatDateFieldsToDb.js.map