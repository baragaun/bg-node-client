export default `
query Q($options: FindObjectsOptions, $match: ChannelInput, $filter: ChannelListFilter) {
  findChannels(options: $options, match: $match, filter: $filter) {
    id
    adminNotes
    createdAt
    createdBy
    updatedAt
    updatedBy
    deletedAt
    deletedBy
    name
    topic
    description
    tags
    channelType
    userIds
    pausedAt
    pausedBy
    suspendedAt
    suspendedBy
    lockedAt
    lockedBy
    archivedAt
    archivedBy
    assumedMentorId
    mm2Id
    syncedWithMm2At
    isArchivedForMe
  }
}
`;
