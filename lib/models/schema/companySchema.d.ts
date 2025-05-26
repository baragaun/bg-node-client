export declare const CompanySchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        id: {
            type: string;
            maxLength: number;
        };
        adminNotes: {
            type: string;
        };
        metadata: {
            type: string;
        };
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
        };
        updatedAt: {
            type: string;
            format: string;
        };
        updatedBy: {
            type: string;
            maxLength: number;
        };
        deletedAt: {
            type: string;
            format: string;
        };
        deletedBy: {
            type: string;
            maxLength: number;
        };
        userIds: {
            type: string;
            items: {
                type: string;
            };
        };
        name: {
            type: string;
        };
        description: {
            type: string;
        };
        location: {
            type: string;
        };
        companyTypeTextId: {
            type: string;
        };
        companyStageTextId: {
            type: string;
        };
        websites: {
            type: string;
            items: {
                type: string;
            };
            properties: {
                label: {
                    type: string;
                };
                value: {
                    type: string;
                };
                tags: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
            };
        };
        industries: {
            type: string;
            items: {
                type: string;
            };
        };
        isOperational: {
            type: string;
        };
        isFundraising: {
            type: string;
        };
        annualRevenue: {
            type: string;
        };
        employeeCount: {
            type: string;
        };
        foundedAt: {
            type: string;
            format: string;
        };
        mm2UserId: {
            type: string;
            description: string;
        };
        mm2CompanyRole: {
            type: string;
            description: string;
        };
        syncedWithMm2At: {
            type: string;
            description: string;
            format: string;
        };
    };
    required: string[];
};
