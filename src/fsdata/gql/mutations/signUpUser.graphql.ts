export default `
mutation M ($input: SignUpUserInput!) {
  signUpUser (input: $input) {
    userId
    authToken
  }
}
`;
