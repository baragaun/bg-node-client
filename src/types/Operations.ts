import {
  ChannelInvitationDirection,
  DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient,
  ModelType,
  NotificationMethod,
  ReportUserReasonTextId,
  UserIdentType,
} from '../enums.js';
import { FindObjectsOptions } from './FindObjectsOptions.js';
import { MultiStepActionListener } from './MultiStepActionListener.js';
import { MultiStepActionProgressResult } from './MultiStepActionProgressResult.js';
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
import { MyUserChanges } from '../models/MyUserChanges.js';
import { SidMultiStepAction } from '../models/SidMultiStepAction.js';
import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';

export interface Operations {
  count: <T extends Model = Model>(
    match: Partial<T>,
    modelType: ModelType,
    queryOptions?: QueryOptions,
  ) => Promise<QueryResult<number>>

  findById: <T extends Model = Model>(
    id: string,
    modelType: ModelType,
    queryOptions?: QueryOptions,
  ) => Promise<QueryResult<T>>;

  findOne: <T extends Model = Model>(
    match: Partial<T>,
    modelType: ModelType,
    queryOptions?: QueryOptions,
  ) => Promise<QueryResult<T>>;

  insertOne: <T extends Model = Model>(object: T) => Promise<QueryResult<T>>;

  update: <T extends Model = Model>(
    changes: Partial<T>,
    modelType: ModelType,
    queryOptions?: QueryOptions,
  ) => Promise<QueryResult<T>>;

  channel: {
    createChannel: (
      attributes: Partial<Channel>,
    ) => Promise<QueryResult<Channel>>;

    deleteChannel: (id: string) => Promise<QueryResult<Channel>>;

    findChannels: (
      filter: ChannelListFilter,
      match: Partial<Channel>,
      options: FindObjectsOptions,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<Channel>>;

    findMyChannels: (
      filter: ChannelListFilter,
      match: Partial<Channel>,
      options: FindObjectsOptions,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<Channel>>;

    updateChannel: (
      changes: Partial<Channel>,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<Channel>>;
  };

  channelInvitation: {
    acceptChannelInvitation: (
      id: string,
    ) => Promise<QueryResult<ChannelInvitation>>

    createChannelInvitation: (
      attributes: Partial<ChannelInvitation>,
    ) => Promise<QueryResult<ChannelInvitation>>;

    declineChannelInvitation: (
      id: string,
      reasonTextId: DeclineChannelInvitationReasonTextIdFromClient,
    ) => Promise<QueryResult<ChannelInvitation>>

    deleteChannelInvitation: (
      id: string,
    ) => Promise<QueryResult<ChannelInvitation>>;

    findChannelInvitations: (
      filter: ChannelInvitationListFilter,
      match: Partial<ChannelInvitation>,
      options: FindObjectsOptions,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<ChannelInvitation>>;

    findChannelInvitationsForUser: (
      userId: string,
      onlyUnseen: boolean,
      onlyPending: boolean,
      direction: ChannelInvitationDirection,
      options: FindObjectsOptions,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<ChannelInvitation>>

    updateChannelInvitation: (
      changes: Partial<ChannelInvitation>,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<ChannelInvitation>>;
  };

  channelMessage: {
    createChannelMessage: (
      attributes: Partial<ChannelMessage>,
    ) => Promise<QueryResult<ChannelMessage>>;

    deleteChannelMessage: (
      id: string,
    ) => Promise<QueryResult<ChannelMessage>>;

    findChannelMessages: (
      filter: ChannelMessageListFilter,
      match: Partial<ChannelMessage>,
      options: FindObjectsOptions,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<ChannelMessage>>;

    updateChannelMessage: (
      changes: Partial<ChannelMessage>,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<ChannelMessage>>;
  };

  channelParticipant: {
    createChannelParticipant: (
      attributes: Partial<ChannelParticipant>,
    ) => Promise<QueryResult<ChannelParticipant>>;

    deleteChannelParticipant: (
      id: string,
    ) => Promise<QueryResult<ChannelParticipant>>;

    findChannelParticipants: (
      filter: ChannelParticipantListFilter,
      match: Partial<ChannelParticipant>,
      options: FindObjectsOptions,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<ChannelParticipant>>;

    updateChannelParticipant: (
      changes: Partial<ChannelParticipant>,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<ChannelParticipant>>;
  };

  myUser: {
    blockUserForMe: (
      userId: string,
      reasonTextId: string | undefined,
      notes: string | undefined,
      queryOptions: QueryOptions | undefined,
    ) => Promise<QueryResult<MyUser>>

    deleteMyUser: (
      cause: string | null | undefined,
      description: string | null | undefined,
      deletePhysically: boolean,
    ) => Promise<QueryResult<void>>;

    endMySession: () => Promise<void>;
    findAvailableUserHandle: (startValue: string) => Promise<QueryResult<string>>;
    findMyUser: (queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
    getSignedOutUserId: () => string | null;
    isCachedUserFresh: () => Promise<boolean>;
    isSessionActive: () => boolean;

    isUserIdentAvailable: (
      userIdent: string,
      identType: UserIdentType,
    ) => Promise<QueryResult<boolean>>;

    reportUserForMe: (
      userId: string,
      reasonTextId: ReportUserReasonTextId,
      messageText: string | undefined,
      queryOptions: QueryOptions | undefined,
    ) => Promise<QueryResult<void>>

    resetMyPassword: (
      userIdent: string,
      queryOptions: QueryOptions,
    ) => Promise<QueryResult<MultiStepActionProgressResult>>;

    signInUser: (
      input: SignInInput,
    ) => Promise<QueryResult<SignInSignUpResponse>>;

    signInWithToken: (
      userIdent: string,
      queryOptions?: QueryOptions | undefined,
    ) => Promise<QueryResult<MultiStepActionProgressResult>>;

    signMeOut: () => Promise<QueryResult<void>>;
    signUpUser: (
      input: SignUpUserInput,
    ) => Promise<QueryResult<SignInSignUpResponse>>;

    startMySession: (
      pushNotificationToken: string | null | undefined,
    ) => Promise<void>;
    startMySessionV2: (
      pushNotificationToken: string | null | undefined,
      returnContentStatus: boolean,
    ) => Promise<void>;

    unblockUserForMe: (
      userId: string,
      queryOptions?: QueryOptions | undefined,
    ) => Promise<QueryResult<MyUser>>;

    updateMyUser: (
      myUser: Partial<MyUserChanges>,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<MyUser>>;

    updateMyPassword: (
      oldPassword: string,
      newPassword: string,
      queryOptions?: QueryOptions,
    ) => Promise<QueryResult<MyUser>>;

    verifyMyEmail: (
      email: string,
      queryOptions: QueryOptions,
    ) => Promise<QueryResult<MultiStepActionProgressResult>>;
  };

  multiStepAction: {
    abortMultiStepAction: (actionId: string) => boolean;

    addMultiStepActionListener: (
      actionId: string,
      listener: MultiStepActionListener,
    ) => string | null;

    findMyActiveMultiStepActions: () => Promise<QueryResult<SidMultiStepAction>>;

    getMultiStepActionProgress: (
      actionId: string,
      confirmToken: string | undefined,
      queryOptions: QueryOptions,
    ) => Promise<QueryResult<MultiStepActionProgressResult>>;

    removeMultiStepActionListener: (actionId: string, id: string) => boolean;

    sendMultiStepActionNotification: (
      actionId: string,
      email: string | undefined,
      phoneNumber: string | undefined,
      notificationMethod: NotificationMethod,
    ) => Promise<QueryResult<string>>;

    verifyMultiStepActionToken: (
      actionId: string,
      confirmToken: string,
      newPassword?: string,
    ) => Promise<QueryResult<SidMultiStepActionProgress>>;
  };
}
