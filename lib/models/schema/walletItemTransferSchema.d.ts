export declare const WalletItemTransferSchema: {
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
        walletItemId: {
            type: string;
            maxLength: number;
        };
        notificationId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        recipientEmail: {
            type: string;
            nullable: boolean;
        };
        recipientPhoneNumber: {
            type: string;
            nullable: boolean;
        };
        recipientFullName: {
            type: string;
            nullable: boolean;
        };
        subjectText: {
            type: string;
            nullable: boolean;
        };
        messageText: {
            type: string;
            nullable: boolean;
        };
        transferSlug: {
            type: string;
            nullable: boolean;
        };
        transferSecret: {
            type: string;
            nullable: boolean;
        };
        passwordHash: {
            type: string;
            nullable: boolean;
        };
        sendMethod: {
            type: string;
            description: string;
            nullable: boolean;
        };
        sendPlatform: {
            type: string;
            description: string;
            nullable: boolean;
        };
        sentAt: {
            type: string;
            description: string;
            format: string;
            nullable: boolean;
        };
        acceptedAt: {
            type: string;
            description: string;
            format: string;
            nullable: boolean;
        };
        declinedAt: {
            type: string;
            description: string;
            format: string;
            nullable: boolean;
        };
        canceledAt: {
            type: string;
            description: string;
            format: string;
            nullable: boolean;
        };
        archivedAt: {
            type: string;
            description: string;
            format: string;
            nullable: boolean;
        };
    };
    required: string[];
};
