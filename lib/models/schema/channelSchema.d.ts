export declare const ChannelSchema: {
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
                channelInvitationAccepted: {
                    type: string;
                    nullable: boolean;
                };
                messagesSentByCreatorCount: {
                    type: string;
                    nullable: boolean;
                };
                messagesSentByFirstParticipantCount: {
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
        name: {
            type: string;
            nullable: boolean;
        };
        topic: {
            type: string;
            nullable: boolean;
        };
        description: {
            type: string;
            nullable: boolean;
        };
        tags: {
            type: string;
            items: {
                type: string;
            };
            nullable: boolean;
        };
        channelType: {
            type: string;
            enum: string[];
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
                    archivedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                };
            };
            nullable: boolean;
        };
        userIds: {
            type: string;
            items: {
                type: string;
                maxLength: number;
            };
            nullable: boolean;
        };
        otherUserId: {
            type: string;
            description: string;
            maxLength: number;
            nullable: boolean;
        };
        syncedToAnalyticsAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        pausedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        pausedBy: {
            type: string;
            maxLength: number;
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
        lockedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        lockedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        archivedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        archivedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
    };
    required: string[];
};
