export default `
mutation UpdateShoppingCartItem($input: ShoppingCartItemInput!, $options: UpdateObjectOptions) {
  updateShoppingCartItem(input: $input, options: $options) {
    id
    serviceRequestType
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
