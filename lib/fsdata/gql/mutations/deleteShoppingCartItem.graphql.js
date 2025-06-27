export default `
mutation DeleteShoppingCartItem($deletePhysically: Boolean!, $deleteShoppingCartItemId: String!) {
  deleteShoppingCartItem(deletePhysically: $deletePhysically, id: $deleteShoppingCartItemId) {
    id
    userId
    userRoles
    objectIds
    modelTypes
    result
    messageIds
    message
    errorCode
    deviceUuid
    source
    createdAt
    createdBy
    updatedAt
    updatedBy
    deletedAt
    deletedBy
    finishedAt
    expiresAt
  }
}`;
//# sourceMappingURL=deleteShoppingCartItem.graphql.js.map