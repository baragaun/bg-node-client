export default `
mutation M($input: ChannelInput!) {
  createChannel(input: $input) {
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
//# sourceMappingURL=createChannel.graphql.js.map