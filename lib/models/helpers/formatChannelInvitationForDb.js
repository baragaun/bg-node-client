import formatDateFieldsToDb from './formatDateFieldsToDb.js';
const formatChannelInvitationForDb = (obj) => {
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
export default formatChannelInvitationForDb;
//# sourceMappingURL=formatChannelInvitationForDb.js.map