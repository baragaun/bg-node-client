export default `query Q ($id: String!) {
  findChannelById(id: $id) {
    id
    userIds
    updatedAt
  }
}`;
//# sourceMappingURL=findChannelById.graphql.js.map