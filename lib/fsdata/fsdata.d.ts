declare const fsdata: {
    pollForUpdatedObject: <T extends import("../types/index.js").BaseModel = import("../types/index.js").BaseModel>(modelType: import("../enums.js").ModelType, id: string, options: import("../types/QueryOptions.js").QueryOptions) => Promise<T | null>;
    findById: <T extends import("../types/index.js").BaseModel = import("../types/index.js").BaseModel>(id: string, modelType: import("../enums.js").ModelType) => Promise<T | null>;
    myUser: {
        signInUser: (input: import("./gql/graphql.js").SignInUserInput) => Promise<import("./gql/graphql.js").UserAuthResponse>;
        signMeOut: () => Promise<void>;
        signUpUser: (input: import("./gql/graphql.js").SignUpUserInput) => Promise<import("./gql/graphql.js").UserAuthResponse>;
        startVerifyEmail: (input: string) => Promise<import("./gql/graphql.js").SidMultiStepActionProgress>;
        verifyMultiStepActionToken: (input: import("./gql/graphql.js").VerifyMultiStepActionTokenInput) => Promise<import("./gql/graphql.js").SidMultiStepActionProgress>;
        findMyUser: () => Promise<import("../types/index.js").MyUser | null>;
        updateMyUser: () => Promise<import("../types/index.js").MyUser | null>;
    };
    user: {
        findUserById: () => Promise<import("../types/index.js").MyUser | null>;
    };
};
export default fsdata;
