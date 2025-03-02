export const identityKeySchema = {
    title: 'identity key schema',
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100,
        },
        publicKey: {
            type: 'string' // base64 encoded public key
        }
    },
    primaryKey: 'id',
    required: ['id', 'publicKey']
};
//# sourceMappingURL=identityKeySchema.js.map