export declare const CompanySchema: {
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
            nullable: boolean;
        };
        metadata: {
            type: string;
            properties: {
                updatedAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        updatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        updatedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        deletedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        deletedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        userIds: {
            type: string;
            items: {
                type: string;
            };
            nullable: boolean;
        };
        name: {
            type: string;
        };
        description: {
            type: string;
            nullable: boolean;
        };
        location: {
            type: string;
            nullable: boolean;
        };
        companyTypeTextId: {
            type: string;
            nullable: boolean;
        };
        companyStageTextId: {
            type: string;
            nullable: boolean;
        };
        websites: {
            type: string;
            items: {
                type: string;
                properties: {
                    label: {
                        type: string;
                        nullable: boolean;
                    };
                    value: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                };
            };
            nullable: boolean;
        };
        industries: {
            type: string;
            items: {
                type: string;
            };
            nullable: boolean;
        };
        isOperational: {
            type: string;
            nullable: boolean;
        };
        isFundraising: {
            type: string;
            nullable: boolean;
        };
        annualRevenue: {
            type: string;
            nullable: boolean;
        };
        employeeCount: {
            type: string;
            nullable: boolean;
        };
        foundedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        mm2UserId: {
            type: string;
            description: string;
            nullable: boolean;
        };
        mm2CompanyRole: {
            type: string;
            description: string;
            nullable: boolean;
        };
        syncedWithMm2At: {
            type: string;
            description: string;
            format: string;
            nullable: boolean;
        };
    };
    required: string[];
};
