export default `
mutation M ($input: SignUpUserInput!) {
  signUpUser (input: $input) {
    userId
    authToken
  }
}
`;
//# sourceMappingURL=signUpUser.graphql.js.map