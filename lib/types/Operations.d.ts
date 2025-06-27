import { MangoQuery } from 'rxdb';
import { ChannelInvitationDirection, DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient, ModelType, NotificationMethod, ReportUserReasonTextId, UserIdentType } from '../enums.js';
import { ChannelListItem } from './ChannelListItem.js';
import { FindChannelOptions, FindChannelResult } from './findChannelTypes.js';
import { FindObjectsOptions } from './FindObjectsOptions.js';
import { MangoQueryTypes } from './mangoQuery.js';
import { MultiStepActionListener } from './MultiStepActionListener.js';
import { MultiStepActionProgressResult } from './MultiStepActionProgressResult.js';
import { QueryOptions } from './QueryOptions.js';
import { QueryResult } from './QueryResult.js';
import { SignInInput } from './SignInInput.js';
import { SignInSignUpResponse } from './SignInSignUpResponse.js';
import { SignUpUserInput } from './SignUpUserInput.js';
import { ServiceRequest } from '../fsdata/gql/graphql.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../models/ChannelInvitationListFilter.js';
import { ChannelListFilter } from '../models/ChannelListFilter.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../models/ChannelMessageListFilter.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from '../models/ChannelParticipantListFilter.js';
import { GiftCardProduct } from '../models/GiftCardProduct.js';
import { GiftCardProductListFilter } from '../models/GiftCardProductListFilter.js';
import { Model } from '../models/Model.js';
import { MyUser } from '../models/MyUser.js';
import { MyUserChanges } from '../models/MyUserChanges.js';
import { ProductCategory } from '../models/ProductCategory.js';
import { ProductCategoryListFilter } from '../models/ProductCategoryListFilter.js';
import { PurchaseOrder } from '../models/PurchaseOrder.js';
import { PurchaseOrderInput } from '../models/PurchaseOrderInput.js';
import { PurchaseOrderListFilter } from '../models/PurchaseOrderListFilter.js';
import { ShoppingCart } from '../models/ShoppingCart.js';
import { ShoppingCartItem } from '../models/ShoppingCartItem.js';
import { SidMultiStepAction } from '../models/SidMultiStepAction.js';
import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';
import { User } from '../models/User.js';
import { UserInbox } from '../models/UserInbox.js';
import { UserListFilter } from '../models/UserListFilter.js';
import { UserListItem } from '../models/UserListItem.js';
import { Vendor } from '../models/Vendor.js';
import { VendorListFilter } from '../models/VendorListFilter.js';
import { Wallet } from '../models/Wallet.js';
export interface Operations {
    count: <T extends Model = Model>(query: MangoQuery<T> | null | undefined, match: Partial<T> | null | undefined, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<number>>;
    delete: (id: string, modelType: ModelType) => Promise<QueryResult<void>>;
    find: <T extends Model = Model>(query: MangoQuery<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    findByMatch: <T extends Model = Model>(match: Partial<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    findById: <T extends Model = Model>(id: string, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    findOne: <T extends Model = Model>(query: MangoQuery<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    findOneByMatch: <T extends Model = Model>(match: Partial<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    insertOne: <T extends Model = Model>(object: T, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    update: <T extends Model = Model>(changes: Partial<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    channel: {
        createChannel: (attributes: Partial<Channel>) => Promise<QueryResult<Channel>>;
        deleteChannel: (id: string) => Promise<QueryResult<void>>;
        findChannelById: (id: string, options: FindChannelOptions, queryOptions: QueryOptions) => Promise<FindChannelResult>;
        findChannels: (filter: ChannelListFilter, match: Partial<Channel>, selector: MangoQueryTypes<Channel> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
        findMyChannels: (participantLimit: number | undefined, addLatestMessage: boolean | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelListItem>>;
        findMyArchivedChannels: (filter: ChannelListFilter, match: Partial<Channel>, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
        isChannelArchivedForMe: (channel: Channel) => boolean;
        updateChannel: (changes: Partial<Channel>, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
    };
    channelInvitation: {
        acceptChannelInvitation: (id: string) => Promise<QueryResult<ChannelInvitation>>;
        createChannelInvitation: (attributes: Partial<ChannelInvitation>) => Promise<QueryResult<ChannelInvitation>>;
        declineChannelInvitation: (id: string, reasonTextId: DeclineChannelInvitationReasonTextIdFromClient) => Promise<QueryResult<ChannelInvitation>>;
        deleteChannelInvitation: (id: string) => Promise<QueryResult<void>>;
        findChannelInvitations: (filter: ChannelInvitationListFilter, match: Partial<ChannelInvitation>, selector: MangoQueryTypes<ChannelInvitation> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
        findChannelInvitationsForUser: (userId: string, onlyUnseen: boolean, onlyPending: boolean, direction: ChannelInvitationDirection, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
        updateChannelInvitation: (changes: Partial<ChannelInvitation>, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
    };
    channelMessage: {
        createChannelMessage: (attributes: Partial<ChannelMessage>) => Promise<QueryResult<ChannelMessage>>;
        deleteChannelMessage: (id: string) => Promise<QueryResult<void>>;
        findChannelMessages: (filter: ChannelMessageListFilter, match: Partial<ChannelMessage>, selector: MangoQueryTypes<ChannelMessage> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelMessage>>;
        updateChannelMessage: (changes: Partial<ChannelMessage>, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelMessage>>;
    };
    channelParticipant: {
        createChannelParticipant: (attributes: Partial<ChannelParticipant>) => Promise<QueryResult<ChannelParticipant>>;
        deleteChannelParticipant: (id: string) => Promise<QueryResult<void>>;
        findChannelParticipants: (filter: ChannelParticipantListFilter, match: Partial<ChannelParticipant>, selector: MangoQueryTypes<ChannelParticipant> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelParticipant>>;
        updateChannelParticipant: (changes: Partial<ChannelParticipant>, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelParticipant>>;
    };
    giftCardProduct: {
        findGiftCardProducts: (filter: GiftCardProductListFilter | null | undefined, match: Partial<GiftCardProduct> | null | undefined, selector: MangoQueryTypes<GiftCardProduct> | null | undefined, options: FindObjectsOptions, queryOptions: QueryOptions) => Promise<QueryResult<GiftCardProduct>>;
    };
    myUser: {
        blockUserForMe: (userId: string, reasonTextId: string | undefined, notes: string | undefined, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
        deleteMyUser: (cause: string | null | undefined, description: string | null | undefined) => Promise<QueryResult<void>>;
        endMySession: () => Promise<void>;
        findAvailableUserHandle: (startValue: string) => Promise<QueryResult<string>>;
        findMyInbox: (queryOptions?: QueryOptions) => Promise<QueryResult<UserInbox>>;
        findMyUser: (queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
        getSignedOutUserId: () => string | null;
        isCachedUserFresh: () => Promise<boolean>;
        isSessionActive: () => boolean;
        isUserIdentAvailable: (userIdent: string, identType: UserIdentType) => Promise<QueryResult<boolean>>;
        reportUserForMe: (userId: string, reasonTextId: ReportUserReasonTextId, messageText: string | undefined, queryOptions?: QueryOptions) => Promise<QueryResult<void>>;
        resetMyPassword: (userIdent: string, queryOptions?: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
        signInUser: (input: SignInInput) => Promise<QueryResult<SignInSignUpResponse>>;
        signInWithToken: (userIdent: string, queryOptions?: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
        signMeOut: () => Promise<QueryResult<void>>;
        signUpUser: (input: SignUpUserInput) => Promise<QueryResult<SignInSignUpResponse>>;
        startMySession: (pushNotificationToken: string | null | undefined) => Promise<void>;
        startMySessionV2: (pushNotificationToken: string | null | undefined, returnContentStatus: boolean) => Promise<void>;
        unblockUserForMe: (userId: string, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
        updateMyUser: (myUser: Partial<MyUserChanges>, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
        updateMyPassword: (oldPassword: string, newPassword: string, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
        verifyMyEmail: (email: string, queryOptions?: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
        verifyMyPassword: (password: string) => Promise<QueryResult<string>>;
    };
    multiStepAction: {
        abortMultiStepAction: (actionId: string) => boolean;
        addMultiStepActionListener: (actionId: string, listener: MultiStepActionListener) => string | null;
        findMyActiveMultiStepActions: () => Promise<QueryResult<SidMultiStepAction>>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined, queryOptions: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
        removeMultiStepActionListener: (actionId: string, id: string) => boolean;
        sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: NotificationMethod) => Promise<QueryResult<string>>;
        verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<QueryResult<SidMultiStepActionProgress>>;
    };
    productCategory: {
        findProductCategories: (filter: ProductCategoryListFilter | null | undefined, match: Partial<ProductCategory> | null | undefined, selector: MangoQueryTypes<ProductCategory> | null | undefined, options: FindObjectsOptions, queryOptions: QueryOptions) => Promise<QueryResult<ProductCategory>>;
    };
    purchaseOrder: {
        createPurchaseOrder: (props: PurchaseOrderInput) => Promise<QueryResult<ServiceRequest>>;
        findPurchaseOrders: (filter: PurchaseOrderListFilter | null | undefined, match: PurchaseOrderInput | null | undefined, selector: MangoQueryTypes<PurchaseOrderInput> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<PurchaseOrder>>;
    };
    shoppingCart: {
        findMyShoppingCart: (queryOptions?: QueryOptions) => Promise<QueryResult<ShoppingCart>>;
        emptyMyShoppingCart: (queryOptions?: QueryOptions) => Promise<QueryResult<void>>;
    };
    shoppingCartItem: {
        createShoppingCartItem: (props: Partial<ShoppingCartItem>) => Promise<QueryResult<ShoppingCartItem>>;
        deleteShoppingCartItem: (id: string, deletePhysically: boolean) => Promise<QueryResult<ServiceRequest>>;
        updateShoppingCartItem: (changes: Partial<ShoppingCartItem>, queryOptions?: QueryOptions) => Promise<QueryResult<ShoppingCartItem>>;
    };
    user: {
        findUserById: (id: string, queryOptions?: QueryOptions) => Promise<QueryResult<User>>;
        findUsers: (filter: UserListFilter | null | undefined, match: Partial<User> | null | undefined, selector: MangoQueryTypes<User> | null | undefined, options: FindObjectsOptions, queryOptions: QueryOptions) => Promise<QueryResult<UserListItem>>;
    };
    vendor: {
        findVendors: (filter: VendorListFilter | null | undefined, match: Partial<Vendor> | null | undefined, selector: MangoQueryTypes<Vendor> | null | undefined, options: FindObjectsOptions, queryOptions: QueryOptions) => Promise<QueryResult<Vendor>>;
    };
    wallet: {
        findMyWallet: (queryOptions?: QueryOptions) => Promise<QueryResult<Wallet>>;
    };
}
