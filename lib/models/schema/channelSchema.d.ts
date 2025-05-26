export declare const ChannelSchema: {
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
        name: {
            type: string;
        };
        topic: {
            type: string;
        };
        description: {
            type: string;
        };
        tags: {
            type: string;
            items: {
                type: string;
            };
        };
        channelType: {
            type: string;
            enum: string[];
            enumType: string;
        };
        statuses: {
            type: string;
            items: {
                type: string;
            };
            properties: {
                userId: {
                    type: string;
                    maxLength: number;
                };
                archivedAt: {
                    type: string;
                    format: string;
                };
            };
        };
        userIds: {
            type: string;
            items: {
                type: string;
            };
            maxLength: number;
        };
        otherUserId: {
            type: string;
            description: string;
            maxLength: number;
        };
        pausedAt: {
            type: string;
            format: string;
        };
        pausedBy: {
            type: string;
            maxLength: number;
        };
        suspendedAt: {
            type: string;
            format: string;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
        };
        lockedAt: {
            type: string;
            format: string;
        };
        lockedBy: {
            type: string;
            maxLength: number;
        };
        archivedAt: {
            type: string;
            format: string;
        };
        archivedBy: {
            type: string;
            maxLength: number;
        };
        assumedMentorId: {
            type: string;
            maxLength: number;
        };
        mm2Id: {
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
