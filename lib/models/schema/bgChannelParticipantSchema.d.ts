export declare const BgChannelParticipantSchema: {
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
            properties: {
                userHandle: {
                    type: string;
                };
                firstName: {
                    type: string;
                };
                lastName: {
                    type: string;
                };
                avatarUrl: {
                    type: string;
                };
            };
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
        channelId: {
            type: string;
            maxLength: number;
        };
        userId: {
            type: string;
            maxLength: number;
        };
        invitedBy: {
            type: string;
            maxLength: number;
        };
        channelName: {
            type: string;
        };
        role: {};
        suspendedAt: {
            type: string;
            format: string;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
        };
    };
    required: string[];
};
