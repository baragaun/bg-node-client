export default `
query Q($startValue: String!) {
  findAvailableUserHandle(startValue: $startValue)
}
`;
