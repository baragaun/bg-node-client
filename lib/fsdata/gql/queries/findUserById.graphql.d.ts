declare const _default: "query Q ($id: String!) {\n  findUserById(id: $id) {\n    id\n    userHandle\n    firstName\n    lastName\n    createdAt\n    updatedAt\n  }\n}";
export default _default;
