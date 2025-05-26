export const CompanySchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/company.schema.json',
    'title': 'Company',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'id': {
            'type': 'string',
            'maxLength': 32,
        },
        'adminNotes': {
            'type': 'string',
        },
        'metadata': {
            'type': 'BaseModelMetadata',
        },
        'createdAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'createdBy': {
            'type': 'string',
            'maxLength': 32,
        },
        'updatedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'updatedBy': {
            'type': 'string',
            'maxLength': 32,
        },
        'deletedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'deletedBy': {
            'type': 'string',
            'maxLength': 32,
        },
        'userIds': {
            'type': 'array',
            'items': {
                'type': 'string',
            },
        },
        'name': {
            'type': 'string',
        },
        'description': {
            'type': 'string',
        },
        'location': {
            'type': 'string',
        },
        'companyTypeTextId': {
            'type': 'string',
        },
        'companyStageTextId': {
            'type': 'string',
        },
        'websites': {
            'type': 'array',
            'items': {
                'type': 'object',
            },
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
        },
        'industries': {
            'type': 'array',
            'items': {
                'type': 'string',
            },
        },
        'isOperational': {
            'type': 'boolean',
        },
        'isFundraising': {
            'type': 'boolean',
        },
        'annualRevenue': {
            'type': 'integer',
        },
        'employeeCount': {
            'type': 'integer',
        },
        'foundedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'mm2UserId': {
            'type': 'string',
            'description': 'If a Company was created from the imported attributes of an MM2 Profile, mm2UserId references the MM2 user ID. This attribute is only used by the MM2 synchronizer.',
        },
        'mm2CompanyRole': {
            'type': 'string',
            'description': 'If a Company was created from the imported from MM2, mm2CompanyRole is either "mentor" or "mentee". This attribute is only used by the MM2 synchronizer.',
        },
        'syncedWithMm2At': {
            'type': 'string',
            'description': 'This attribute is only used by the MM2 synchronizer.',
            'format': 'date-time',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=companySchema.js.map