export default `
mutation M($userId: String!, $notes: String, $reasonTextId: String) {
  blockUserForMe(userId: $userId, notes: $notes, reasonTextId: $reasonTextId)
}
`;
//# sourceMappingURL=blockUserForMe.graphql.js.map