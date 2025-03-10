import { ModelType } from '../enums.js';
import { SidMultiStepActionProgress, VerifyMultiStepActionTokenInput } from '../fsdata/gql/graphql.js';
import { Model } from './Model.js';
import { BaseModel } from './models/BaseModel.js';
import { Channel } from './models/Channel.js';
import { ChannelInvitation } from './models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from './models/ChannelInvitationListFilter.js';
import { ChannelListFilter } from './models/ChannelListFilter.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { ChannelMessageListFilter } from './models/ChannelMessageListFilter.js';
import { ChannelParticipant } from './models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from './models/ChannelParticipantListFilter.js';
import { MyUser } from './models/MyUser.js';
import { SidMultiStepAction } from './models/SidMultiStepAction.js';
import { User } from './models/User.js';
import { MutationResult } from './MutationResult.js';
import { QueryOptions } from './QueryOptions.js';
import { QueryResult } from './QueryResult.js';
import { SignInInput } from './SignInInput.js';
import { SignInSignUpResponse } from './SignInSignUpResponse.js';
import { SignUpInput } from './SignUpInput.js';
export interface Operations {
    findById: <T extends Model = Model>(id: string, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    findOne: <T extends Model = Model>(match: Partial<T>, modelType: ModelType, queryOptions?: QueryOptions) => Promise<QueryResult<T>>;
    insertOne: <T extends Model>(object: T) => Promise<MutationResult<T>>;
    updateLocalObject: <T extends BaseModel = BaseModel>(id: string, object: T | null | undefined, modelType: ModelType, options: QueryOptions) => Promise<T | null>;
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
        getSignedOutUserId: () => Promise<string | null>;
        findMyUser: (queryOptions?: QueryOptions) => Promise<MyUser | null>;
        signInUser: (input: SignInInput) => Promise<MutationResult<SignInSignUpResponse>>;
        signMeOut: () => Promise<MutationResult>;
        signUpUser: (input: SignUpInput) => Promise<MutationResult<SignInSignUpResponse>>;
        verifyEmail: (userId: string, email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
        signInWithToken: (email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
        updateMyUser: (myUser: Partial<MyUser>, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser | null>>;
    };
    multiStepAction: {
        findMyActiveMultiStepActions: () => Promise<SidMultiStepAction[]>;
        getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<SidMultiStepActionProgress | null>;
        verifyMultiStepActionToken: (input: VerifyMultiStepActionTokenInput) => Promise<MutationResult<SidMultiStepActionProgress>>;
    };
}
