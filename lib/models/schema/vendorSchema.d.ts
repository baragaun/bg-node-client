export declare const BrandSchema: {
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
        name: {
            type: string;
        };
        importId: {
            type: string;
        };
        imageSource: {
            type: string;
            nullable: boolean;
        };
        slug: {
            type: string;
            nullable: boolean;
        };
        url: {
            type: string;
            nullable: boolean;
        };
        balanceLookupUri: {
            type: string;
            nullable: boolean;
        };
        listed: {
            type: string;
            nullable: boolean;
        };
        logoImageSource: {
            type: string;
            nullable: boolean;
        };
        description: {
            type: string;
            nullable: boolean;
        };
        alias1: {
            type: string;
            nullable: boolean;
        };
        alias2: {
            type: string;
            nullable: boolean;
        };
        alias3: {
            type: string;
            nullable: boolean;
        };
    };
    required: string[];
};
