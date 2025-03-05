export const preKeySchema = {
    title: 'prekey schema',
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100,
        },
        record: {
            type: 'string', // We'll store the prekey record as a JSON string.
        },
    },
    primaryKey: 'id',
    required: ['id', 'record'],
};
//# sourceMappingURL=preKeySchema.js.map