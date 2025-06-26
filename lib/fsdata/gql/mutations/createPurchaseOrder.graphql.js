export default `
mutation M($input: PurchaseOrderInput!) {
   createPurchaseOrder(input: $input) {
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
}
`;
//# sourceMappingURL=createPurchaseOrder.graphql.js.map