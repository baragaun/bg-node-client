import formatDateFieldsToDb from './formatDateFieldsToDb.js';
const formatChannelParticipantForDb = (obj) => {
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
export default formatChannelParticipantForDb;
//# sourceMappingURL=formatChannelParticipantForDb.js.map