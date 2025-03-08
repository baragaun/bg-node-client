export default `query Q ($id: String!) {
  findChannelMessageById(id: $id) {
    id
    channelId
    messageText
    createdAt
    createdBy
    updatedAt
  }
}`;
