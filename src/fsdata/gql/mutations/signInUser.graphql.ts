export default `
mutation M($input: SignInUserInput!) {
  signInUser (input: $input) {
    userId
    firstName
    lastName
    authToken
  }
}
`;
