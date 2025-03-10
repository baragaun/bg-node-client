declare const _default: "\nquery Q ($id: String!) {\n  findChannelInvitationById(id: $id) {\n    id\n    recipientId\n    messageText\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n";
export default _default;
