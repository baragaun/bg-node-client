declare const _default: "\nquery Q ($id: String!) {\n  findChannelMessageById(id: $id) {\n    id\n    channelId\n    messageText\n    createdAt\n    createdBy\n    updatedAt\n  }\n}\n";
export default _default;
