export default `
query Q($ident: String!, $identType: UserIdentType) {
  isUserIdentAvailable(ident: $ident, identType: $identType)
}
`;
