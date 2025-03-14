declare const fsdata: {
    findById: <T extends import("../types/models/Model.js").Model = import("../types/models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType) => Promise<T | null>;
    pollForUpdatedObject: <T extends import("../types/models/Model.js").Model = import("../types/models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType, options: import("../types/QueryOptions.js").QueryOptions) => Promise<T | null>;
    myUser: {
        deleteMyUser: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<void>;
        findAvailableUserHandle: (startValue: string) => Promise<string>;
        findMyUser: () => Promise<import("../types/index.js").MyUser | null>;
        isUserIdentAvailable: (userIdent: string, identType: import("../enums.js").UserIdentType) => Promise<boolean>;
        signInUser: (input: import("../types/SignInUserInput.js").SignInUserInput) => Promise<import("../types/UserAuthResponse.js").UserAuthResponse>;
        signMeOut: () => Promise<void>;
        signUpUser: (input: import("../types/SignUpUserInput.js").SignUpUserInput) => Promise<import("../types/UserAuthResponse.js").UserAuthResponse>;
        updateMyUser: (changes: Partial<import("../types/index.js").MyUser>, queryOptions?: import("../types/QueryOptions.js").QueryOptions) => Promise<import("../types/index.js").MyUser | null>;
    };
    multiStepAction: {
        createMultiStepAction: (input: import("./gql/graphql.js").SidMultiStepActionInput) => Promise<import("../types/index.js").SidMultiStepActionProgress>;
        findMyActiveMultiStepActions: () => Promise<import("../types/index.js").SidMultiStepAction[] | null>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<import("../types/index.js").SidMultiStepActionProgress | null>;
        verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<import("../types/index.js").SidMultiStepActionProgress>;
    };
    user: {
        findUserById: () => Promise<import("../types/index.js").MyUser | null>;
    };
};
export default fsdata;
