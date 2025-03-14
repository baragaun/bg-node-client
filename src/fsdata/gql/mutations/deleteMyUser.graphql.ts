export default `
mutation DeleteMyUser($deletePhysically: Boolean!, $description: String, $cause: String) {
  deleteMyUser(deletePhysically: $deletePhysically, description: $description, cause: $cause)
}`;
