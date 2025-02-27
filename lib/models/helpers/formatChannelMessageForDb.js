import formatDateFieldsToDb from './formatDateFieldsToDb.js';
const formatChannelMessageForDb = (obj) => {
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
export default formatChannelMessageForDb;
//# sourceMappingURL=formatChannelMessageForDb.js.map