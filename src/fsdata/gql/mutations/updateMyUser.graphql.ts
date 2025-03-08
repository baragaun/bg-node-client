export default `
mutation M ($input: MyUserInput!) {
  updateMyUser (input: $input) {
    id
  }
}`;
