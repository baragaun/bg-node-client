declare const fsdata: {
    findById: <T extends import("../models/Model.js").Model = import("../models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType) => Promise<T | null>;
    pollForUpdatedObject: <T extends import("../models/Model.js").Model = import("../models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType, options: import("../index.js").QueryOptions) => Promise<T | null>;
    myUser: {
        deleteMyUser: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<void>;
        endMySession: () => Promise<void>;
        findAvailableUserHandle: (startValue: string) => Promise<string>;
        findMyUser: () => Promise<import("../index.js").MyUser | null>;
        isUserIdentAvailable: (userIdent: string, identType: import("../enums.js").UserIdentType) => Promise<boolean>;
        signInUser: (input: import("../index.js").SignInUserInput) => Promise<import("../index.js").UserAuthResponse>;
        signMeOut: () => Promise<void>;
        signUpUser: (input: import("../index.js").SignUpUserInput) => Promise<import("../index.js").UserAuthResponse>;
        startMySession: () => Promise<void>;
        startMySessionV2: () => Promise<import("../index.js").ContentStatus | null>;
        updateMyUser: (changes: import("./gql/graphql.js").MyUserInput, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").MutationResult<import("../index.js").MyUser>>;
    };
    multiStepAction: {
        createMultiStepAction: (input: import("./gql/graphql.js").SidMultiStepActionInput) => Promise<import("../index.js").SidMultiStepActionProgress>;
        findMyActiveMultiStepActions: () => Promise<import("../index.js").SidMultiStepAction[] | null>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<import("../index.js").SidMultiStepActionProgress | null>;
        sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: import("../enums.js").NotificationMethod) => Promise<string>;
        verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<import("../index.js").SidMultiStepActionProgress>;
    };
    user: {
        findUserById: () => Promise<import("../index.js").MyUser | null>;
    };
};
export default fsdata;
