export default `
query Q($userId: String!, $options: FindObjectsOptions, $onlyUnseen: Boolean, $onlyPending: Boolean, $direction: ChannelInvitationDirection) {
  findChannelInvitationsForUser(userId: $userId, options: $options, onlyUnseen: $onlyUnseen, onlyPending: $onlyPending, direction: $direction) {
    id
    adminNotes
    createdAt
    createdBy
    updatedAt
    updatedBy
    deletedAt
    deletedBy
    channelId
    recipientId
    channelName
    channelTopic
    messageText
    declineReasonTextId
    dismissedFromInboxBySenderAt
    dismissedFromInboxByRecipientAt
    readByRecipientAt
    status
    suspendedAt
    suspendedBy
    userSearchId
    searchRank
    mm2ConversationId
    mm2Id
    syncedWithMm2At
  }
}
`;
//# sourceMappingURL=findChannelInvitationsForUser.graphql.js.map