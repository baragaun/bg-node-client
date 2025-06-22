export declare const UserInboxSchema: {
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
        userId: {
            type: string;
            maxLength: number;
        };
        channels: {
            type: string;
            properties: {
                userId: {
                    type: string;
                    maxLength: number;
                };
                unseenMessages: {
                    type: string;
                    nullable: boolean;
                };
                unseenSystemMessages: {
                    type: string;
                    nullable: boolean;
                };
                unseenArchivedMessages: {
                    type: string;
                    nullable: boolean;
                };
                latestMessages: {
                    type: string;
                    nullable: boolean;
                };
                latestArchivedMessages: {
                    type: string;
                    nullable: boolean;
                };
                pendingInvitations: {
                    type: string;
                    nullable: boolean;
                };
                invitations: {
                    type: string;
                    nullable: boolean;
                };
                itemIdHash: {
                    type: string;
                    description: string;
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
                channelsExceedMaxCount: {
                    type: string;
                    nullable: boolean;
                };
                invitationsExceedMaxCount: {
                    type: string;
                    nullable: boolean;
                };
                assumedMentorId: {
                    type: string;
                    maxLength: number;
                    nullable: boolean;
                };
                mm2Id: {
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
            nullable: boolean;
        };
    };
    required: string[];
};
