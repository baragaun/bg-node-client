declare const fsdata: {
    create: <T extends import("../index.js").BaseModel = import("../index.js").BaseModel>(props: Partial<T>, modelType: import("../enums.js").ModelType) => Promise<import("../index.js").QueryResult<T>>;
    delete: (id: string, modelType: import("../enums.js").ModelType, deletePhysically: boolean, _queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<import("../index.js").ServiceRequest>>;
    findById: <T extends import("../models/Model.js").Model = import("../models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType, selections?: any) => Promise<import("../index.js").QueryResult<T>>;
    pollForUpdatedObject: <T extends import("../models/Model.js").Model = import("../models/Model.js").Model>(id: string, modelType: import("../enums.js").ModelType, options: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<T>>;
    update: <T extends import("../models/Model.js").Model = import("../models/Model.js").Model>(changes: Partial<T>, modelType: import("../enums.js").ModelType, queryOptions?: import("../index.js").QueryOptions<T>) => Promise<import("../index.js").QueryResult<T>>;
    channel: {
        createChannel: (props: Partial<import("../index.js").Channel>) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
        findChannelById: (channelId: string) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
        findChannels: (filter: import("../index.js").ChannelListFilter | null | undefined, match: Partial<import("../index.js").Channel> | null | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
        findMyChannels: (participantLimit: number | undefined, addLatestMessage: boolean | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelListItem>>;
        updateChannel: (changes: Partial<import("../index.js").Channel>, queryOptions?: import("../index.js").QueryOptions<import("../index.js").Channel>) => Promise<import("../index.js").QueryResult<import("../index.js").Channel>>;
    };
    channelInvitation: {
        acceptChannelInvitation: (channelInvitationId: string, queryOptions?: import("../index.js").QueryOptions<import("../index.js").ChannelInvitation>) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelInvitation>>;
        createChannelInvitation: (props: Partial<import("../index.js").ChannelInvitation>) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelInvitation>>;
        declineChannelInvitation: (channelInvitationId: string, reasonTextId: import("../enums.js").DeclineChannelInvitationReasonTextId, queryOptions?: import("../index.js").QueryOptions<import("../index.js").ChannelInvitation>) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelInvitation>>;
        findChannelInvitations: (_filter: import("../index.js").ChannelInvitationListFilter, _match: Partial<import("../index.js").ChannelInvitation>, _options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelInvitation>>;
        findChannelInvitationsForUser: (userId: string, onlyUnseen: boolean, onlyPending: boolean, direction: import("../enums.js").ChannelInvitationDirection, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelInvitation>>;
        updateChannelInvitation: (changes: Partial<import("../index.js").ChannelInvitation>, queryOptions?: import("../index.js").QueryOptions<import("../index.js").ChannelInvitation>) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelInvitation>>;
    };
    channelMessage: {
        createChannelMessage: (props: Partial<import("../index.js").ChannelMessage>) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelMessage>>;
        findChannelMessages: (filter: import("../index.js").ChannelMessageListFilter | undefined, match: Partial<import("../index.js").ChannelMessage> | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelMessage>>;
        updateChannelMessage: (changes: Partial<import("../index.js").ChannelMessage>, queryOptions?: import("../index.js").QueryOptions<import("../index.js").ChannelMessage>) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelMessage>>;
    };
    channelParticipant: {
        findChannelParticipants: (filter: import("./gql/graphql.js").ChannelParticipantListFilter | undefined, match: import("./gql/graphql.js").ChannelParticipantInput | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").ChannelParticipant>>;
    };
    giftCardProduct: {
        findGiftCardProducts: (filter: import("../index.js").GiftCardProductListFilter | null | undefined, match: Partial<import("../index.js").GiftCardProduct> | null | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").GiftCardProduct>>;
    };
    myUser: {
        blockUserForMe: (userId: string, reasonTextId: string | undefined, notes: string | undefined, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
        deleteMyUser: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<import("../index.js").QueryResult<void>>;
        endMySession: () => Promise<import("../index.js").QueryResult<void>>;
        findAvailableUserHandle: (startValue: string) => Promise<import("../index.js").QueryResult<string>>;
        findMyInbox: () => Promise<import("../index.js").QueryResult<import("../models/UserInbox.js").UserInbox>>;
        findMyUser: () => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
        isUserIdentAvailable: (userIdent: string, identType: import("../enums.js").UserIdentType) => Promise<import("../index.js").QueryResult<boolean>>;
        reportUser: (userId: string, reasonTextId: import("./gql/graphql.js").ReportUserReasonTextId, messageText: string | undefined, _queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<void>>;
        signInUser: (input: import("../index.js").SignInUserInput) => Promise<import("../index.js").QueryResult<import("../index.js").UserAuthResponse>>;
        signMeOut: () => Promise<import("../index.js").QueryResult<void>>;
        signUpUser: (input: import("../index.js").SignUpUserInput) => Promise<import("../index.js").QueryResult<import("../index.js").UserAuthResponse>>;
        startMySession: (pushNotificationToken: string | null | undefined) => Promise<import("../index.js").QueryResult<void>>;
        startMySessionV2: (pushNotificationToken: string | null | undefined, returnContentStatus: boolean) => Promise<import("../index.js").QueryResult<import("../index.js").ContentStatus>>;
        unblockUserForMe: (userId: string, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
        updateMyUser: (changes: Partial<import("../index.js").MyUserChanges>, queryOptions?: import("../index.js").QueryOptions) => Promise<import("../index.js").QueryResult<import("../index.js").MyUser>>;
        verifyMyPassword: (password: string) => Promise<import("../index.js").QueryResult<string>>;
    };
    multiStepAction: {
        createMultiStepAction: (input: import("./gql/graphql.js").SidMultiStepActionInput) => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepActionProgress>>;
        findMyActiveMultiStepActions: () => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepAction>>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepActionProgress>>;
        sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: import("../enums.js").NotificationMethod) => Promise<import("../index.js").QueryResult<string>>;
        verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<import("../index.js").QueryResult<import("../index.js").SidMultiStepActionProgress>>;
    };
    productCategory: {
        findProductCategories: (filter: import("../index.js").ProductCategoryListFilter | null | undefined, match: Partial<import("../index.js").ProductCategory> | null | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").ProductCategory>>;
    };
    purchaseOrder: {
        createPurchaseOrder: (props: Partial<import("../index.js").PurchaseOrder>) => Promise<import("../index.js").QueryResult<import("../index.js").PurchaseOrder>>;
        findPurchaseOrders: (filter: import("../index.js").PurchaseOrderListFilter | null | undefined, match: Partial<import("../index.js").PurchaseOrder> | null | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").PurchaseOrder>>;
    };
    shoppingCart: {
        findMyShoppingCart: () => Promise<import("../index.js").QueryResult<import("../index.js").ShoppingCart>>;
        clearMyShoppingCart: () => Promise<import("../index.js").QueryResult<import("../index.js").ServiceRequest>>;
    };
    shoppingCartItem: {
        createShoppingCartItem: (props: Partial<import("../index.js").ShoppingCartItem>) => Promise<import("../index.js").QueryResult<import("../index.js").ShoppingCartItem>>;
        deleteShoppingCartItem: (id: string, deletePhysically: boolean) => Promise<import("../index.js").QueryResult<import("../index.js").ServiceRequest>>;
        updateShoppingCartItem: (changes: Partial<import("../index.js").ShoppingCartItem>, queryOptions?: import("../index.js").QueryOptions<import("../index.js").ShoppingCartItem>) => Promise<import("../index.js").QueryResult<import("../index.js").ShoppingCartItem>>;
    };
    user: {
        findUserById: (userId: string) => Promise<import("../index.js").QueryResult<import("../index.js").User>>;
        findUsers: (filter: import("./gql/graphql.js").UserListFilter | null | undefined, match: Partial<import("../index.js").User> | null | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").UserListItem>>;
    };
    brand: {
        findBrands: (filter: import("../index.js").BrandListFilter | null | undefined, match: Partial<import("../index.js").Brand> | null | undefined, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").Brand>>;
    };
    wallet: {
        findMyWallet: () => Promise<import("../index.js").QueryResult<import("../index.js").Wallet>>;
    };
    walletItem: {
        findWalletItems: (filter: import("../index.js").WalletItemListFilter, match: Partial<import("../index.js").WalletItem>, options: import("../types/FindObjectsOptions.js").FindObjectsOptions) => Promise<import("../index.js").QueryResult<import("../index.js").WalletItem>>;
        updateWalletItem: (changes: Partial<import("../index.js").WalletItem>, queryOptions?: import("../index.js").QueryOptions<import("../index.js").WalletItem>) => Promise<import("../index.js").QueryResult<import("../index.js").WalletItem>>;
    };
};
export default fsdata;
