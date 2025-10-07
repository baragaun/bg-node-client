export declare const ChannelMessageSchema: {
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
                senderUserHandle: {
                    type: string;
                    nullable: boolean;
                };
                senderFirstName: {
                    type: string;
                    nullable: boolean;
                };
                senderLastName: {
                    type: string;
                    nullable: boolean;
                };
                senderAvatarUrl: {
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
        channelId: {
            type: string;
            maxLength: number;
        };
        replyToMessageId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        channelMessageType: {
            type: string;
            enum: string[];
            nullable: boolean;
        };
        messageText: {
            type: string;
            nullable: boolean;
        };
        statuses: {
            type: string;
            items: {
                type: string;
                properties: {
                    userId: {
                        type: string;
                        maxLength: number;
                    };
                    isInArchivedChannel: {
                        type: string;
                        nullable: boolean;
                    };
                    receivedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    seenAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                };
            };
            nullable: boolean;
        };
        editedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        suspendedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
    };
    required: string[];
};
