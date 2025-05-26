export declare const ClientInfoSchema: {
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
        myUserId: {
            type: string;
            maxLength: number;
        };
        authToken: {
            type: string;
        };
        myUserDeviceUuid: {
            type: string;
        };
        signedOutUserId: {
            type: string;
            maxLength: number;
        };
        remoteContentStatus: {
            type: string;
            properties: {
                optionsUpdatedAt: {
                    type: string;
                };
                myUserUpdatedAt: {
                    type: string;
                };
                myUserInboxUpdatedAt: {
                    type: string;
                };
            };
        };
        localContentStatus: {
            type: string;
            properties: {
                optionsUpdatedAt: {
                    type: string;
                };
                myUserUpdatedAt: {
                    type: string;
                };
                myUserInboxUpdatedAt: {
                    type: string;
                };
            };
        };
        sessionStartedAt: {
            type: string;
        };
        sessionEndedAt: {
            type: string;
        };
    };
    required: string[];
};
