declare const _default: "\nmutation StartVerifyEmail($email: String!) {\n  startVerifyEmail(email: $email) {\n    actionId\n    actionStatus\n    actionType\n    attemptCount\n    authTokenExpiresAt\n    authToken\n    expiresAt\n    result\n    createdAt\n  }\n}";
export default _default;
