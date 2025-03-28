export default `
mutation M($userId: String!) {
  unblockUserForMe(userId: $userId)
}
`;
