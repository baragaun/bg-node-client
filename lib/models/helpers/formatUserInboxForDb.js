import formatDateFieldsToDb from './formatDateFieldsToDb.js';
const formatUserInboxForDb = (obj) => {
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
export default formatUserInboxForDb;
//# sourceMappingURL=formatUserInboxForDb.js.map