declare const fsdata: {
    findById: <T extends import("../types/models/Model.js").Model = import("../types/models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType) => Promise<T | null>;
    pollForUpdatedObject: <T extends import("../types/models/Model.js").Model = import("../types/models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType, options: import("../types/QueryOptions.js").QueryOptions) => Promise<T | null>;
    myUser: {
        findMyUser: () => Promise<import("../types/index.js").MyUser | null>;
        signInUser: (input: import("./gql/graphql.js").SignInUserInput) => Promise<import("./gql/graphql.js").UserAuthResponse>;
        signMeOut: () => Promise<void>;
        signUpUser: (input: import("./gql/graphql.js").SignUpUserInput) => Promise<import("./gql/graphql.js").UserAuthResponse>;
        updateMyUser: (changes: Partial<import("../types/index.js").MyUser>, queryOptions?: import("../types/QueryOptions.js").QueryOptions) => Promise<import("../types/index.js").MyUser | null>;
    };
    multiStepAction: {
        createMultiStepAction: (input: import("./gql/graphql.js").SidMultiStepActionInput) => Promise<import("../types/index.js").SidMultiStepActionProgress>;
        findMyActiveMultiStepActions: () => Promise<import("../types/index.js").SidMultiStepAction[] | null>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<import("../types/index.js").SidMultiStepActionProgress | null>;
        verifyMultiStepActionToken: (input: import("../types/index.js").VerifyMultiStepActionTokenInput) => Promise<import("../types/index.js").SidMultiStepActionProgress>;
    };
    user: {
        findUserById: () => Promise<import("../types/index.js").MyUser | null>;
    };
};
export default fsdata;
