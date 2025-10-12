export declare const ChannelParticipantSchema: {
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
        channelId: {
            type: string;
            maxLength: number;
        };
        userId: {
            type: string;
            maxLength: number;
        };
        userInfo: {
            type: string;
            properties: {
                userHandle: {
                    type: string;
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
                avatarUrl: {
                    type: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        invitedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        channelName: {
            type: string;
            nullable: boolean;
        };
        role: {
            type: string;
            enum: string[];
            nullable: boolean;
        };
        lastReceivedSeq: {
            type: string;
            description: string;
        };
        lastSeenSeq: {
            type: string;
            description: string;
        };
        channelArchivedAt: {
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
