export declare const ClientInfoSchema: {
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
        myUserId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        authToken: {
            type: string;
            nullable: boolean;
        };
        myUserDeviceUuid: {
            type: string;
            nullable: boolean;
        };
        signedOutUserId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        remoteContentStatus: {
            type: string;
            properties: {
                optionsUpdatedAt: {
                    type: string;
                    nullable: boolean;
                };
                myUserUpdatedAt: {
                    type: string;
                    nullable: boolean;
                };
                myUserInboxUpdatedAt: {
                    type: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        localContentStatus: {
            type: string;
            properties: {
                optionsUpdatedAt: {
                    type: string;
                    nullable: boolean;
                };
                myUserUpdatedAt: {
                    type: string;
                    nullable: boolean;
                };
                myUserInboxUpdatedAt: {
                    type: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        sessionStartedAt: {
            type: string;
            nullable: boolean;
        };
        sessionEndedAt: {
            type: string;
            nullable: boolean;
        };
    };
    required: string[];
};
