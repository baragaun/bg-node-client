declare const fsdata: {
    findById: <T extends import("../models/Model.js").Model = import("../models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType) => Promise<import("../index.js").QueryResult<T>>;
    pollForUpdatedObject: <T extends import("../models/Model.js").Model = import("../models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType, options: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<T>>;
    channel: {
        createChannel: (input: import("./gql/graphql.js").ChannelInput) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
        findChannels: (filter: import("./gql/graphql.js").ChannelListFilter | undefined, match: Partial<import("../index.js").Channel> | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
        findMyChannels: (options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
    };
    channelInvitation: {
        acceptChannelInvitation: (channelInvitationId: string) => Promise<import("../index.js").QueryResult<void>>;
        createChannelInvitation: (input: import("./gql/graphql.js").ChannelInvitationInput) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelInvitation>>;
        declineChannelInvitation: (channelInvitationId: string, reasonTextId: import("../enums.js").DeclineChannelInvitationReasonTextId) => Promise<import("../index.js").QueryResult<void>>;
        findChannelInvitationsForUser: (userId: string, onlyUnseen: boolean, onlyPending: boolean, direction: import("../enums.js").ChannelInvitationDirection, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
    };
    channelMessage: {
        createChannelMessage: (input: import("./gql/graphql.js").ChannelMessageInput) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelMessage>>;
        findChannelMessages: (filter: import("./gql/graphql.js").ChannelListFilter | undefined, match: import("./gql/graphql.js").ChannelInput | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
    };
    myUser: {
        blockUserForMe: (userId: string, reasonTextId: string | undefined, notes: string | undefined, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
        deleteMyUser: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<import("../index.js").QueryResult<void>>;
        endMySession: () => Promise<import("../index.js").QueryResult<void>>;
        findAvailableUserHandle: (startValue: string) => Promise<import("../index.js").QueryResult<string>>;
        findMyUser: () => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
        isUserIdentAvailable: (userIdent: string, identType: import("../enums.js").UserIdentType) => Promise<import("../index.js").QueryResult<boolean>>;
        reportUser: (userId: string, reasonTextId: import("./gql/graphql.js").ReportUserReasonTextId, messageText: string | undefined, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<void>>;
        signInUser: (input: import("../index.js").SignInUserInput) => Promise<import("../index.js").QueryResult<import("../index.js").UserAuthResponse>>;
        signMeOut: () => Promise<import("../index.js").QueryResult<void>>;
        signUpUser: (input: import("../index.js").SignUpUserInput) => Promise<import("../index.js").QueryResult<import("../index.js").UserAuthResponse>>;
        startMySession: () => Promise<import("../index.js").QueryResult<void>>;
        startMySessionV2: () => Promise<import("../index.js").QueryResult<import("../index.js").ContentStatus>>;
        unblockUserForMe: (userId: string, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
        updateMyUser: (changes: import("./gql/graphql.js").MyUserInput, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
    };
    multiStepAction: {
        createMultiStepAction: (input: import("./gql/graphql.js").SidMultiStepActionInput) => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepActionProgress>>;
        findMyActiveMultiStepActions: () => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepAction>>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepActionProgress>>;
        sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: import("../enums.js").NotificationMethod) => Promise<import("../index.js").QueryResult<string>>;
        verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepActionProgress>>;
    };
    user: {
        findUserById: (userId: string, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").User>>;
    };
};
export default fsdata;
