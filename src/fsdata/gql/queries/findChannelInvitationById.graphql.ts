export default `query Q ($id: String!) {
  findChannelInvitationById(id: $id) {
    id
    recipientId
    messageText
    createdAt
    createdBy
    updatedAt
  }
}`;
