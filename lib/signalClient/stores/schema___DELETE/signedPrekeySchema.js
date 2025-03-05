export const signedPrekeySchema = {
    title: 'signed prekey schema',
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100,
        },
        record: {
            type: 'string', // We'll store the signed prekey record as a JSON string.
        },
    },
    primaryKey: 'id',
    required: ['id', 'record'],
};
//# sourceMappingURL=signedPrekeySchema.js.map