export default `
mutation M($input: ChannelMessageInput!) {
  createChannelMessage(input: $input) {
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
    editedAt
    suspendedAt
    suspendedBy
    mm2ConversationId
    mm2Id
    syncedWithMm2At
  }
}
`;
