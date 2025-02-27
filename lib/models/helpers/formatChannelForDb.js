import formatDateFieldsToDb from './formatDateFieldsToDb.js';
const formatChannelForDb = (obj) => {
    obj = formatDateFieldsToDb(obj, [
        'archivedAt',
        'createdAt',
        'deletedAt',
        'lockedAt',
        'pausedAt',
        'suspendedAt',
        'updatedAt',
    ]);
    delete obj.archivedAt;
    return obj;
};
export default formatChannelForDb;
//# sourceMappingURL=formatChannelForDb.js.map