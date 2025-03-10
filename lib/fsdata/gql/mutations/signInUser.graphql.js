export default `
mutation M($input: SignInUserInput!) {
  signInUser (input: $input) {
    userId
    authToken
  }
}
`;
//# sourceMappingURL=signInUser.graphql.js.map