export declare const ContactSchema: {
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
                firstName: {
                    type: string;
                    nullable: boolean;
                };
                lastName: {
                    type: string;
                    nullable: boolean;
                };
                userHandle: {
                    type: string;
                    nullable: boolean;
                };
                avatarUrl: {
                    type: string;
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
        userId: {
            type: string;
            maxLength: number;
        };
        channelId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        nickname: {
            type: string;
            nullable: boolean;
        };
        typeTextIds: {
            type: string;
            items: {
                type: string;
            };
        };
        favorite: {
            type: string;
            nullable: boolean;
        };
        notes: {
            type: string;
            nullable: boolean;
        };
        archivedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
    };
    required: string[];
};
