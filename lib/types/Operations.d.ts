import { ModelType, NotificationMethod, ReportUserReasonTextId, UserIdentType as UserIdentTypeFromClient } from '../enums.js';
import { MultiStepActionListener } from './MultiStepActionListener.js';
import { MultiStepActionProgressResult } from './MultiStepActionProgressResult.js';
import { MutationResult } from './MutationResult.js';
import { QueryOptions } from './QueryOptions.js';
import { QueryResult } from './QueryResult.js';
import { SignInInput } from './SignInInput.js';
import { SignInSignUpResponse } from './SignInSignUpResponse.js';
import { SignUpUserInput } from './SignUpUserInput.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../models/ChannelInvitationListFilter.js';
import { ChannelListFilter } from '../models/ChannelListFilter.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../models/ChannelMessageListFilter.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from '../models/ChannelParticipantListFilter.js';
import { Model } from '../models/Model.js';
import { MyUser } from '../models/MyUser.js';
import { SidMultiStepAction } from '../models/SidMultiStepAction.js';
import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';
import { User } from '../models/User.js';
export interface Operations {
    findById: <T extends Model = Model>(id: string, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    findOne: <T extends Model = Model>(match: Partial<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    insertOne: <T extends Model = Model>(object: T) => Promise<MutationResult<T>>;
    updateLocalObject: <T extends Model = Model>(id: string, object: T | null | undefined, modelType: ModelType, options: QueryOptions) => Promise<T | null>;
    channel: {
        createChannel: (attributes: Partial<Channel>) => Promise<MutationResult<Channel>>;
        createMockChannel: (attributes: Partial<Channel>, userCount: number, messageCount: number, users?: User[], messages?: ChannelMessage[]) => {
            channel: Channel;
            messages: ChannelMessage[];
            users: User[];
        };
        deleteChannel: (id: string) => Promise<MutationResult<Channel>>;
        findChannels: (filter: ChannelListFilter, match: Partial<Channel>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
        updateChannel: (changes: Partial<Channel>) => Promise<MutationResult<Channel>>;
    };
    channelInvitation: {
        createChannelInvitation: (attributes: Partial<ChannelInvitation>) => Promise<MutationResult<ChannelInvitation>>;
        deleteChannelInvitation: (id: string) => Promise<MutationResult<ChannelInvitation>>;
        findChannelInvitations: (filter: ChannelInvitationListFilter, match: Partial<ChannelInvitation>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
        updateChannelInvitation: (changes: Partial<ChannelInvitation>) => Promise<MutationResult<ChannelInvitation>>;
    };
    channelMessage: {
        createChannelMessage: (attributes: Partial<ChannelMessage>) => Promise<MutationResult<ChannelMessage>>;
        deleteChannelMessage: (id: string) => Promise<MutationResult<ChannelMessage>>;
        findChannelMessages: (filter: ChannelMessageListFilter, match: Partial<ChannelMessage>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelMessage>>;
        updateChannelMessage: (changes: Partial<ChannelMessage>) => Promise<MutationResult<ChannelMessage>>;
    };
    channelParticipant: {
        createChannelParticipant: (attributes: Partial<ChannelParticipant>) => Promise<MutationResult<ChannelParticipant>>;
        deleteChannelParticipant: (id: string) => Promise<MutationResult<ChannelParticipant>>;
        findChannelParticipants: (filter: ChannelParticipantListFilter, match: Partial<ChannelParticipant>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelParticipant>>;
        updateChannelParticipant: (changes: Partial<ChannelParticipant>) => Promise<MutationResult<ChannelParticipant>>;
    };
    myUser: {
        blockUserForMe: (userId: string, reasonTextId: string | undefined, notes: string | undefined, queryOptions: QueryOptions | undefined) => Promise<MutationResult<MyUser>>;
        deleteMyUser: (cause: string | null | undefined, description: string | null | undefined, deletePhysically: boolean) => Promise<MutationResult<null>>;
        endMySession: () => Promise<void>;
        findAvailableUserHandle: (startValue: string) => Promise<string>;
        findMyUser: (queryOptions?: QueryOptions) => Promise<MyUser | null>;
        getSignedOutUserId: () => Promise<string | null>;
        isSessionActive: () => boolean;
        isSignedIn: () => boolean;
        isUserIdentAvailable: (userIdent: string, identType: UserIdentTypeFromClient) => Promise<boolean>;
        reportUserForMe: (userId: string, reasonTextId: ReportUserReasonTextId, messageText: string | undefined, queryOptions: QueryOptions | undefined) => Promise<MutationResult<void>>;
        resetMyPassword: (userIdent: string, queryOptions: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
        signInUser: (input: SignInInput) => Promise<MutationResult<SignInSignUpResponse>>;
        signInWithToken: (userIdent: string, queryOptions: QueryOptions | undefined) => Promise<MutationResult<MultiStepActionProgressResult>>;
        signMeOut: () => Promise<MutationResult<null>>;
        signUpUser: (input: SignUpUserInput) => Promise<MutationResult<SignInSignUpResponse>>;
        startMySession: () => Promise<void>;
        startMySessionV2: () => Promise<void>;
        unblockUserForMe: (userId: string, queryOptions: QueryOptions | undefined) => Promise<MutationResult<MyUser>>;
        updateMyUser: (myUser: Partial<MyUser>, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser>>;
        updateMyPassword: (oldPassword: string, newPassword: string, queryOptions: QueryOptions) => Promise<MutationResult<MyUser>>;
        verifyMyEmail: (email: string, queryOptions: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
    };
    multiStepAction: {
        abortMultiStepAction: (actionId: string) => boolean;
        addMultiStepActionListener: (actionId: string, listener: MultiStepActionListener) => string | null;
        findMyActiveMultiStepActions: () => Promise<SidMultiStepAction[]>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined, queryOptions: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
        removeMultiStepActionListener: (actionId: string, id: string) => boolean;
        sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: NotificationMethod) => Promise<MutationResult<string>>;
        verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<QueryResult<SidMultiStepActionProgress>>;
    };
}
