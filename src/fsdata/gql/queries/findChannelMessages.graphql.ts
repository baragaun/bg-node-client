export default `
query Q($options: FindObjectsOptions, $match: ChannelMessageInput, $filter: ChannelMessageListFilter) {
  findChannelMessages(options: $options, match: $match, filter: $filter) {
    id
    adminNotes
    createdAt
    createdBy
    updatedAt
    updatedBy
    deletedAt
    deletedBy
    channelId
    replyToMessageId
    channelMessageType
    messageText
    statuses {
      userId
      receivedAt
      seenAt
    }
    editedAt
    suspendedAt
    suspendedBy
    mm2ConversationId
    mm2Id
    syncedWithMm2At
  }
}
`;
