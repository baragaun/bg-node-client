export default `
query Q ($id: String!) {
  findUserById(id: $id) {
    id
    userHandle
    firstName
    lastName
    createdAt
    updatedAt
  }
}
`;
