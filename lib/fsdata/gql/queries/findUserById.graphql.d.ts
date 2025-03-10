declare const _default: "\nquery Q ($id: String!) {\n  findUserById(id: $id) {\n    id\n    userHandle\n    firstName\n    lastName\n    createdAt\n    updatedAt\n  }\n}\n";
export default _default;
