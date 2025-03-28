export default `
mutation M($input: ChannelInvitationInput!) {
  createChannelInvitation(input: $input) {
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
  }
}
`;
