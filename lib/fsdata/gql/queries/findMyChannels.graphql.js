export default `
query Q($options: FindObjectsOptions) {
  findMyChannels(options: $options) {
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
    statuses {
      userId
      archivedAt
    }
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
//# sourceMappingURL=findMyChannels.graphql.js.map