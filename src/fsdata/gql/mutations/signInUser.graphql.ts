export default `
mutation M ($input: SignInUserInput!) {
  signInUser (input: $input) {
    userId
    authToken
  }
}`;
