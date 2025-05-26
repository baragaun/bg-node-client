export declare const UserPreferencesSchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        shareEmail: {
            type: string;
        };
        sharePhoneNumber: {
            type: string;
        };
        showWelcomeMessage: {
            type: string;
        };
        notificationOptions: {
            type: string;
        };
    };
    required: string[];
};
