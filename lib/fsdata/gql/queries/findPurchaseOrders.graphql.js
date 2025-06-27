export default `
query Q ($options: FindObjectsOptions, $match: PurchaseOrderInput, $filter: PurchaseOrderListFilter) {
  findPurchaseOrders(options: $options, match: $match, filter: $filter) {
    id
    adminNotes
    createdAt
    createdBy
    updatedAt
    updatedBy
    deletedAt
    deletedBy
    userId
    shoppingCartId
    sumItemPrice
    totalPrice
    vat
    paidAt
    canceledAt
    refundedAt
    items {
      id
      adminNotes
      createdAt
      createdBy
      updatedAt
      updatedBy
      deletedAt
      deletedBy
      purchaseOrderId
      shoppingCartItemId
      productId
      vendorId
      quantity
      price
      totalPrice
    }
  }
}
`;
//# sourceMappingURL=findPurchaseOrders.graphql.js.map