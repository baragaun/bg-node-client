export const sessionSchema = {
    title: 'session schema',
    version: 0,
    type: 'object',
    properties: {
        address: {
            type: 'string',
            maxLength: 100,
        },
        record: {
            type: 'string', // We'll store the session record as a JSON string.
        },
    },
    primaryKey: 'address',
    required: ['address', 'record'],
};
//# sourceMappingURL=sessionSchema.js.map