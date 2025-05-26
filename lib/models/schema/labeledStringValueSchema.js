export const LabeledStringValueSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/labeledStringValue.schema.json',
    'title': 'LabeledStringValue',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'label': {
            'type': 'string',
        },
        'value': {
            'type': 'string',
        },
        'tags': {
            'type': 'array',
            'items': {
                'type': 'string',
            },
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=labeledStringValueSchema.js.map