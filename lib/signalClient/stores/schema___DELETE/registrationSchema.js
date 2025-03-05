export const registrationSchema = {
    title: 'registration id schema',
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100,
        },
        registrationId: {
            type: 'number',
        },
        privateKey: {
            type: 'string', // base64 encoded private identity key
        },
    },
    primaryKey: 'id',
    required: ['id', 'registrationId', 'privateKey'],
};
//# sourceMappingURL=registrationSchema.js.map