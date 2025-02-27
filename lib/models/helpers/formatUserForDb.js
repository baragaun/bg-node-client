import formatDateFieldsToDb from './formatDateFieldsToDb.js';
const formatUserForDb = (obj) => {
    obj = formatDateFieldsToDb(obj, [
        'createdAt',
        'updatedAt',
        'deletedAt',
        'pausedAt',
        'suspendedAt',
        'lockedAt',
        'archivedAt',
    ]);
    return obj;
};
export default formatUserForDb;
//# sourceMappingURL=formatUserForDb.js.map