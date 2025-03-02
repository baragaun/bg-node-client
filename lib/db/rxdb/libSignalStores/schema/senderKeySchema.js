export const senderKeySchema = {
    title: 'sender key schema',
    version: 0,
    type: 'object',
    properties: {
        // Composite key: sender.toString() + '-' + distributionId
        id: {
            type: 'string',
            maxLength: 100,
        },
        record: {
            type: 'string' // JSON-serialized sender key record.
        }
    },
    primaryKey: 'id',
    required: ['id', 'record']
};
//# sourceMappingURL=senderKeySchema.js.map