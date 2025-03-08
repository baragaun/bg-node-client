export default `query Q ($id: String!) {
  findChannelParticipantById(id: $id) {
    id
    channelId
    createdAt
    updatedAt
  }
}`;
//# sourceMappingURL=findChannelParticipantById.graphql.js.map