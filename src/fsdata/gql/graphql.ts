 
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** Long type for 64-bit integers */
  Long: { input: any; output: any; }
};

export type AcademicExperience = {
  __typename?: 'AcademicExperience';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** E.g. "Bachelor of Science" */
  degreeType?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  /** E.g. "Computer Science" */
  fieldOfStudy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  institutionName: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** If no start date is provided, startDate is null. */
  startDate?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type AcademicExperienceInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** E.g. "Bachelor of Science" */
  degreeType?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** E.g. "Computer Science" */
  fieldOfStudy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  institutionName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  startDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminTask = {
  __typename?: 'AdminTask';
  adminNotes?: Maybe<Scalars['String']['output']>;
  adminTaskType: AdminTaskType;
  /** arguments */
  args?: Maybe<Array<Scalars['String']['output']>>;
  /** run ask after creation */
  autoRun?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** Any error messages that happened during the run */
  error?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  /** Date/time this task will be removed from the db */
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** Date/time this task completed its run */
  finishedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  result?: Maybe<AdminTaskResult>;
  resultMessage?: Maybe<Scalars['String']['output']>;
  /** Date/time this task started to run */
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** should the task run synchronously, or in the background? */
  synchronous?: Maybe<Scalars['Boolean']['output']>;
  /** number of milliseconds before timeout */
  timeout?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type AdminTaskArgDef = {
  __typename?: 'AdminTaskArgDef';
  choices?: Maybe<Array<Scalars['String']['output']>>;
  dataType: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  optional?: Maybe<Scalars['Boolean']['output']>;
};

export type AdminTaskDef = {
  __typename?: 'AdminTaskDef';
  adminTaskType: AdminTaskType;
  /** arguments */
  args?: Maybe<Array<AdminTaskArgDef>>;
  /** is this admin task available? */
  available: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  /** number of milliseconds before timeout */
  timeout?: Maybe<Scalars['Int']['output']>;
};

export type AdminTaskInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  adminTaskType?: InputMaybe<AdminTaskType>;
  /** arguments */
  args?: InputMaybe<Array<Scalars['String']['input']>>;
  /** run ask after creation */
  autoRun?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  /** Any error messages that happened during the run */
  error?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** Date/time this task will be removed from the db */
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** Date/time this task completed its run */
  finishedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  result?: InputMaybe<AdminTaskResult>;
  resultMessage?: InputMaybe<Scalars['String']['input']>;
  /** Date/time this task started to run */
  startedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** should the task run synchronously, or in the background? */
  synchronous?: InputMaybe<Scalars['Boolean']['input']>;
  /** number of milliseconds before timeout */
  timeout?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export enum AdminTaskResult {
  Error = 'error',
  Ok = 'ok'
}

export enum AdminTaskType {
  AddAppFeature = 'addAppFeature',
  AddLanguageText = 'addLanguageText',
  AddOrRemoveAppFeature = 'addOrRemoveAppFeature',
  ClearBusMessages = 'clearBusMessages',
  CompareMm2Object = 'compareMm2Object',
  CompareMm2ObjectIdsOfModel = 'compareMm2ObjectIdsOfModel',
  CreateAnalyticsSynchronization = 'createAnalyticsSynchronization',
  CreateApiAuthInfo = 'createApiAuthInfo',
  DecryptString = 'decryptString',
  DeleteUser = 'deleteUser',
  DoDataMaintenance = 'doDataMaintenance',
  FillAllMm2ProfileIds = 'fillAllMm2ProfileIds',
  FixAllSyncedChannelInvitationInitialMessages = 'fixAllSyncedChannelInvitationInitialMessages',
  FormatPhoneNumbers = 'formatPhoneNumbers',
  ImportMarketplaceData = 'importMarketplaceData',
  LoadDbCache = 'loadDbCache',
  MergeAllDuplicateMm3ChatObjects = 'mergeAllDuplicateMm3ChatObjects',
  MergeAllDuplicateMm3Users = 'mergeAllDuplicateMm3Users',
  MergeUsers = 'mergeUsers',
  PauseAnalyticsSynchronization = 'pauseAnalyticsSynchronization',
  PauseMm2Synchronization = 'pauseMm2Synchronization',
  QueryDbVersion = 'queryDbVersion',
  RecreateDbIndexes = 'recreateDbIndexes',
  RecreateDefaultMatchingEngine = 'recreateDefaultMatchingEngine',
  RefreshAllEmbeddedCompanies = 'refreshAllEmbeddedCompanies',
  RefreshAllMatchProfiles = 'refreshAllMatchProfiles',
  RefreshAllUserInboxes = 'refreshAllUserInboxes',
  RemoveAllInvalidUserBlocks = 'removeAllInvalidUserBlocks',
  RemoveAppFeature = 'removeAppFeature',
  RemoveBusMessage = 'removeBusMessage',
  ResetUserPassword = 'resetUserPassword',
  RunAnalyticsSynchronization = 'runAnalyticsSynchronization',
  RunDataGenerator = 'runDataGenerator',
  RunMm2Synchronization = 'runMm2Synchronization',
  SendPendingTrackingEvents = 'sendPendingTrackingEvents',
  SendPushNotification = 'sendPushNotification',
  SetTrainingTags = 'setTrainingTags',
  SetUserPassword = 'setUserPassword',
  SuspendUser = 'suspendUser',
  SyncAllUsersWhoSignedUpInMm3 = 'syncAllUsersWhoSignedUpInMm3',
  SyncDocsWithoutMm2Ids = 'syncDocsWithoutMm2Ids',
  SyncUsersWithLanguageMismatch = 'syncUsersWithLanguageMismatch',
  TriggerRandomSynchronizations = 'triggerRandomSynchronizations',
  Unset = 'unset',
  UpdateChannelMetadata = 'updateChannelMetadata',
  UpdateChannelOtherUserId = 'updateChannelOtherUserId',
  UpdateEmbeddedGroupMembershipsOfAllUsers = 'updateEmbeddedGroupMembershipsOfAllUsers',
  UpdateGroupIdentsInAllGroupMemberships = 'updateGroupIdentsInAllGroupMemberships',
  VerifyUserPassword = 'verifyUserPassword'
}

export enum AppAction {
  EditProfile = 'editProfile',
  Unset = 'unset',
  UpdateApp = 'updateApp'
}

export enum AppFeature {
  TestFeatures1 = 'testFeatures1',
  TestFeatures2 = 'testFeatures2'
}

export type AppliedGroupRule = {
  __typename?: 'AppliedGroupRule';
  adminNotes?: Maybe<Scalars['String']['output']>;
  config?: Maybe<GroupRuleBaseConfig>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  groupId: Scalars['ID']['output'];
  groupRuleId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  subscribedToEvents: Array<GroupRuleEventType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type AppliedGroupRuleInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  config?: InputMaybe<GroupRuleBaseConfigInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  groupId?: Scalars['ID']['input'];
  groupRuleId?: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  subscribedToEvents?: Array<GroupRuleEventType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export enum AssetHostingService {
  S3 = 's3',
  Unset = 'unset'
}

export enum AuthType {
  Hmac = 'hmac',
  None = 'none',
  Oauth = 'oauth',
  Saml = 'saml',
  Token = 'token'
}

export enum BarcodeType {
  Code_25 = 'CODE_25',
  DataMatrix = 'DATA_MATRIX',
  Ean_8 = 'EAN_8',
  Ean_13 = 'EAN_13',
  I125 = 'I125',
  Itf = 'ITF',
  Pdf417 = 'PDF417',
  QrCode = 'QR_CODE',
  Type_39 = 'TYPE_39',
  Type_128 = 'TYPE_128',
  UpcA = 'UPC_A',
  UpcE = 'UPC_E'
}

export type BaseModel = {
  __typename?: 'BaseModel';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type BaseModelMetadata = {
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type BaseModelMetadataInput = {
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type BgAddChannelMessageEventInput = {
  channelId?: Scalars['ID']['input'];
  event?: ChannelMessageEvent;
  messageIds?: Array<Scalars['ID']['input']>;
  recipientId?: Scalars['ID']['input'];
};

export type BgChannelChangedEvent = {
  __typename?: 'BgChannelChangedEvent';
  channelId?: Maybe<Scalars['ID']['output']>;
  eventType: ChannelChangedEventType;
  invitationId?: Maybe<Scalars['ID']['output']>;
  messageId?: Maybe<Scalars['ID']['output']>;
  participantId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  serviceRequest: ServiceRequest;
};

export type BgChannelParticipantUserInfo = {
  __typename?: 'BgChannelParticipantUserInfo';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  userHandle?: Maybe<Scalars['String']['output']>;
};

export type BgChannelStatus = {
  __typename?: 'BgChannelStatus';
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['ID']['output'];
};

export type BgChannelStatusInput = {
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Brand = {
  __typename?: 'Brand';
  adminNotes?: Maybe<Scalars['String']['output']>;
  alias1?: Maybe<Scalars['String']['output']>;
  alias2?: Maybe<Scalars['String']['output']>;
  alias3?: Maybe<Scalars['String']['output']>;
  balanceLookupUri?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  imageSource?: Maybe<Scalars['String']['output']>;
  importId: Scalars['String']['output'];
  listed?: Maybe<Scalars['Boolean']['output']>;
  logoImageSource?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BrandInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  alias1?: InputMaybe<Scalars['String']['input']>;
  alias2?: InputMaybe<Scalars['String']['input']>;
  alias3?: InputMaybe<Scalars['String']['input']>;
  balanceLookupUri?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageSource?: InputMaybe<Scalars['String']['input']>;
  importId?: InputMaybe<Scalars['String']['input']>;
  listed?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type BrandListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type BusinessExperience = {
  __typename?: 'BusinessExperience';
  adminNotes?: Maybe<Scalars['String']['output']>;
  businessName: Scalars['String']['output'];
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** If no start date is provided, startDate is null. */
  startDate?: Maybe<Scalars['DateTimeISO']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type BusinessExperienceInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  /** If the experience is ongoing, endDate is null. */
  endDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  startDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Channel = {
  __typename?: 'Channel';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  archivedBy?: Maybe<Scalars['ID']['output']>;
  assumedMentorId?: Maybe<Scalars['ID']['output']>;
  channelType: ChannelType;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  creator: User;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  invitations: Array<ChannelInvitation>;
  isArchivedForMe: Scalars['Boolean']['output'];
  latestMessage?: Maybe<ChannelMessage>;
  lockedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  lockedBy?: Maybe<Scalars['ID']['output']>;
  messages: Array<ChannelMessage>;
  metadata?: Maybe<ChannelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  myContacts?: Maybe<Array<Contact>>;
  name?: Maybe<Scalars['String']['output']>;
  /** For 1:1 channels, the ID of the other user. The first user is createdBy. */
  otherUserId?: Maybe<Scalars['ID']['output']>;
  participants: Array<ChannelParticipant>;
  pausedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  pausedBy?: Maybe<Scalars['ID']['output']>;
  pendingInvitations: Array<ChannelInvitation>;
  status?: Maybe<BgChannelStatus>;
  statuses?: Maybe<Array<BgChannelStatus>>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  topic?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userIds?: Maybe<Array<Scalars['ID']['output']>>;
};

export enum ChannelChangedEventType {
  ChannelDeleted = 'channelDeleted',
  ChannelUpdated = 'channelUpdated',
  InvitationAccepted = 'invitationAccepted',
  InvitationCreated = 'invitationCreated',
  InvitationDeclined = 'invitationDeclined',
  InvitationDeleted = 'invitationDeleted',
  InvitationUpdated = 'invitationUpdated',
  MessageCreated = 'messageCreated',
  MessageDeleted = 'messageDeleted',
  MessageStatusChanged = 'messageStatusChanged',
  MessageUpdated = 'messageUpdated',
  ParticipantCreated = 'participantCreated',
  ParticipantDeleted = 'participantDeleted',
  ParticipantUpdated = 'participantUpdated'
}

export type ChannelInbox = {
  __typename?: 'ChannelInbox';
  channelsExceedMaxCount?: Maybe<Scalars['Boolean']['output']>;
  invitations?: Maybe<Array<ChannelInboxItemInvitation>>;
  invitationsExceedMaxCount?: Maybe<Scalars['Boolean']['output']>;
  /** MD5 hash of all item IDs to check whether there are any new or removed items. */
  itemIdHash?: Maybe<Scalars['String']['output']>;
  latestArchivedMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  latestMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  pendingInvitations?: Maybe<Array<ChannelInboxItemInvitation>>;
  unseenArchivedMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  unseenMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  unseenSystemMessages?: Maybe<Array<ChannelInboxItemMessage>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type ChannelInboxItemInvitation = {
  __typename?: 'ChannelInboxItemInvitation';
  autoAccept?: Maybe<Scalars['Boolean']['output']>;
  channelId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  readByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  recipientId?: Maybe<Scalars['ID']['output']>;
  status: ChannelInvitationStatus;
};

export type ChannelInboxItemMessage = {
  __typename?: 'ChannelInboxItemMessage';
  channelId: Scalars['ID']['output'];
  channelMessageType?: Maybe<ChannelMessageType>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  messageText?: Maybe<Scalars['String']['output']>;
  replyToMessageId?: Maybe<Scalars['ID']['output']>;
  seenAt?: Maybe<Scalars['DateTimeISO']['output']>;
  senderAvatarUrl?: Maybe<Scalars['String']['output']>;
  senderFirstName?: Maybe<Scalars['String']['output']>;
  senderLastName?: Maybe<Scalars['String']['output']>;
  senderUserHandle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userIds?: Maybe<Array<Scalars['ID']['output']>>;
};

export type ChannelInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  archivedBy?: InputMaybe<Scalars['ID']['input']>;
  assumedMentorId?: InputMaybe<Scalars['ID']['input']>;
  channelType?: InputMaybe<ChannelType>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inviteUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** For 1:1 channels, the ID of the other user. The first user is createdBy. */
  otherUserId?: InputMaybe<Scalars['ID']['input']>;
  pausedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  pausedBy?: InputMaybe<Scalars['ID']['input']>;
  statuses?: InputMaybe<Array<BgChannelStatusInput>>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: InputMaybe<Scalars['DateTimeISO']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ChannelInvitation = {
  __typename?: 'ChannelInvitation';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** An authorized sender (i.e. role: ["support"]) can skip the acceptance step. */
  autoAccept?: Maybe<Scalars['Boolean']['output']>;
  channel: Channel;
  channelId?: Maybe<Scalars['ID']['output']>;
  channelName?: Maybe<Scalars['String']['output']>;
  channelTopic?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  declineReason?: Maybe<DeclineChannelInvitationReason>;
  declineReasonTextId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  dismissedFromInboxByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  dismissedFromInboxBySenderAt?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  readByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  recipient?: Maybe<User>;
  recipientId: Scalars['ID']['output'];
  searchRank?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<User>;
  status: ChannelInvitationStatus;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userSearchId?: Maybe<Scalars['ID']['output']>;
};

export enum ChannelInvitationDirection {
  Received = 'received',
  Sent = 'sent'
}

export type ChannelInvitationInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  /** An authorized sender (i.e. role: ["support"]) can skip the acceptance step. */
  autoAccept?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  channelTopic?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  declineReasonTextId?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  dismissedFromInboxByRecipientAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dismissedFromInboxBySenderAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: InputMaybe<Scalars['String']['input']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: InputMaybe<Scalars['String']['input']>;
  readByRecipientAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  recipientId?: InputMaybe<Scalars['ID']['input']>;
  searchRank?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ChannelInvitationStatus>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userSearchId?: InputMaybe<Scalars['ID']['input']>;
};

export enum ChannelInvitationStatus {
  Accepted = 'accepted',
  Created = 'created',
  Declined = 'declined',
  Unset = 'unset'
}

export type ChannelListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  includeArchivedMessages?: InputMaybe<IncludeFilterOption>;
  includeSystemMessages?: InputMaybe<IncludeFilterOption>;
  invitationMustBeAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  mustHaveMessages?: InputMaybe<Scalars['Boolean']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ChannelListItem = {
  __typename?: 'ChannelListItem';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  archivedBy?: Maybe<Scalars['ID']['output']>;
  assumedMentorId?: Maybe<Scalars['ID']['output']>;
  channelType: ChannelType;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  creator: User;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  invitations: Array<ChannelInvitation>;
  isArchivedForMe: Scalars['Boolean']['output'];
  latestMessage?: Maybe<ChannelMessage>;
  lockedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  lockedBy?: Maybe<Scalars['ID']['output']>;
  messages: Array<ChannelMessage>;
  metadata?: Maybe<ChannelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  myContacts?: Maybe<Array<Contact>>;
  name?: Maybe<Scalars['String']['output']>;
  /** For 1:1 channels, the ID of the other user. The first user is createdBy. */
  otherUserId?: Maybe<Scalars['ID']['output']>;
  participants?: Maybe<Array<ChannelParticipant>>;
  pausedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  pausedBy?: Maybe<Scalars['ID']['output']>;
  pendingInvitations: Array<ChannelInvitation>;
  status?: Maybe<BgChannelStatus>;
  statuses?: Maybe<Array<BgChannelStatus>>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  topic?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userIds?: Maybe<Array<Scalars['ID']['output']>>;
};

export type ChannelMessage = {
  __typename?: 'ChannelMessage';
  adminNotes?: Maybe<Scalars['String']['output']>;
  channel: Channel;
  channelId: Scalars['ID']['output'];
  channelMessageType?: Maybe<ChannelMessageType>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  editedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<ChannelMessageMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  replyToMessageId?: Maybe<Scalars['ID']['output']>;
  sender: User;
  statuses?: Maybe<Array<ChannelMessageStatus>>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export enum ChannelMessageEvent {
  Received = 'received',
  Seen = 'seen',
  Unset = 'unset'
}

export type ChannelMessageInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelMessageType?: InputMaybe<ChannelMessageType>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  editedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ConversationId?: InputMaybe<Scalars['String']['input']>;
  /** This attribute is only used by the MM2 synchronizer. Mm2 message ID. */
  mm2Id?: InputMaybe<Scalars['String']['input']>;
  replyToMessageId?: InputMaybe<Scalars['ID']['input']>;
  statuses?: InputMaybe<Array<ChannelMessageStatusInput>>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ChannelMessageListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  includeChannelMessageType?: InputMaybe<Array<ChannelMessageType>>;
  received?: InputMaybe<Scalars['Boolean']['input']>;
  receiverUserId?: InputMaybe<Scalars['ID']['input']>;
  replyToMessageId?: InputMaybe<Scalars['ID']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ChannelMessageMetadata = {
  __typename?: 'ChannelMessageMetadata';
  senderAvatarUrl?: Maybe<Scalars['String']['output']>;
  senderFirstName?: Maybe<Scalars['String']['output']>;
  senderLastName?: Maybe<Scalars['String']['output']>;
  senderUserHandle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ChannelMessageStatus = {
  __typename?: 'ChannelMessageStatus';
  isInArchivedChannel?: Maybe<Scalars['Boolean']['output']>;
  receivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  seenAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['ID']['output'];
};

export type ChannelMessageStatusInput = {
  receivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  seenAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export enum ChannelMessageType {
  Invitation = 'invitation',
  Support = 'support',
  System = 'system',
  Unset = 'unset',
  Welcome = 'welcome'
}

export type ChannelMetadata = {
  __typename?: 'ChannelMetadata';
  channelInvitationAccepted?: Maybe<Scalars['Boolean']['output']>;
  messagesSentByCreatorCount?: Maybe<Scalars['Int']['output']>;
  messagesSentByFirstParticipantCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ChannelParticipant = {
  __typename?: 'ChannelParticipant';
  adminNotes?: Maybe<Scalars['String']['output']>;
  channel: Channel;
  channelId: Scalars['ID']['output'];
  channelName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  invitedBy?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  myContact: Contact;
  role?: Maybe<ChannelParticipantRole>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  user: UserListItem;
  userId: Scalars['ID']['output'];
  userInfo?: Maybe<BgChannelParticipantUserInfo>;
};

export type ChannelParticipantInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invitedBy?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  role?: InputMaybe<ChannelParticipantRole>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ChannelParticipantListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  channelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export enum ChannelParticipantRole {
  Admin = 'admin',
  Moderator = 'moderator',
  Owner = 'owner',
  Unset = 'unset'
}

export enum ChannelType {
  Mentoring = 'mentoring',
  Support = 'support',
  Unset = 'unset',
  Welcome = 'welcome'
}

export type ChannelsUserMetadata = {
  __typename?: 'ChannelsUserMetadata';
  mentoringSessionCount: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  adminNotes?: Maybe<Scalars['String']['output']>;
  annualRevenue?: Maybe<Scalars['Int']['output']>;
  companyStage?: Maybe<CompanyStage>;
  companyStageTextId?: Maybe<Scalars['String']['output']>;
  companyType?: Maybe<CompanyType>;
  companyTypeTextId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  employeeCount?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  foundedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  industries?: Maybe<Array<Scalars['String']['output']>>;
  isFundraising?: Maybe<Scalars['Boolean']['output']>;
  isOperational?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** If a Company was created from the imported from MM2, mm2CompanyRole is either "mentor" or "mentee". This attribute is only used by the MM2 synchronizer. */
  mm2CompanyRole?: Maybe<Scalars['String']['output']>;
  /** If a Company was created from the imported attributes of an MM2 Profile, mm2UserId references the MM2 user ID. This attribute is only used by the MM2 synchronizer. */
  mm2UserId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userIds?: Maybe<Array<Scalars['String']['output']>>;
  websites?: Maybe<Array<LabeledStringValue>>;
};

export type CompanyInput = {
  addUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  annualRevenue?: InputMaybe<Scalars['Int']['input']>;
  companyStageTextId?: InputMaybe<Scalars['String']['input']>;
  companyTypeTextId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  employeeCount?: InputMaybe<Scalars['Int']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  foundedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  isFundraising?: InputMaybe<Scalars['Boolean']['input']>;
  isOperational?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  websites?: InputMaybe<Array<LabeledStringValueInput>>;
};

export type CompanyStage = {
  __typename?: 'CompanyStage';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type CompanyType = {
  __typename?: 'CompanyType';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Contact = {
  __typename?: 'Contact';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  channelId?: Maybe<Scalars['ID']['output']>;
  contactTypes: Array<ContactType>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<ContactMetadata>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  typeTextIds: Array<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type ContactInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  typeTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ContactListItem = {
  __typename?: 'ContactListItem';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  channelId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  favorite?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<ContactMetadata>;
  nickname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  typeTextIds: Array<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type ContactMetadata = {
  __typename?: 'ContactMetadata';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userHandle?: Maybe<Scalars['String']['output']>;
};

export type ContactType = {
  __typename?: 'ContactType';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type ContentStatus = {
  __typename?: 'ContentStatus';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  myUserInboxUpdatedAt?: Maybe<Scalars['Long']['output']>;
  myUserUpdatedAt?: Maybe<Scalars['Long']['output']>;
  optionsUpdatedAt?: Maybe<Scalars['Long']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type ContentTag = {
  __typename?: 'ContentTag';
  adminNotes?: Maybe<Scalars['String']['output']>;
  allModerationConcerns?: Maybe<Array<ModerationConcern>>;
  approvedByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  childContentTagType?: Maybe<ContentTagType>;
  childContentTagTypeTextId?: Maybe<Scalars['String']['output']>;
  contentModelType: ModelType;
  contentTagType?: Maybe<ContentTagType>;
  contentTagTypeTextId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  dismissedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that dimsissed the tag. */
  dismissedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  moderationConcern?: Maybe<ModerationConcern>;
  objectId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** ID of the user that created/owns the content referred to in this ContentTag. The ID of the user that created this ContentTag is stored in the createdBy field for ContentTags that were created by a user. */
  userId?: Maybe<Scalars['ID']['output']>;
  verifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that verified the tag. */
  verifiedBy?: Maybe<Scalars['ID']['output']>;
};

export type ContentTagInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  allModerationConcerns?: InputMaybe<Array<ModerationConcernInput>>;
  approvedByRecipientAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  childContentTagTypeTextId?: InputMaybe<Scalars['String']['input']>;
  contentModelType?: InputMaybe<ModelType>;
  contentTagTypeTextId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  dismissedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** ID of the admin user that dimsissed the tag. */
  dismissedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  moderationConcern?: InputMaybe<ModerationConcernInput>;
  objectId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the user that created/owns the content referred to in this ContentTag. The ID of the user that created this ContentTag is stored in the createdBy field for ContentTags that were created by a user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
  verifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** ID of the admin user that verified the tag. */
  verifiedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ContentTagType = {
  __typename?: 'ContentTagType';
  addToTrustLevel?: Maybe<Scalars['Int']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export enum CookieChoiceTextId {
  AcceptAll = 'acceptAll',
  AcceptEssentials = 'acceptEssentials',
  RejectAll = 'rejectAll'
}

export type Country = {
  __typename?: 'Country';
  adminNotes?: Maybe<Scalars['String']['output']>;
  alpha2Key: Scalars['String']['output'];
  alpha3Key: Scalars['String']['output'];
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  phoneCode: Scalars['String']['output'];
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type DeclineChannelInvitationReason = {
  __typename?: 'DeclineChannelInvitationReason';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export enum DeclineChannelInvitationReasonTextId {
  FakeProfile = 'fakeProfile',
  Inappropriate = 'inappropriate',
  NoReason = 'noReason',
  NotGoodFit = 'notGoodFit',
  TooBusy = 'tooBusy'
}

export type EducationLevel = {
  __typename?: 'EducationLevel';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type EndorsementWithTypes = {
  __typename?: 'EndorsementWithTypes';
  adminNotes?: Maybe<Scalars['String']['output']>;
  allModerationConcerns?: Maybe<Array<ModerationConcern>>;
  approvedByRecipientAt?: Maybe<Scalars['DateTimeISO']['output']>;
  childContentTagType?: Maybe<ContentTagType>;
  childContentTagTypeTextId?: Maybe<Scalars['String']['output']>;
  contentModelType: ModelType;
  contentTagType?: Maybe<ContentTagType>;
  contentTagTypeTextId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  dismissedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that dimsissed the tag. */
  dismissedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  moderationConcern?: Maybe<ModerationConcern>;
  objectId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** ID of the user that created/owns the content referred to in this ContentTag. The ID of the user that created this ContentTag is stored in the createdBy field for ContentTags that were created by a user. */
  userId?: Maybe<Scalars['ID']['output']>;
  verifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** ID of the admin user that verified the tag. */
  verifiedBy?: Maybe<Scalars['ID']['output']>;
};

export enum ErrorCode {
  AcademicExperienceNameMissing = 'academicExperienceNameMissing',
  AcademicExperienceUserIdMissing = 'academicExperienceUserIdMissing',
  AlreadyExists = 'alreadyExists',
  AlreadyGroupMember = 'alreadyGroupMember',
  AlreadyInitialized = 'alreadyInitialized',
  AssetUploadFailed = 'assetUploadFailed',
  AuthTokenNoMatch = 'authTokenNoMatch',
  BusinessExperienceNameMissing = 'businessExperienceNameMissing',
  BusinessExperienceUserIdMissing = 'businessExperienceUserIdMissing',
  CompanyNameMissing = 'companyNameMissing',
  CompanyNameTaken = 'companyNameTaken',
  ContentTagAlreadyExist = 'contentTagAlreadyExist',
  ContentTagModelTypeMissing = 'contentTagModelTypeMissing',
  ContentTagObjectIdMissing = 'contentTagObjectIdMissing',
  ContentTagTypeMissing = 'contentTagTypeMissing',
  CurrentPasswordIncorrect = 'currentPasswordIncorrect',
  CurrentPasswordMissing = 'currentPasswordMissing',
  DataValidationFailed = 'dataValidationFailed',
  DeviceUuidMissing = 'deviceUuidMissing',
  EmailInvalid = 'emailInvalid',
  EmailMissing = 'emailMissing',
  ExceedsLimit = 'exceedsLimit',
  ExpertiseBidirectionalMappingError = 'expertiseBidirectionalMappingError',
  ExpertiseTextIdDne = 'expertiseTextIdDNE',
  FailedToConnect = 'failedToConnect',
  FailedToCreateAccount = 'failedToCreateAccount',
  FailedToSignin = 'failedToSignin',
  FailedToUpdate = 'failedToUpdate',
  GroupLevelTooDeep = 'groupLevelTooDeep',
  GroupNameMissing = 'groupNameMissing',
  GroupNameTaken = 'groupNameTaken',
  GroupNotActive = 'groupNotActive',
  GroupRuleFailed = 'groupRuleFailed',
  GroupSlugMissing = 'groupSlugMissing',
  GroupSlugTaken = 'groupSlugTaken',
  InvalidInput = 'invalidInput',
  InvalidPushNotificationToken = 'invalidPushNotificationToken',
  MatchingEngineNameMissing = 'matchingEngineNameMissing',
  MatchingEngineNameTaken = 'matchingEngineNameTaken',
  NatsInvalidTrackId = 'natsInvalidTrackId',
  NoLiveWebsocketConnectionAvailable = 'noLiveWebsocketConnectionAvailable',
  NoNotificationMethodAvailable = 'noNotificationMethodAvailable',
  NotAGroupMember = 'notAGroupMember',
  NotAllowed = 'notAllowed',
  NotAvailable = 'notAvailable',
  NotFound = 'notFound',
  NotImplemented = 'notImplemented',
  NotInitialized = 'notInitialized',
  NotSupported = 'notSupported',
  ParentGroupNotFound = 'parentGroupNotFound',
  PasswordMissing = 'passwordMissing',
  PasswordNoMatch = 'passwordNoMatch',
  PhoneNumberInvalid = 'phoneNumberInvalid',
  PhoneNumberMissing = 'phoneNumberMissing',
  PhoneNumberNotSupported = 'phoneNumberNotSupported',
  ServiceNotAvailable = 'serviceNotAvailable',
  SystemError = 'systemError',
  Timeout = 'timeout',
  TooManyRequests = 'tooManyRequests',
  TrackingInvalidTrackId = 'trackingInvalidTrackId',
  TrainingCannotUpdateFields = 'trainingCannotUpdateFields',
  TrainingContentPageCannotUpdateFields = 'trainingContentPageCannotUpdateFields',
  TrainingContentPageMm2IdMissing = 'trainingContentPageMm2IdMissing',
  TrainingContentPageMm2IdTaken = 'trainingContentPageMm2IdTaken',
  TrainingMm2IdMissing = 'trainingMm2IdMissing',
  TrainingMm2IdTaken = 'trainingMm2IdTaken',
  TrainingSessionCannotUpdateFields = 'trainingSessionCannotUpdateFields',
  TrainingSessionMm2IdMissing = 'trainingSessionMm2IdMissing',
  TrainingSessionMm2IdTaken = 'trainingSessionMm2IdTaken',
  TrainingSessionProgressInvalid = 'trainingSessionProgressInvalid',
  TrainingSessionTrainingMissing = 'trainingSessionTrainingMissing',
  TrainingSessionUserIdMissing = 'trainingSessionUserIdMissing',
  Unauthorized = 'unauthorized',
  Unknown = 'unknown',
  UserAlreadyExists = 'userAlreadyExists',
  UserAnonymized = 'userAnonymized',
  UserDeviceNotFound = 'userDeviceNotFound',
  UserNotActive = 'userNotActive',
  UserNotFound = 'userNotFound'
}

export type ErrorCodeOption = {
  __typename?: 'ErrorCodeOption';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Expertise = {
  __typename?: 'Expertise';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childExpertises?: Maybe<Array<Expertise>>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentExpertise?: Maybe<Expertise>;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export enum FederatedIdentityProvider {
  Firebase = 'firebase',
  None = 'none'
}

export type FindObjectsOptions = {
  allowPartialResults?: InputMaybe<Scalars['Boolean']['input']>;
  awaitData?: InputMaybe<Scalars['Boolean']['input']>;
  batchSize?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<IncludeFilterOption>;
  includeBlocked?: InputMaybe<IncludeFilterOption>;
  includeDeleted?: InputMaybe<IncludeFilterOption>;
  includeSuspended?: InputMaybe<IncludeFilterOption>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  maxAwaitTimeMS?: InputMaybe<Scalars['Int']['input']>;
  maxTimeMS?: InputMaybe<Scalars['Int']['input']>;
  noCursorTimeout?: InputMaybe<Scalars['Boolean']['input']>;
  returnKey?: InputMaybe<Scalars['Boolean']['input']>;
  showRecordId?: InputMaybe<Scalars['Boolean']['input']>;
  singleBatch?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortItem>>;
  tailable?: InputMaybe<Scalars['Boolean']['input']>;
  timeout?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FindUserByIdentOptions = {
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  includeGroupProfiles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Gender = {
  __typename?: 'Gender';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type GiftCardDenomination = {
  __typename?: 'GiftCardDenomination';
  amount: Scalars['Int']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type GiftCardDenominationInput = {
  amount?: Scalars['Int']['input'];
  enabled?: Scalars['Boolean']['input'];
};

export type GiftCardProduct = {
  __typename?: 'GiftCardProduct';
  adminNotes?: Maybe<Scalars['String']['output']>;
  barcodeFormat?: Maybe<BarcodeType>;
  brandId: Scalars['ID']['output'];
  brandImportId?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Scalars['ID']['output']>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  denominations?: Maybe<Array<GiftCardDenomination>>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  genericGiftCardId?: Maybe<Scalars['ID']['output']>;
  hasBarcode?: Maybe<Scalars['Boolean']['output']>;
  hasPin?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  imageSourceBack?: Maybe<Scalars['String']['output']>;
  imageSourceFront?: Maybe<Scalars['String']['output']>;
  importId: Scalars['String']['output'];
  instructionsEn?: Maybe<Scalars['String']['output']>;
  instructionsUrl?: Maybe<Scalars['String']['output']>;
  isGeneric?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  name: Scalars['String']['output'];
  productType: ProductType;
  slug?: Maybe<Scalars['String']['output']>;
  termsEn?: Maybe<Scalars['String']['output']>;
  termsUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type GiftCardProductInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  barcodeFormat?: InputMaybe<BarcodeType>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  brandImportId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  denominations?: InputMaybe<Array<GiftCardDenominationInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  genericGiftCardId?: InputMaybe<Scalars['ID']['input']>;
  hasBarcode?: InputMaybe<Scalars['Boolean']['input']>;
  hasPin?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageSourceBack?: InputMaybe<Scalars['String']['input']>;
  imageSourceFront?: InputMaybe<Scalars['String']['input']>;
  importId?: InputMaybe<Scalars['String']['input']>;
  instructionsEn?: InputMaybe<Scalars['String']['input']>;
  instructionsUrl?: InputMaybe<Scalars['String']['input']>;
  isGeneric?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  productType?: InputMaybe<ProductType>;
  slug?: InputMaybe<Scalars['String']['input']>;
  termsEn?: InputMaybe<Scalars['String']['input']>;
  termsUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type GiftCardProductListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Group = {
  __typename?: 'Group';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /**
   * Deprecated, use GroupCmsOnboarding instead.
   * @deprecated Use GroupCmsOnboarding instead.
   */
  allowProfileRoleOnSignUp?: Maybe<UserProfileRole>;
  appliedGroupRules?: Maybe<Array<AppliedGroupRule>>;
  badgeName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  embedded: Scalars['Boolean']['output'];
  events?: Maybe<Array<ModelEvent>>;
  groupCms?: Maybe<GroupCms>;
  id: Scalars['ID']['output'];
  ident: Scalars['String']['output'];
  /** This is false for groups which are expected to continue using MM2. */
  isMigratedToMm3?: Maybe<Scalars['Boolean']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  isMm2Organization?: Maybe<Scalars['Boolean']['output']>;
  /** The language of this group. The app will be set to this language, should a new user arrive at this groups landing page. */
  languageTextId?: Maybe<Scalars['String']['output']>;
  matchingEngineId?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** The URL which can be used to redirect a group to MM2. */
  mm2RedirectUrl?: Maybe<Scalars['String']['output']>;
  /** The domain name used by the MM3 deep links, if different from the default groups. */
  mm3DeepLinksUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parentGroupId?: Maybe<Scalars['ID']['output']>;
  planType?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type GroupCms = {
  __typename?: 'GroupCms';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  onboarding?: Maybe<GroupCmsOnboarding>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type GroupCmsOnboarding = {
  __typename?: 'GroupCmsOnboarding';
  /** This defines which profile roles (mentor/mentee) are available to a new user when signing up to this group. */
  allowProfileRoleOnSignUp?: Maybe<UserProfileRole>;
  nextRoute?: Maybe<Scalars['String']['output']>;
  showAcceptTermsPage?: Maybe<Scalars['Boolean']['output']>;
  showBirthYearPage?: Maybe<Scalars['Boolean']['output']>;
  showDataConsentPage?: Maybe<Scalars['Boolean']['output']>;
  showExpertisesPage?: Maybe<Scalars['Boolean']['output']>;
  showGenderPage?: Maybe<Scalars['Boolean']['output']>;
  showIndustryPage?: Maybe<Scalars['Boolean']['output']>;
  showLocationPage?: Maybe<Scalars['Boolean']['output']>;
  showMentorRolePage?: Maybe<Scalars['Boolean']['output']>;
  showPhoneNumberPage?: Maybe<Scalars['Boolean']['output']>;
  showPreferredLanguagePage?: Maybe<Scalars['Boolean']['output']>;
  showProfileRolePage?: Maybe<Scalars['Boolean']['output']>;
  showReasonToJoinPage?: Maybe<Scalars['Boolean']['output']>;
  showVentureNamePage?: Maybe<Scalars['Boolean']['output']>;
  showVentureStagePage?: Maybe<Scalars['Boolean']['output']>;
  showVentureStartDatePage?: Maybe<Scalars['Boolean']['output']>;
};

export type GroupInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  /** This defines which profile roles (mentor/mentee) are available to a new user when signing up to this group. */
  allowProfileRoleOnSignUp?: InputMaybe<UserProfileRole>;
  appliedGroupRules?: InputMaybe<Array<AppliedGroupRuleInput>>;
  badgeName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  embedded?: Scalars['Boolean']['input'];
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ident?: InputMaybe<Scalars['String']['input']>;
  /** The language of this group. The app will be set to this language, should a new user arrive at this groups landing page. */
  languageTextId?: InputMaybe<Scalars['String']['input']>;
  matchingEngineId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentGroupId?: InputMaybe<Scalars['ID']['input']>;
  planType?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  embedded?: InputMaybe<Scalars['Boolean']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  syncedWithMm2?: InputMaybe<Scalars['Boolean']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type GroupMembership = IGroupMembership & {
  __typename?: 'GroupMembership';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  metadata?: Maybe<BaseModelMetadata>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type GroupMembershipInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupMembershipListFilter = {
  /** will find memberships that have any of the specified roles */
  anyOfRoles?: InputMaybe<Array<GroupMembershipRole>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  embedded?: InputMaybe<Scalars['Boolean']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum GroupMembershipRole {
  Admin = 'admin',
  Coordinator = 'coordinator',
  Moderator = 'moderator',
  Owner = 'owner'
}

export type GroupRuleBaseConfig = {
  __typename?: 'GroupRuleBaseConfig';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type GroupRuleBaseConfigInput = {
  value?: Scalars['String']['input'];
};

export enum GroupRuleEventType {
  EnterGroup = 'enterGroup',
  ExitGroup = 'exitGroup',
  SendMessage = 'sendMessage',
  SignUp = 'signUp',
  Unknown = 'unknown',
  UpdateUser = 'updateUser',
  UserSearch = 'userSearch'
}

export type GroupsUserMetadata = {
  __typename?: 'GroupsUserMetadata';
  groupCount: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type IGroupMembership = {
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  roles: Array<GroupMembershipRole>;
  userId: Scalars['ID']['output'];
};

export enum IdentityProvider {
  Apple = 'apple',
  Facebook = 'facebook',
  Google = 'google',
  Instagram = 'instagram',
  LinkedIn = 'linkedIn',
  Microsoft = 'microsoft',
  Own = 'own',
  Sso = 'sso',
  Telegram = 'telegram',
  Twitter = 'twitter',
  WhatsApp = 'whatsApp'
}

export enum IncludeFilterOption {
  Exclude = 'exclude',
  Include = 'include',
  Only = 'only'
}

export type IndonesianCity = {
  __typename?: 'IndonesianCity';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type IndonesianProvince = {
  __typename?: 'IndonesianProvince';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type Industry = {
  __typename?: 'Industry';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

/**
 *
 * This object contains the profile information describing an IQLAA user.
 *
 * IQLAA users are members of the "iqlaa" group, which comes with extra
 * profile attributes. These fields are used to store the user's
 * IQLAA-specific information.
 */
export type IqlaaGroupMembership = IGroupMembership & {
  __typename?: 'IqlaaGroupMembership';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** Date of birth */
  birthDate?: Maybe<Scalars['DateTimeISO']['output']>;
  /** (Optional) Business registration number */
  businessRegistrationNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  /** Fathers name */
  fatherName?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  /** "Is your business a home-based business?" */
  isBusinessHomeBased?: Maybe<Scalars['Boolean']['output']>;
  /** "Is the Business/ Project registered in the Companies Control Department -Ministry of industries and trading?" */
  isBusinessRegisteredWithCCD?: Maybe<Scalars['Boolean']['output']>;
  /** Is the user a Jordan national? */
  isJordanNational?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type IqlaaGroupMembershipInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  /** Date of birth */
  birthDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** (Optional) Business registration number */
  businessRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** Fathers name */
  fatherName?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** "Is your business a home-based business?" */
  isBusinessHomeBased?: InputMaybe<Scalars['Boolean']['input']>;
  /** "Is the Business/ Project registered in the Companies Control Department -Ministry of industries and trading?" */
  isBusinessRegisteredWithCCD?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is the user a Jordan national? */
  isJordanNational?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type IqlaaJordanianDistrict = {
  __typename?: 'IqlaaJordanianDistrict';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type IqlaaJordanianGovernorate = {
  __typename?: 'IqlaaJordanianGovernorate';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type LabeledStringValue = {
  __typename?: 'LabeledStringValue';
  label?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  value: Scalars['String']['output'];
};

export type LabeledStringValueInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Language = {
  __typename?: 'Language';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  /** Right to left text flow. */
  isRtl?: Maybe<Scalars['Boolean']['output']>;
  isUiLanguage: Scalars['Boolean']['output'];
  language?: Maybe<UiLanguage>;
  /** ISO 639-2, 3 letter language code. e.g. "eng" for English. */
  longLangCode?: Maybe<Scalars['String']['output']>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  /** ISO 639-1, 2 letter language code. e.g. "en" for English. */
  shortLangCode?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type MarketplaceServiceRecord = {
  __typename?: 'MarketplaceServiceRecord';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  serviceName: ServiceName;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type MastercardBank = {
  __typename?: 'MastercardBank';
  adminNotes?: Maybe<Scalars['String']['output']>;
  countryTextId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** Not stored, just used for graphQL API */
  displayName?: Maybe<Scalars['String']['output']>;
  /** (<Country name in English>) <Bank name> */
  enDisplayName: Scalars['String']['output'];
  /** (<Country name in Spanish>) <Bank name> */
  esDisplayName: Scalars['String']['output'];
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** The name of the bank */
  name: Scalars['String']['output'];
  textId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export enum MastercardCardType {
  Credit = 'credit',
  Debit = 'debit',
  None = 'none',
  NotProvided = 'notProvided',
  Prepaid = 'prepaid'
}

/**
 *
 * This object contains the profile information describing an MASTERCARD user.
 *
 * MASTERCARD users are members of the "mastercard" group, which comes with extra
 * profile attributes. These fields are used to store the user's
 * MASTERCARD-specific information.
 */
export type MastercardGroupMembership = IGroupMembership & {
  __typename?: 'MastercardGroupMembership';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** Names of banks for reports */
  bankNames?: Maybe<Array<Scalars['String']['output']>>;
  /** Text IDs of banks for reports */
  bankTextIds?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  metadata?: Maybe<BaseModelMetadata>;
  /** Personal card types */
  personalCardTypes?: Maybe<Array<MastercardCardType>>;
  roles: Array<GroupMembershipRole>;
  /** Small business card types, e.g. credit, debit, etc */
  smallBusinessCardTypes?: Maybe<Array<MastercardCardType>>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type MastercardGroupMembershipInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  /** Names of banks for reports */
  bankNames?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Text IDs of banks for reports */
  bankTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** Personal card types */
  personalCardTypes?: InputMaybe<Array<MastercardCardType>>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  /** Small business card types */
  smallBusinessCardTypes?: InputMaybe<Array<MastercardCardType>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/**
 *
 * This object contains the profile information describing a mentee/entrepreneur/business owner.
 *
 * Users with User.seeksHelp are members of the "mentees" group, which comes with extra
 * profile attributes. This is one of the 'embedded' group memberships that are available
 * through User.groupMemberships.
 */
export type MenteesGroupMembership = IGroupMembership & {
  __typename?: 'MenteesGroupMembership';
  /** From MM2, not used in MM3 (yet) */
  actionsTaken?: Maybe<Scalars['String']['output']>;
  /** Must match expertise textIds. */
  additionalSoughtExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** From MM2, not used in MM3 (yet) */
  currentChallenges?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  /** From MM2, not used in MM3 (yet) */
  futureGoals?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  howCanMentorSupportMe?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  /** Must match industry textIds. */
  industryTextId?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustryTextId?: Maybe<Scalars['String']['output']>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2SoughtExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  /** From MM2, not used in MM3 (yet) */
  motivationsForMentorship?: Maybe<Scalars['String']['output']>;
  reasonsForStartingBusiness?: Maybe<Scalars['String']['output']>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  /** Must match expertise textIds. */
  soughtExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type MenteesGroupMembershipInput = {
  actionsTaken?: InputMaybe<Scalars['String']['input']>;
  /** Must match expertise textIds. */
  additionalSoughtExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** From MM2, not used in MM3 (yet) */
  currentChallenges?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** From MM2, not used in MM3 (yet) */
  futureGoals?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  howCanMentorSupportMe?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Must match industry textId. */
  industryTextId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustryTextId?: InputMaybe<Scalars['String']['input']>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2SoughtExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** From MM2, not used in MM3 (yet) */
  motivationsForMentorship?: InputMaybe<Scalars['String']['input']>;
  reasonsForStartingBusiness?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  /** Must match expertise textIds. */
  soughtExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type MentorsGroupMembership = IGroupMembership & {
  __typename?: 'MentorsGroupMembership';
  /** Must match expertise textIds. */
  additionalExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  endorsements?: Maybe<Scalars['Int']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expectationsForMentees?: Maybe<Scalars['String']['output']>;
  expertises: Array<Expertise>;
  /** Must match expertise textIds. */
  expertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  helpICanOffer?: Maybe<Scalars['String']['output']>;
  howICanHelpMentees?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  /** Must match industry textIds. */
  industriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  industry?: Maybe<Industry>;
  menteePreparationInstructions?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2ExpertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  reasonsForMentoring?: Maybe<Scalars['String']['output']>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type MentorsGroupMembershipInput = {
  /** Must match expertise textIds. */
  additionalExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  endorsements?: InputMaybe<Scalars['Int']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  expectationsForMentees?: InputMaybe<Scalars['String']['input']>;
  /** Must match expertise textIds. */
  expertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  helpICanOffer?: InputMaybe<Scalars['String']['input']>;
  howICanHelpMentees?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Must match industry textIds. */
  industriesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  menteePreparationInstructions?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** Must match mm2 expertise textIds -- only used by synchronizer */
  mm2ExpertisesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Must match mm2 industry textIds -- only used by synchronizer */
  mm2IndustriesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  reasonsForMentoring?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<GroupMembershipRole>>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ModelEvent = {
  __typename?: 'ModelEvent';
  message: Scalars['String']['output'];
  modelEventType: ModelEventType;
  time: Scalars['DateTimeISO']['output'];
};

export type ModelEventInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  modelEventType?: ModelEventType;
  time?: Scalars['DateTimeISO']['input'];
};

export enum ModelEventType {
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
}

export enum ModelType {
  AcademicExperience = 'AcademicExperience',
  AdminTask = 'AdminTask',
  AnalyticsServiceRecord = 'AnalyticsServiceRecord',
  AnalyticsSynchronization = 'AnalyticsSynchronization',
  ApiAuthInfo = 'ApiAuthInfo',
  AppliedGroupRule = 'AppliedGroupRule',
  Brand = 'Brand',
  BusinessExperience = 'BusinessExperience',
  Channel = 'Channel',
  ChannelInbox = 'ChannelInbox',
  ChannelInvitation = 'ChannelInvitation',
  ChannelMessage = 'ChannelMessage',
  ChannelParticipant = 'ChannelParticipant',
  Company = 'Company',
  Contact = 'Contact',
  ContentStatus = 'ContentStatus',
  ContentTag = 'ContentTag',
  DataDeletionRecord = 'DataDeletionRecord',
  GiftCardProduct = 'GiftCardProduct',
  Group = 'Group',
  GroupCms = 'GroupCms',
  GroupMembership = 'GroupMembership',
  GroupRule = 'GroupRule',
  GroupRuleConfig = 'GroupRuleConfig',
  MarketplaceServiceRecord = 'MarketplaceServiceRecord',
  MastercardBank = 'MastercardBank',
  Match = 'Match',
  MatchProfile = 'MatchProfile',
  MatchingEngine = 'MatchingEngine',
  MentorBoard = 'MentorBoard',
  MentoringSession = 'MentoringSession',
  Mm2Integration = 'Mm2Integration',
  Mm2Synchronization = 'Mm2Synchronization',
  Mm2SynchronizationResultItem = 'Mm2SynchronizationResultItem',
  ModerationConcern = 'ModerationConcern',
  MultiStepAction = 'MultiStepAction',
  MyUser = 'MyUser',
  NatsMessage = 'NatsMessage',
  Notification = 'Notification',
  NotificationTemplate = 'NotificationTemplate',
  Option = 'Option',
  Product = 'Product',
  ProductCategory = 'ProductCategory',
  PurchaseOrder = 'PurchaseOrder',
  PurchaseOrderItem = 'PurchaseOrderItem',
  ServiceRecord = 'ServiceRecord',
  ServiceRequest = 'ServiceRequest',
  ShoppingCart = 'ShoppingCart',
  ShoppingCartItem = 'ShoppingCartItem',
  SupportChannelConfig = 'SupportChannelConfig',
  TrackingEvent = 'TrackingEvent',
  Training = 'Training',
  TrainingContentPage = 'TrainingContentPage',
  TrainingSession = 'TrainingSession',
  UploadedAsset = 'UploadedAsset',
  User = 'User',
  UserDevice = 'UserDevice',
  UserInbox = 'UserInbox',
  UserMetadata = 'UserMetadata',
  UserPreferences = 'UserPreferences',
  UserSearch = 'UserSearch',
  UserTracking = 'UserTracking',
  Wallet = 'Wallet',
  WalletItem = 'WalletItem',
  WalletItemTransfer = 'WalletItemTransfer',
  WalletServiceRecord = 'WalletServiceRecord',
  Unset = 'unset'
}

export type ModerationConcern = {
  __typename?: 'ModerationConcern';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** delete the content, if a match is found; default = false */
  deleteContent?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  /** must match with capitalization; ignored if isRegex = true; default = true */
  isCaseSensitive?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isCompanyNameOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isEmailOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isNameOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isPhoneNumberOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** value is a regex expression without flags; default = false */
  isRegex?: Maybe<Scalars['Boolean']['output']>;
  /** default = false */
  isWebsiteOfBadActor?: Maybe<Scalars['Boolean']['output']>;
  /** only matches full words; ignored if isRegex = true; default = false */
  isWord?: Maybe<Scalars['Boolean']['output']>;
  languageTextId?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  moderationConcernType: ModerationConcernType;
  name?: Maybe<Scalars['String']['output']>;
  /** number of points to reduce a users trustLevel, if found */
  trustLevelImpact?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

export type ModerationConcernInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** delete the content, if a match is found; default = false */
  deleteContent?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** must match with capitalization; ignored if isRegex = true; default = true */
  isCaseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isCompanyNameOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isEmailOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isNameOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isPhoneNumberOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** value is a regex expression without flags; default = false */
  isRegex?: InputMaybe<Scalars['Boolean']['input']>;
  /** default = false */
  isWebsiteOfBadActor?: InputMaybe<Scalars['Boolean']['input']>;
  /** only matches full words; ignored if isRegex = true; default = true */
  isWord?: InputMaybe<Scalars['Boolean']['input']>;
  languageTextId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  moderationConcernType?: ModerationConcernType;
  name?: InputMaybe<Scalars['String']['input']>;
  /** number of points to reduce a users trustLevel, if found */
  trustLevelImpact?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum ModerationConcernType {
  Phrase = 'phrase',
  Unknown = 'unknown'
}

export type MultiStepActionError = {
  __typename?: 'MultiStepActionError';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  message: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type MultiStepActionErrorInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  messageId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export enum MultiStepActionResult {
  ConfirmTokenMismatch = 'confirmTokenMismatch',
  DataValidationFailed = 'dataValidationFailed',
  DeviceNotFound = 'deviceNotFound',
  EmailMismatch = 'emailMismatch',
  EmailNotVerified = 'emailNotVerified',
  Error = 'error',
  Expired = 'expired',
  InvalidEmail = 'invalidEmail',
  MissingEmail = 'missingEmail',
  MissingPhoneNumber = 'missingPhoneNumber',
  NotFound = 'notFound',
  Ok = 'ok',
  Passed = 'passed',
  PasswordMismatch = 'passwordMismatch',
  PasswordUpdated = 'passwordUpdated',
  PhoneNumberInvalid = 'phoneNumberInvalid',
  PhoneNumberMismatch = 'phoneNumberMismatch',
  PhoneNumberNotVerified = 'phoneNumberNotVerified',
  SystemError = 'systemError',
  Unset = 'unset',
  UserFailedValidation = 'userFailedValidation',
  UserNotFound = 'userNotFound',
  UserNotSignedIn = 'userNotSignedIn'
}

export enum MultiStepActionSendNotificationResult {
  Failed = 'failed',
  Ok = 'ok',
  PhoneNumberInvalid = 'phoneNumberInvalid'
}

export enum MultiStepActionStatus {
  Created = 'created',
  Finished = 'finished',
  Started = 'started'
}

export enum MultiStepActionType {
  ResetPassword = 'resetPassword',
  TokenSignIn = 'tokenSignIn',
  Unset = 'unset',
  UpdateEmail = 'updateEmail',
  UpdatePassword = 'updatePassword',
  UpdatePhoneNumber = 'updatePhoneNumber',
  VerifyEmail = 'verifyEmail',
  VerifyEmailOnSignUp = 'verifyEmailOnSignUp',
  VerifyPhoneNumber = 'verifyPhoneNumber',
  VerifyPhoneNumberOnSignUp = 'verifyPhoneNumberOnSignUp'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptChannelInvitation: Scalars['String']['output'];
  acceptChannelInvitationV2: ServiceRequest;
  acceptWalletItemTransfer: ServiceRequest;
  addAppFeatureToUser: Scalars['String']['output'];
  addChannelMessageEvent: Scalars['String']['output'];
  addUserToGroup: ServiceRequest;
  archiveChannelForMe: Scalars['String']['output'];
  /** @deprecated Use blockUserForMeV2 */
  blockUserForMe: Scalars['String']['output'];
  blockUserForMeV2: ServiceRequest;
  clearMyShoppingCart: ServiceRequest;
  clearShoppingCart: ServiceRequest;
  createAcademicExperience: AcademicExperience;
  createAdminTask: AdminTask;
  createBusinessExperience: BusinessExperience;
  createChannel: Channel;
  createChannelInvitation: ChannelInvitation;
  createChannelMessage: ChannelMessage;
  createChannelParticipant: ChannelParticipant;
  createCompany: Company;
  createContact: Contact;
  createContentTag: ContentTag;
  createGroup: Group;
  createGroupMembership: ServiceRequest;
  createMenteesGroupMembership: ServiceRequest;
  createMentorsGroupMembership: ServiceRequest;
  createMultiStepAction: SidMultiStepActionProgress;
  createNotification: Notification;
  createNotificationTemplate: NotificationTemplate;
  createOneTimeAuthTokenForMe: Scalars['String']['output'];
  createPurchaseOrder: ServiceRequest;
  createShoppingCartItem: ShoppingCartItem;
  createSupportChannelConfig: SupportChannelConfig;
  createUploadedAsset: UploadedAsset;
  createUserDevice: UserDeviceWithoutAuth;
  createUserSearch: UserSearch;
  createUserTracking: Scalars['String']['output'];
  createWalletItem: WalletItem;
  createWalletItemTransfer: ServiceRequest;
  declineChannelInvitation: Scalars['String']['output'];
  declineChannelInvitationV2: ServiceRequest;
  declineWalletItemTransfer: ServiceRequest;
  deleteAcademicExperience: ServiceRequest;
  deleteAdminTask: ServiceRequest;
  deleteBusinessExperience: ServiceRequest;
  deleteChannel: Scalars['String']['output'];
  deleteChannelInvitation: Scalars['String']['output'];
  deleteChannelInvitationV2: ServiceRequest;
  deleteChannelMessage: Scalars['String']['output'];
  deleteChannelMessageV2: ServiceRequest;
  deleteChannelParticipant: Scalars['String']['output'];
  deleteChannelParticipantV2: ServiceRequest;
  deleteChannelV2: ServiceRequest;
  deleteCompany: ServiceRequest;
  deleteCompanyV2: ServiceRequest;
  deleteContentTag: ServiceRequest;
  deleteGroup: ServiceRequest;
  deleteGroupMembership: Scalars['String']['output'];
  deleteMyUser: Scalars['String']['output'];
  deleteMyUserV2: ServiceRequest;
  deleteNotification: Scalars['String']['output'];
  deleteNotificationTemplate: Scalars['String']['output'];
  deleteShoppingCartItem: ServiceRequest;
  deleteSupportChannelConfig: ServiceRequest;
  deleteUploadedAsset: UploadedAsset;
  deleteUser: Scalars['String']['output'];
  deleteUserSearch: ServiceRequest;
  deleteUserV2: Scalars['String']['output'];
  deleteWalletItem: ServiceRequest;
  deleteWalletItemTransfer: ServiceRequest;
  dismissChannelInvitationFromInbox: Scalars['String']['output'];
  dismissChannelInvitationFromInboxV2: ServiceRequest;
  /** @deprecated Use endMySessionV2 */
  endMySession: Scalars['String']['output'];
  endMySessionV2: Scalars['String']['output'];
  findAndUpdateAllMm2Users: Scalars['Boolean']['output'];
  initAssetUpload: UploadedAsset;
  markChannelMessagesAsSeenByMe: Scalars['String']['output'];
  markInAppMessageReceived: Scalars['String']['output'];
  removeAppFeatureFromUser: Scalars['String']['output'];
  removeUserFromGroup: ServiceRequest;
  reportUser: Scalars['String']['output'];
  runAdminTask: ServiceRequest;
  sendMultiStepActionNotification: Scalars['String']['output'];
  signInOauthUser: UserAuthResponse;
  signInUser: UserAuthResponse;
  signMeOut: Scalars['String']['output'];
  signUpUser: UserAuthResponse;
  /** @deprecated Use startMySessionV2 */
  startMySession: Scalars['String']['output'];
  startMySessionV2: ContentStatus;
  startResetPassword: SidMultiStepActionProgress;
  startVerifyEmail: SidMultiStepActionProgress;
  startVerifyPhoneNumber: SidMultiStepActionProgress;
  unarchiveChannelForMe: Scalars['String']['output'];
  /** @deprecated Use unblockUserForMeV2 */
  unblockUserForMe: Scalars['String']['output'];
  unblockUserForMeV2: ServiceRequest;
  updateAcademicExperience: ServiceRequest;
  updateAdminTask: AdminTask;
  updateBusinessExperience: ServiceRequest;
  updateChannel: Scalars['String']['output'];
  updateChannelInvitation: Scalars['String']['output'];
  updateChannelMessage: Scalars['String']['output'];
  updateChannelParticipant: Scalars['String']['output'];
  updateCompany: ServiceRequest;
  updateContact: Scalars['String']['output'];
  updateContentTag: ServiceRequest;
  updateGroup: ServiceRequest;
  updateGroupMembership: ServiceRequest;
  updateIqlaaGroupMembership: ServiceRequest;
  updateMastercardGroupMembership: ServiceRequest;
  updateMenteesGroupMembership: ServiceRequest;
  updateMentorsGroupMembership: ServiceRequest;
  updateMyUser: Scalars['String']['output'];
  updateNotification: Scalars['String']['output'];
  updateNotificationTemplate: Scalars['String']['output'];
  updateShoppingCartItem: ServiceRequest;
  updateSupportChannelConfig: ServiceRequest;
  updateUploadedAsset: Scalars['String']['output'];
  updateUser: Scalars['String']['output'];
  updateUserDevice: Scalars['String']['output'];
  updateUserSearch: ServiceRequest;
  updateWalletItem: ServiceRequest;
  updateWalletItemTransfer: ServiceRequest;
  updateWalletItemTransferPassword: ServiceRequest;
  verifyMultiStepActionToken: SidMultiStepActionProgress;
  verifyOneTimeAuthToken: Scalars['Boolean']['output'];
  verifyWalletItemTransferPassword: Scalars['Boolean']['output'];
};


export type MutationAcceptChannelInvitationArgs = {
  channelInvitationId: Scalars['String']['input'];
};


export type MutationAcceptChannelInvitationV2Args = {
  id: Scalars['String']['input'];
};


export type MutationAcceptWalletItemTransferArgs = {
  transferSecret: Scalars['String']['input'];
  transferSlug: Scalars['String']['input'];
};


export type MutationAddAppFeatureToUserArgs = {
  appFeature: AppFeature;
  filter?: InputMaybe<UserListFilter>;
  match?: InputMaybe<UserInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type MutationAddChannelMessageEventArgs = {
  input: BgAddChannelMessageEventInput;
};


export type MutationAddUserToGroupArgs = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  roles: Array<GroupMembershipRole>;
  userId: Scalars['String']['input'];
};


export type MutationArchiveChannelForMeArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationBlockUserForMeArgs = {
  notes?: InputMaybe<Scalars['String']['input']>;
  reasonTextId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationBlockUserForMeV2Args = {
  notes?: InputMaybe<Scalars['String']['input']>;
  reasonTextId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationClearShoppingCartArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateAcademicExperienceArgs = {
  input: AcademicExperienceInput;
};


export type MutationCreateAdminTaskArgs = {
  adminTaskInput: AdminTaskInput;
};


export type MutationCreateBusinessExperienceArgs = {
  input: BusinessExperienceInput;
};


export type MutationCreateChannelArgs = {
  input: ChannelInput;
};


export type MutationCreateChannelInvitationArgs = {
  input: ChannelInvitationInput;
};


export type MutationCreateChannelMessageArgs = {
  input: ChannelMessageInput;
};


export type MutationCreateChannelParticipantArgs = {
  input: ChannelParticipantInput;
};


export type MutationCreateCompanyArgs = {
  input: CompanyInput;
};


export type MutationCreateContactArgs = {
  input: ContactInput;
};


export type MutationCreateContentTagArgs = {
  input: ContentTagInput;
};


export type MutationCreateGroupArgs = {
  input: GroupInput;
};


export type MutationCreateGroupMembershipArgs = {
  input: GroupMembershipInput;
};


export type MutationCreateMenteesGroupMembershipArgs = {
  input: MenteesGroupMembershipInput;
};


export type MutationCreateMentorsGroupMembershipArgs = {
  input: MentorsGroupMembershipInput;
};


export type MutationCreateMultiStepActionArgs = {
  input: SidMultiStepActionInput;
};


export type MutationCreateNotificationArgs = {
  notificationInput: NotificationInput;
};


export type MutationCreateNotificationTemplateArgs = {
  notificationTemplateInput: NotificationTemplateInput;
};


export type MutationCreatePurchaseOrderArgs = {
  input: PurchaseOrderInput;
};


export type MutationCreateShoppingCartItemArgs = {
  input: ShoppingCartItemInput;
  options?: InputMaybe<UpdateObjectOptions>;
};


export type MutationCreateSupportChannelConfigArgs = {
  input: SupportChannelConfigInput;
};


export type MutationCreateUploadedAssetArgs = {
  input: UploadedAssetInput;
};


export type MutationCreateUserDeviceArgs = {
  input: UserDeviceInput;
};


export type MutationCreateUserSearchArgs = {
  input: UserSearchInput;
};


export type MutationCreateUserTrackingArgs = {
  input: UserTrackingInput;
};


export type MutationCreateWalletItemArgs = {
  input: WalletItemInput;
  options?: InputMaybe<UpdateObjectOptions>;
};


export type MutationCreateWalletItemTransferArgs = {
  input: WalletItemTransferInput;
};


export type MutationDeclineChannelInvitationArgs = {
  channelInvitationId: Scalars['String']['input'];
  reasonTextId: DeclineChannelInvitationReasonTextId;
};


export type MutationDeclineChannelInvitationV2Args = {
  id: Scalars['String']['input'];
  reasonTextId: DeclineChannelInvitationReasonTextId;
};


export type MutationDeclineWalletItemTransferArgs = {
  transferSlug: Scalars['String']['input'];
};


export type MutationDeleteAcademicExperienceArgs = {
  academicExperienceId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteAdminTaskArgs = {
  adminTaskId: Scalars['String']['input'];
};


export type MutationDeleteBusinessExperienceArgs = {
  businessExperienceId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelArgs = {
  anonymizePersonalData: Scalars['Boolean']['input'];
  channelId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelInvitationArgs = {
  channelInvitationId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelInvitationV2Args = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDeleteChannelMessageArgs = {
  channelMessageId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelMessageV2Args = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDeleteChannelParticipantArgs = {
  channelParticipantId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteChannelParticipantV2Args = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDeleteChannelV2Args = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDeleteCompanyArgs = {
  anonymizePersonalData: Scalars['Boolean']['input'];
  companyId: Scalars['String']['input'];
  deletePhysically: Scalars['Boolean']['input'];
};


export type MutationDeleteCompanyV2Args = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  companyId: Scalars['String']['input'];
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteContentTagArgs = {
  contentTagId: Scalars['String']['input'];
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteGroupArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  groupId: Scalars['String']['input'];
};


export type MutationDeleteGroupMembershipArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  groupMembershipId: Scalars['String']['input'];
};


export type MutationDeleteMyUserArgs = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  cause?: InputMaybe<Scalars['String']['input']>;
  deletePhysically: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteMyUserV2Args = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  cause?: InputMaybe<Scalars['String']['input']>;
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteNotificationArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  notificationId: Scalars['String']['input'];
};


export type MutationDeleteNotificationTemplateArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  notificationTemplateId: Scalars['String']['input'];
};


export type MutationDeleteShoppingCartItemArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDeleteSupportChannelConfigArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  supportChannelConfigId: Scalars['String']['input'];
};


export type MutationDeleteUploadedAssetArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  cause?: InputMaybe<Scalars['String']['input']>;
  deletePhysically: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationDeleteUserSearchArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  userSearchId: Scalars['String']['input'];
};


export type MutationDeleteUserV2Args = {
  anonymizePersonalData?: InputMaybe<Scalars['Boolean']['input']>;
  cause?: InputMaybe<Scalars['String']['input']>;
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  requester?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationDeleteWalletItemArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDeleteWalletItemTransferArgs = {
  deletePhysically?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationDismissChannelInvitationFromInboxArgs = {
  channelInvitationId: Scalars['String']['input'];
};


export type MutationDismissChannelInvitationFromInboxV2Args = {
  id: Scalars['String']['input'];
};


export type MutationEndMySessionArgs = {
  deviceUuid: Scalars['String']['input'];
};


export type MutationInitAssetUploadArgs = {
  input: UploadedAssetInput;
};


export type MutationMarkChannelMessagesAsSeenByMeArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationMarkInAppMessageReceivedArgs = {
  actionTaken: AppAction;
  notificationId: Scalars['String']['input'];
};


export type MutationRemoveAppFeatureFromUserArgs = {
  appFeature: AppFeature;
  filter?: InputMaybe<UserListFilter>;
  match?: InputMaybe<UserInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type MutationRemoveUserFromGroupArgs = {
  force: Scalars['Boolean']['input'];
  groupId?: InputMaybe<Scalars['String']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationReportUserArgs = {
  input: ReportUserInput;
};


export type MutationRunAdminTaskArgs = {
  adminTaskId: Scalars['String']['input'];
};


export type MutationSendMultiStepActionNotificationArgs = {
  input: SendMultiStepActionNotificationInput;
};


export type MutationSignInOauthUserArgs = {
  input: SignInOauthUserInput;
};


export type MutationSignInUserArgs = {
  input: SignInUserInput;
};


export type MutationSignUpUserArgs = {
  input: SignUpUserInput;
};


export type MutationStartMySessionArgs = {
  deviceUuid: Scalars['String']['input'];
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStartMySessionV2Args = {
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
  returnContentStatus?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationStartResetPasswordArgs = {
  input: UserIdentInput;
};


export type MutationStartVerifyEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationStartVerifyPhoneNumberArgs = {
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnarchiveChannelForMeArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationUnblockUserForMeArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUnblockUserForMeV2Args = {
  userId: Scalars['String']['input'];
};


export type MutationUpdateAcademicExperienceArgs = {
  input: AcademicExperienceInput;
};


export type MutationUpdateAdminTaskArgs = {
  adminTaskInput: AdminTaskInput;
};


export type MutationUpdateBusinessExperienceArgs = {
  input: BusinessExperienceInput;
};


export type MutationUpdateChannelArgs = {
  input: ChannelInput;
};


export type MutationUpdateChannelInvitationArgs = {
  input: ChannelInvitationInput;
};


export type MutationUpdateChannelMessageArgs = {
  input: ChannelMessageInput;
};


export type MutationUpdateChannelParticipantArgs = {
  input: ChannelParticipantInput;
};


export type MutationUpdateCompanyArgs = {
  input: CompanyInput;
};


export type MutationUpdateContactArgs = {
  input: ContactInput;
};


export type MutationUpdateContentTagArgs = {
  input: ContentTagInput;
};


export type MutationUpdateGroupArgs = {
  input: GroupInput;
};


export type MutationUpdateGroupMembershipArgs = {
  input: GroupMembershipInput;
};


export type MutationUpdateIqlaaGroupMembershipArgs = {
  input: IqlaaGroupMembershipInput;
};


export type MutationUpdateMastercardGroupMembershipArgs = {
  input: MastercardGroupMembershipInput;
};


export type MutationUpdateMenteesGroupMembershipArgs = {
  input: MenteesGroupMembershipInput;
};


export type MutationUpdateMentorsGroupMembershipArgs = {
  input: MentorsGroupMembershipInput;
};


export type MutationUpdateMyUserArgs = {
  input: MyUserInput;
};


export type MutationUpdateNotificationArgs = {
  notificationInput: NotificationInput;
};


export type MutationUpdateNotificationTemplateArgs = {
  notificationTemplateInput: NotificationTemplateInput;
};


export type MutationUpdateShoppingCartItemArgs = {
  input: ShoppingCartItemInput;
  options?: InputMaybe<UpdateObjectOptions>;
};


export type MutationUpdateSupportChannelConfigArgs = {
  input: SupportChannelConfigInput;
};


export type MutationUpdateUploadedAssetArgs = {
  input: UploadedAssetInput;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
};


export type MutationUpdateUserDeviceArgs = {
  input: UserDeviceInput;
};


export type MutationUpdateUserSearchArgs = {
  input: UserSearchInput;
};


export type MutationUpdateWalletItemArgs = {
  input: WalletItemInput;
  options?: InputMaybe<UpdateObjectOptions>;
};


export type MutationUpdateWalletItemTransferArgs = {
  input: WalletItemTransferInput;
  options?: InputMaybe<UpdateObjectOptions>;
};


export type MutationUpdateWalletItemTransferPasswordArgs = {
  password: Scalars['String']['input'];
  transferSecret: Scalars['String']['input'];
  transferSlug: Scalars['String']['input'];
};


export type MutationVerifyMultiStepActionTokenArgs = {
  input: VerifyMultiStepActionTokenInput;
};


export type MutationVerifyOneTimeAuthTokenArgs = {
  input: VerifyOneTimeAuthTokenInput;
};


export type MutationVerifyWalletItemTransferPasswordArgs = {
  password: Scalars['String']['input'];
  transferSlug: Scalars['String']['input'];
};

export type MyUser = {
  __typename?: 'MyUser';
  academicExperienceIds?: Maybe<Array<Scalars['ID']['output']>>;
  academicExperiences?: Maybe<Array<AcademicExperience>>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  anonymizedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  appFeatures?: Maybe<Array<AppFeature>>;
  avatarAsset?: Maybe<UploadedAsset>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  birthYear?: Maybe<Scalars['Int']['output']>;
  businessExperienceIds?: Maybe<Array<Scalars['ID']['output']>>;
  businessExperiences?: Maybe<Array<BusinessExperience>>;
  channelInvitations: Array<ChannelInvitation>;
  channelParticipants: Array<ChannelParticipant>;
  channels: Array<Channel>;
  cityOfOrigin?: Maybe<Scalars['String']['output']>;
  cityOfResidence?: Maybe<Scalars['String']['output']>;
  companies?: Maybe<Array<Company>>;
  companyIds?: Maybe<Array<Scalars['ID']['output']>>;
  countryOfOrigin?: Maybe<Country>;
  countryOfOriginTextId?: Maybe<Scalars['String']['output']>;
  countryOfResidence?: Maybe<Country>;
  countryOfResidenceTextId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally. */
  discoverable?: Maybe<Scalars['Boolean']['output']>;
  educationLevel?: Maybe<EducationLevel>;
  educationLevelTextId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** The source of the email address, e.g. "google", "facebook", etc. */
  emailSource?: Maybe<Scalars['String']['output']>;
  emailUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  endorsements?: Maybe<Array<EndorsementWithTypes>>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  externalGroupIds: Array<Scalars['ID']['output']>;
  fallbackUiLanguage: Language;
  fallbackUiLanguageTextId?: Maybe<UiLanguage>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  /** This attribute is only used by the MM2 synchronizer. */
  genderSelfDescribed?: Maybe<Scalars['String']['output']>;
  genderTextId?: Maybe<Scalars['String']['output']>;
  groupIds: Array<Scalars['ID']['output']>;
  groupMembers: Array<IGroupMembership>;
  groupMemberships: Array<IGroupMembership>;
  groups: Array<Group>;
  /** Records whether a user has logged into MM2. */
  hasSignedInToMm2?: Maybe<Scalars['Boolean']['output']>;
  /** Records whether a user has logged into MM3. */
  hasSignedInToMm3?: Maybe<Scalars['Boolean']['output']>;
  hasTrainings: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  inactivatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  inactivatedBy?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use findMyInbox */
  inbox: UserInbox;
  inviteCode?: Maybe<Scalars['String']['output']>;
  isEmailVerified: Scalars['Boolean']['output'];
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified: Scalars['Boolean']['output'];
  isTestUser?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestActivityAt?: Maybe<Scalars['DateTimeISO']['output']>;
  latestUserDevice: UserDeviceWithoutAuth;
  /** This attribute is a copy of the mentee group membership. */
  mentee?: Maybe<MenteesGroupMembership>;
  /** This attribute is a copy of the mentor group membership. */
  mentor?: Maybe<MentorsGroupMembership>;
  metadata?: Maybe<UserMetadata>;
  /** For MM2 users, this means a profile is completed. */
  mm2BasicAccountCompleted?: Maybe<Scalars['Boolean']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This is the MM2 password hash. */
  mm2PasswordHash?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2PhotoOriginal?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ProfileId?: Maybe<Scalars['String']['output']>;
  offersHelp?: Maybe<Scalars['Boolean']['output']>;
  onboardingStage?: Maybe<Scalars['String']['output']>;
  optIntoNewsletter?: Maybe<Scalars['Boolean']['output']>;
  /** Records whether a user was originally created in MM2. */
  originatedInMm2?: Maybe<Scalars['Boolean']['output']>;
  parentGroupIds: Array<Scalars['ID']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  personalBio?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<UserPreferences>;
  preferredLanguage?: Maybe<Language>;
  preferredLanguageTextId?: Maybe<Scalars['String']['output']>;
  preferredUiLanguage?: Maybe<Language>;
  profileCompletionPercentage: Scalars['Int']['output'];
  profileRole: UserProfileRole;
  profileRoleHistory?: Maybe<Array<UserProfileRoleHistoryItem>>;
  pronouns: Array<Pronoun>;
  pronounsDisplay: Scalars['String']['output'];
  pronounsTextIds?: Maybe<Array<Scalars['String']['output']>>;
  regionOfOrigin?: Maybe<Scalars['String']['output']>;
  regionOfResidence?: Maybe<Scalars['String']['output']>;
  roles: Array<UserRole>;
  seeksHelp?: Maybe<Scalars['Boolean']['output']>;
  selectedUiLanguageTextId?: Maybe<UiLanguage>;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  signedOutAt?: Maybe<Scalars['DateTimeISO']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  spokenLanguages: Array<Language>;
  spokenLanguagesTextIds: Array<Scalars['String']['output']>;
  ssoIdp?: Maybe<Scalars['String']['output']>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  termsAndConditionsAcceptedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trustLevel: Scalars['Int']['output'];
  unreadInAppMessages: Array<Notification>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  uploadedAssets: Array<UploadedAsset>;
  userBlocks?: Maybe<Array<UserBlock>>;
  userDevices: Array<UserDeviceWithoutAuth>;
  userHandle?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<LabeledStringValue>>;
  yearsManagementExperience?: Maybe<Scalars['Int']['output']>;
  yearsOwnershipExperience?: Maybe<Scalars['Int']['output']>;
};


export type MyUserChannelsArgs = {
  mustBeAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  mustHaveMessages?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
};

export type MyUserInput = {
  academicExperienceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify a list of academic experiences you want to create for the user. */
  academicExperiences?: InputMaybe<Array<AcademicExperienceInput>>;
  addToGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  appFeatures?: InputMaybe<Array<AppFeature>>;
  authType?: InputMaybe<AuthType>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  businessExperienceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify a list of business experiences you want to create for the user. */
  businessExperiences?: InputMaybe<Array<BusinessExperienceInput>>;
  cityOfOrigin?: InputMaybe<Scalars['String']['input']>;
  cityOfResidence?: InputMaybe<Scalars['String']['input']>;
  /** Used internally, will not work in GraphQL queries. */
  companies?: InputMaybe<Array<CompanyInput>>;
  /** Specify a company you want to create and add the user to. */
  company?: InputMaybe<CompanyInput>;
  companyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Users Country of origin. Use a Country Options textId. */
  countryOfOriginTextId?: InputMaybe<Scalars['String']['input']>;
  countryOfResidenceTextId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  discoverable?: InputMaybe<Scalars['Boolean']['input']>;
  educationLevelTextId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** The source of the email address, e.g. "google", "facebook", etc. */
  emailSource?: InputMaybe<Scalars['String']['input']>;
  emailUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  externalGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  fallbackUiLanguageTextId?: InputMaybe<UiLanguage>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  genderTextId?: InputMaybe<Scalars['String']['input']>;
  groupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  groupMemberships?: InputMaybe<Array<GroupMembershipInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inactivatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  inactivatedBy?: InputMaybe<Scalars['ID']['input']>;
  inviteCode?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isOnVacation?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isTestUser?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latestActivityAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  offersHelp?: InputMaybe<Scalars['Boolean']['input']>;
  onboardingStage?: InputMaybe<Scalars['String']['input']>;
  optIntoNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  parentGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  personalBio?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<UserPreferencesInput>;
  preferredLanguageTextId?: InputMaybe<Scalars['String']['input']>;
  profileRoleHistory?: InputMaybe<Array<UserProfileRoleHistoryItemInput>>;
  pronounsTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  regionOfOrigin?: InputMaybe<Scalars['String']['input']>;
  regionOfResidence?: InputMaybe<Scalars['String']['input']>;
  removeFromGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  roles?: InputMaybe<Array<UserRole>>;
  seeksHelp?: InputMaybe<Scalars['Boolean']['input']>;
  selectedUiLanguageTextId?: InputMaybe<UiLanguage>;
  signedInAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  signedOutAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  spokenLanguagesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  ssoIdp?: InputMaybe<Scalars['String']['input']>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  syncedToAnalyticsAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  termsAndConditionsAcceptedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trustLevel?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
  websites?: InputMaybe<Array<LabeledStringValueInput>>;
  yearsManagementExperience?: InputMaybe<Scalars['Int']['input']>;
  yearsOwnershipExperience?: InputMaybe<Scalars['Int']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  action0?: Maybe<AppAction>;
  action1?: Maybe<AppAction>;
  action2?: Maybe<AppAction>;
  actionTaken?: Maybe<AppAction>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  appLink: Scalars['String']['output'];
  context?: Maybe<NotificationContext>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  emailSendReport: Scalars['String']['output'];
  emailSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  htmlMessage: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inAppMessageReceivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  inAppMessageSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  initiatorId: Scalars['ID']['output'];
  isTranslated?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  messageText: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  multiStepActionId: Scalars['ID']['output'];
  notificationType: NotificationType;
  pushNotificationSendReport: Scalars['String']['output'];
  pushNotificationSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  recipientId: Scalars['ID']['output'];
  replyingToId: Scalars['ID']['output'];
  sendEmail: Scalars['Boolean']['output'];
  sendInAppMessage: Scalars['Boolean']['output'];
  sendPushNotification: Scalars['Boolean']['output'];
  sendSms: Scalars['Boolean']['output'];
  sentMessagesCount: Scalars['Int']['output'];
  shortMessageText: Scalars['String']['output'];
  smsSendReport: Scalars['String']['output'];
  smsSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  templateId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type NotificationContext = {
  __typename?: 'NotificationContext';
  appLink?: Maybe<Scalars['String']['output']>;
  confirmToken?: Maybe<Scalars['String']['output']>;
  displayedUserBusinessOrJobTitle?: Maybe<Scalars['String']['output']>;
  displayedUserCountry?: Maybe<Scalars['String']['output']>;
  displayedUserEmail?: Maybe<Scalars['String']['output']>;
  /** The first name of the user who appears in a notification */
  displayedUserFirstName?: Maybe<Scalars['String']['output']>;
  displayedUserFullName?: Maybe<Scalars['String']['output']>;
  /** The user id of the user who appears in a notification */
  displayedUserId?: Maybe<Scalars['String']['output']>;
  displayedUserLastName?: Maybe<Scalars['String']['output']>;
  displayedUserPhoneNumber?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  recipientEmail?: Maybe<Scalars['String']['output']>;
  recipientFirstName?: Maybe<Scalars['String']['output']>;
  recipientFullName?: Maybe<Scalars['String']['output']>;
  recipientId?: Maybe<Scalars['String']['output']>;
  recipientLastName?: Maybe<Scalars['String']['output']>;
  recipientPhoneNumber?: Maybe<Scalars['String']['output']>;
  senderEmail?: Maybe<Scalars['String']['output']>;
  senderFirstName?: Maybe<Scalars['String']['output']>;
  senderFullName?: Maybe<Scalars['String']['output']>;
  senderId?: Maybe<Scalars['String']['output']>;
  senderLastName?: Maybe<Scalars['String']['output']>;
  senderPhoneNumber?: Maybe<Scalars['String']['output']>;
  textDirection?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type NotificationInput = {
  action0?: InputMaybe<AppAction>;
  action1?: InputMaybe<AppAction>;
  action2?: InputMaybe<AppAction>;
  actionTaken?: InputMaybe<AppAction>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  allowSendingToSuspendedUser?: InputMaybe<Scalars['Boolean']['input']>;
  appLink?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<NotificationInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  emailSendReport?: InputMaybe<Scalars['String']['input']>;
  emailSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  htmlMessage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inAppMessageReceivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  inAppMessageSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  initiatorId?: InputMaybe<Scalars['ID']['input']>;
  isTranslated?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<UiLanguage>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  multiStepActionId?: InputMaybe<Scalars['ID']['input']>;
  notificationType?: InputMaybe<NotificationType>;
  pushNotificationSendReport?: InputMaybe<Scalars['String']['input']>;
  pushNotificationSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  recipientId?: InputMaybe<Scalars['ID']['input']>;
  replyingToId?: InputMaybe<Scalars['ID']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sendInAppMessage?: InputMaybe<Scalars['Boolean']['input']>;
  sendPushNotification?: InputMaybe<Scalars['Boolean']['input']>;
  sendSms?: InputMaybe<Scalars['Boolean']['input']>;
  sentMessagesCount?: InputMaybe<Scalars['Int']['input']>;
  shortMessageText?: InputMaybe<Scalars['String']['input']>;
  smsSendReport?: InputMaybe<Scalars['String']['input']>;
  smsSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
  templateName?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export enum NotificationMethod {
  Auto = 'auto',
  Email = 'email',
  InAppNotification = 'inAppNotification',
  Off = 'off',
  PushNotification = 'pushNotification',
  Sms = 'sms'
}

export type NotificationOptions = {
  __typename?: 'NotificationOptions';
  enableEmail?: Maybe<Scalars['Boolean']['output']>;
  enableInAppMessage?: Maybe<Scalars['Boolean']['output']>;
  enablePushNotification?: Maybe<Scalars['Boolean']['output']>;
  enableSms?: Maybe<Scalars['Boolean']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  notificationType: NotificationType;
};

export type NotificationOptionsInput = {
  enableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  enableInAppMessage?: InputMaybe<Scalars['Boolean']['input']>;
  enablePushNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSms?: InputMaybe<Scalars['Boolean']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  notificationType?: InputMaybe<NotificationType>;
};

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  action0?: Maybe<AppAction>;
  action1?: Maybe<AppAction>;
  action2?: Maybe<AppAction>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description: Scalars['String']['output'];
  events?: Maybe<Array<ModelEvent>>;
  htmlMessageAr: Scalars['String']['output'];
  htmlMessageEn: Scalars['String']['output'];
  htmlMessageEs: Scalars['String']['output'];
  htmlMessageId: Scalars['String']['output'];
  htmlMessageRu: Scalars['String']['output'];
  htmlMessageSo: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCore: Scalars['Boolean']['output'];
  messageTextAr: Scalars['String']['output'];
  messageTextEn: Scalars['String']['output'];
  messageTextEs: Scalars['String']['output'];
  messageTextId: Scalars['String']['output'];
  messageTextRu: Scalars['String']['output'];
  messageTextSo: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  name: NotificationTemplateName;
  sendEmail: Scalars['Boolean']['output'];
  sendInAppMessage: Scalars['Boolean']['output'];
  sendPushNotification: Scalars['Boolean']['output'];
  sendSms: Scalars['Boolean']['output'];
  senderEmail?: Maybe<Scalars['String']['output']>;
  senderName?: Maybe<Scalars['String']['output']>;
  shortMessageTextAr: Scalars['String']['output'];
  shortMessageTextEn: Scalars['String']['output'];
  shortMessageTextEs: Scalars['String']['output'];
  shortMessageTextId: Scalars['String']['output'];
  shortMessageTextRu: Scalars['String']['output'];
  shortMessageTextSo: Scalars['String']['output'];
  titleAr: Scalars['String']['output'];
  titleEn: Scalars['String']['output'];
  titleEs: Scalars['String']['output'];
  titleId: Scalars['String']['output'];
  titleRu: Scalars['String']['output'];
  titleSo: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  version: Scalars['String']['output'];
};

export type NotificationTemplateInput = {
  action0?: InputMaybe<AppAction>;
  action1?: InputMaybe<AppAction>;
  action2?: InputMaybe<AppAction>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  htmlMessageAr?: InputMaybe<Scalars['String']['input']>;
  htmlMessageEn?: InputMaybe<Scalars['String']['input']>;
  htmlMessageEs?: InputMaybe<Scalars['String']['input']>;
  htmlMessageId?: InputMaybe<Scalars['String']['input']>;
  htmlMessageRu?: InputMaybe<Scalars['String']['input']>;
  htmlMessageSo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isCore?: InputMaybe<Scalars['Boolean']['input']>;
  messageTextAr?: InputMaybe<Scalars['String']['input']>;
  messageTextEn?: InputMaybe<Scalars['String']['input']>;
  messageTextEs?: InputMaybe<Scalars['String']['input']>;
  messageTextId?: InputMaybe<Scalars['String']['input']>;
  messageTextRu?: InputMaybe<Scalars['String']['input']>;
  messageTextSo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<NotificationTemplateName>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sendInAppMessage?: InputMaybe<Scalars['Boolean']['input']>;
  sendPushNotification?: InputMaybe<Scalars['Boolean']['input']>;
  sendSms?: InputMaybe<Scalars['Boolean']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
  senderName?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextAr?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextEn?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextEs?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextId?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextRu?: InputMaybe<Scalars['String']['input']>;
  shortMessageTextSo?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
  titleAr?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
  titleEs?: InputMaybe<Scalars['String']['input']>;
  titleId?: InputMaybe<Scalars['String']['input']>;
  titleRu?: InputMaybe<Scalars['String']['input']>;
  titleSo?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum NotificationTemplateName {
  AccountDeletedConfirmation = 'accountDeletedConfirmation',
  ChannelInvitationAcceptedForMentee = 'channelInvitationAcceptedForMentee',
  ChannelInvitationAcceptedForMentor = 'channelInvitationAcceptedForMentor',
  ChannelInvitationDeclinedForMentee = 'channelInvitationDeclinedForMentee',
  ChannelInvitationDeclinedForMentor = 'channelInvitationDeclinedForMentor',
  ChannelInvitationReceivedForMentee = 'channelInvitationReceivedForMentee',
  ChannelInvitationReceivedForMentor = 'channelInvitationReceivedForMentor',
  ChannelMessageReceivedForMentee = 'channelMessageReceivedForMentee',
  ChannelMessageReceivedForMentor = 'channelMessageReceivedForMentor',
  CompleteProfileForMentee = 'completeProfileForMentee',
  CompleteProfileForMentor = 'completeProfileForMentor',
  CompleteSignUpForMentee = 'completeSignUpForMentee',
  CompleteSignUpForMentor = 'completeSignUpForMentor',
  MatchesRecommendationsForMentee = 'matchesRecommendationsForMentee',
  MatchesRecommendationsForMentor = 'matchesRecommendationsForMentor',
  NewPrivacyRules = 'newPrivacyRules',
  Newsletter = 'newsletter',
  ResetPasswordConfirmToken = 'resetPasswordConfirmToken',
  ResetPasswordConfirmation = 'resetPasswordConfirmation',
  SendFirstInvitationForMentee = 'sendFirstInvitationForMentee',
  SendFirstInvitationForMentor = 'sendFirstInvitationForMentor',
  Unset = 'unset',
  WelcomeForMentee = 'welcomeForMentee',
  WelcomeForMentor = 'welcomeForMentor'
}

export enum NotificationType {
  AccountDeletedConfirmation = 'accountDeletedConfirmation',
  ChannelInvitationAccepted = 'channelInvitationAccepted',
  ChannelInvitationDeclined = 'channelInvitationDeclined',
  ChannelInvitationReceived = 'channelInvitationReceived',
  ChannelMessageReceived = 'channelMessageReceived',
  CompleteProfile = 'completeProfile',
  CompleteSignUp = 'completeSignUp',
  MatchesRecommendations = 'matchesRecommendations',
  NewPrivacyRules = 'newPrivacyRules',
  Newsletter = 'newsletter',
  ResetPasswordConfirmToken = 'resetPasswordConfirmToken',
  ResetPasswordConfirmation = 'resetPasswordConfirmation',
  SendFirstInvitation = 'sendFirstInvitation',
  Unset = 'unset',
  Welcome = 'welcome'
}

export type ObjectChangedEvent = {
  __typename?: 'ObjectChangedEvent';
  messageType: ObjectChangedEventType;
  modelType: ModelType;
  object?: Maybe<BaseModel>;
  objectId: Scalars['ID']['output'];
  ownerUserId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  serviceRequest: ServiceRequest;
};

export enum ObjectChangedEventType {
  Anonymized = 'anonymized',
  Created = 'created',
  Deleted = 'deleted',
  Updated = 'updated'
}

export type Option = {
  __typename?: 'Option';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export enum OptionType {
  BlockUserReason = 'blockUserReason',
  CompanyStage = 'companyStage',
  CompanyType = 'companyType',
  ContactType = 'contactType',
  ContentTagType = 'contentTagType',
  Country = 'country',
  DeclineChannelInvitationReason = 'declineChannelInvitationReason',
  EducationLevel = 'educationLevel',
  ErrorCode = 'errorCode',
  Ethnicity = 'ethnicity',
  Expertise = 'expertise',
  Gender = 'gender',
  IndonesianCity = 'indonesianCity',
  IndonesianProvince = 'indonesianProvince',
  Industry = 'industry',
  IqlaaJordanianDistrict = 'iqlaaJordanianDistrict',
  IqlaaJordanianGovernorate = 'iqlaaJordanianGovernorate',
  Language = 'language',
  Mm2Expertise = 'mm2Expertise',
  Mm2Industry = 'mm2Industry',
  NotificationTypeOption = 'notificationTypeOption',
  Pronoun = 'pronoun',
  ReportUserReason = 'reportUserReason',
  Unset = 'unset'
}

export type ProductCategory = {
  __typename?: 'ProductCategory';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  importId: Scalars['String']['output'];
  labelEn: Scalars['String']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  name: Scalars['String']['output'];
  sortIndex: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type ProductCategoryInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortIndex?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductCategoryListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export enum ProductType {
  GiftCard = 'giftCard',
  Other = 'other'
}

export type Pronoun = {
  __typename?: 'Pronoun';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  adminNotes?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  items: Array<PurchaseOrderItem>;
  metadata?: Maybe<BaseModelMetadata>;
  paidAt?: Maybe<Scalars['DateTimeISO']['output']>;
  refundedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  shoppingCartId: Scalars['ID']['output'];
  sumItemPrice: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
  vat: Scalars['Int']['output'];
};

export type PurchaseOrderInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  canceledAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  paidAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  refundedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  shoppingCartId?: InputMaybe<Scalars['ID']['input']>;
  sumItemPrice?: InputMaybe<Scalars['Int']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  vat?: InputMaybe<Scalars['Int']['input']>;
};

export type PurchaseOrderItem = {
  __typename?: 'PurchaseOrderItem';
  adminNotes?: Maybe<Scalars['String']['output']>;
  brandId: Scalars['ID']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  purchaseOrderId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  shoppingCartItemId: Scalars['ID']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type PurchaseOrderItemInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  purchaseOrderId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shoppingCartItemId?: InputMaybe<Scalars['ID']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type PurchaseOrderItemListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PurchaseOrderListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Query = {
  __typename?: 'Query';
  apiVersion: Scalars['String']['output'];
  doesUserExist: Scalars['Boolean']['output'];
  find1On1Channel?: Maybe<Channel>;
  findAdminTaskById?: Maybe<AdminTask>;
  findAdminTaskDefs: Array<AdminTaskDef>;
  findAvailableUserHandle: Scalars['String']['output'];
  findBrands: Array<Brand>;
  findChannelById?: Maybe<Channel>;
  findChannelInvitationById?: Maybe<ChannelInvitation>;
  findChannelInvitationsBetweenUsers: Array<ChannelInvitation>;
  findChannelInvitationsForUser: Array<ChannelInvitation>;
  findChannelMessageById?: Maybe<ChannelMessage>;
  findChannelMessages: Array<ChannelMessage>;
  findChannelParticipantById?: Maybe<ChannelParticipant>;
  findChannelParticipants: Array<ChannelParticipant>;
  findChannelParticipantsForChannel: Array<ChannelParticipant>;
  findChannels: Array<Channel>;
  findChannelsForUser: Array<Channel>;
  findCompanyStages: Array<CompanyStage>;
  findCompanyTypes: Array<CompanyType>;
  findContact?: Maybe<Contact>;
  findContactById?: Maybe<Contact>;
  findContacts: Array<ContactListItem>;
  findCountries: Array<Country>;
  findDeclineChannelInvitationReasons: Array<DeclineChannelInvitationReason>;
  findEducationLevels: Array<EducationLevel>;
  findErrorCodes: Array<ErrorCodeOption>;
  findExpertises: Array<Expertise>;
  findGenders: Array<Gender>;
  findGiftCardProducts: Array<GiftCardProduct>;
  findGroupById?: Maybe<Group>;
  findGroupByIdent?: Maybe<Group>;
  findGroupCmsByGroupId?: Maybe<GroupCms>;
  findGroupCmsByGroupIdent?: Maybe<GroupCms>;
  findGroupCmsById?: Maybe<GroupCms>;
  findGroupMembershipById?: Maybe<GroupMembership>;
  findGroupMemberships: Array<IGroupMembership>;
  findGroups: Array<Group>;
  findIndonesianCities: Array<IndonesianCity>;
  findIndonesianProvinces: Array<IndonesianProvince>;
  findIndustries: Array<Industry>;
  findIqlaaJordanianDistricts: Array<IqlaaJordanianDistrict>;
  findIqlaaJordanianGovernorates: Array<IqlaaJordanianGovernorate>;
  findLanguages: Array<Language>;
  findLatestTrainingSessionForMe?: Maybe<TrainingSession>;
  findMarketplaceServiceRecord: MarketplaceServiceRecord;
  findMastercardBanks: Array<MastercardBank>;
  /** @deprecated Use findMyActiveMultiStepActions instead */
  findMyActiveMultiStepAction: Array<SidMultiStepAction>;
  findMyActiveMultiStepActions: Array<SidMultiStepAction>;
  findMyBlockedUsers: Array<User>;
  findMyChannels: Array<Channel>;
  findMyChannelsV2: Array<ChannelListItem>;
  findMyInbox: UserInbox;
  findMyShoppingCart: ShoppingCart;
  findMyUser: MyUser;
  findMyUserDevices: Array<UserDeviceWithoutAuth>;
  findMyWallet: Wallet;
  findOptions: Array<Option>;
  findPendingChannelInvitationsForUser: Array<ChannelInvitation>;
  findProductCategories: Array<ProductCategory>;
  findPronouns: Array<Pronoun>;
  findPurchaseOrderById?: Maybe<PurchaseOrder>;
  findPurchaseOrderItems: Array<PurchaseOrderItem>;
  findPurchaseOrders: Array<PurchaseOrder>;
  findReportUserReasons: Array<ReportUserReason>;
  findServiceRequestById?: Maybe<ServiceRequest>;
  findShoppingCartItemById?: Maybe<ShoppingCartItem>;
  findShoppingCartItems: Array<ShoppingCartItem>;
  findShoppingCarts: Array<ShoppingCart>;
  findTrainingById?: Maybe<Training>;
  findTrainingSessionById?: Maybe<TrainingSession>;
  /** Find training sessions by training  id. By default, finds the requestor's sessions. */
  findTrainingSessionsByTrainingId: Array<TrainingSession>;
  findTrainingSessionsForMe: Array<TrainingSession>;
  findTrainingsForMe: Array<Training>;
  findTrainingsForUser: Array<Training>;
  findUploadedAssetById?: Maybe<UploadedAsset>;
  findUploadedAssets: Array<UploadedAsset>;
  findUploadedAssetsForUser: Array<UploadedAsset>;
  findUserById?: Maybe<User>;
  findUserByIdent: User;
  findUserCmsByUserId?: Maybe<UserCms>;
  findUserDeviceById?: Maybe<UserDeviceWithoutAuth>;
  findUserDevices: Array<UserDeviceWithoutAuth>;
  findUserSearchById?: Maybe<UserSearch>;
  findUserSearchResults: Array<UserWithScore>;
  findUserSearches: Array<UserSearch>;
  findUsers: Array<UserListItem>;
  findWalletItemById?: Maybe<WalletItem>;
  findWalletItemByTransferSlug?: Maybe<WalletItem>;
  findWalletItemTransferById?: Maybe<WalletItemTransfer>;
  findWalletItemTransferByTransferSlug?: Maybe<WalletItemTransfer>;
  findWalletItemTransferRecipientInfoByTransferSlug?: Maybe<WalletItemTransferRecipientInfo>;
  findWalletItemTransfers: Array<WalletItemTransfer>;
  findWalletItems: Array<WalletItem>;
  findWalletServiceRecord: WalletServiceRecord;
  findWallets: Array<Wallet>;
  getMultiStepActionProgress: SidMultiStepActionProgress;
  /** @deprecated Use findMyBlockedUsers */
  getMyBlockedUsers: Array<User>;
  /** @deprecated Use findMyUser */
  getMyUser: User;
  isUserIdentAvailable: Scalars['Boolean']['output'];
  myChannelInvitations: Array<ChannelInvitation>;
  myGroupMemberships: Array<IGroupMembership>;
  /** @deprecated use findMyInbox */
  myInbox: UserInbox;
  myUserSearches: Array<UserSearch>;
  userWillReceiveWelcomeMessage: Scalars['Boolean']['output'];
  verifyMyPassword: Scalars['String']['output'];
};


export type QueryDoesUserExistArgs = {
  ident: Scalars['String']['input'];
  identType: UserIdentType;
};


export type QueryFind1On1ChannelArgs = {
  userIds: Array<Scalars['String']['input']>;
};


export type QueryFindAdminTaskByIdArgs = {
  adminTaskId: Scalars['String']['input'];
};


export type QueryFindAvailableUserHandleArgs = {
  startValue: Scalars['String']['input'];
};


export type QueryFindBrandsArgs = {
  filter?: InputMaybe<BrandListFilter>;
  match?: InputMaybe<BrandInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindChannelByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelInvitationByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelInvitationsBetweenUsersArgs = {
  onlyPending?: InputMaybe<Scalars['Boolean']['input']>;
  onlyUnseen?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userIds: Array<Scalars['String']['input']>;
};


export type QueryFindChannelInvitationsForUserArgs = {
  direction?: InputMaybe<ChannelInvitationDirection>;
  onlyPending?: InputMaybe<Scalars['Boolean']['input']>;
  onlyUnseen?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindChannelMessageByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelMessagesArgs = {
  filter?: InputMaybe<ChannelMessageListFilter>;
  match?: InputMaybe<ChannelMessageInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindChannelParticipantByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindChannelParticipantsArgs = {
  filter?: InputMaybe<ChannelParticipantListFilter>;
  match?: InputMaybe<ChannelParticipantInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindChannelParticipantsForChannelArgs = {
  channelId: Scalars['String']['input'];
  match?: InputMaybe<ChannelParticipantInput>;
};


export type QueryFindChannelsArgs = {
  filter?: InputMaybe<ChannelListFilter>;
  match?: InputMaybe<ChannelInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindChannelsForUserArgs = {
  mustBeAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  mustHaveMessages?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindCompanyStagesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindCompanyTypesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindContactArgs = {
  createIfNotExist?: InputMaybe<Scalars['Boolean']['input']>;
  match: ContactInput;
};


export type QueryFindContactByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindContactsArgs = {
  filter?: InputMaybe<SidContactListFilter>;
  match?: InputMaybe<ContactInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindCountriesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindDeclineChannelInvitationReasonsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindEducationLevelsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindErrorCodesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindExpertisesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
  isParent?: InputMaybe<Scalars['Boolean']['input']>;
  parentTextId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindGendersArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindGiftCardProductsArgs = {
  filter?: InputMaybe<GiftCardProductListFilter>;
  match?: InputMaybe<GiftCardProductInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindGroupByIdentArgs = {
  groupIdent: Scalars['String']['input'];
};


export type QueryFindGroupCmsByGroupIdArgs = {
  groupId: Scalars['String']['input'];
};


export type QueryFindGroupCmsByGroupIdentArgs = {
  groupIdent: Scalars['String']['input'];
};


export type QueryFindGroupCmsByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindGroupMembershipByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindGroupMembershipsArgs = {
  filter?: InputMaybe<GroupMembershipListFilter>;
  match?: InputMaybe<GroupMembershipInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindGroupsArgs = {
  filter?: InputMaybe<GroupListFilter>;
  match?: InputMaybe<GroupInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindIndonesianCitiesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindIndonesianProvincesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindIndustriesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindIqlaaJordanianDistrictsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindIqlaaJordanianGovernoratesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindLanguagesArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindLatestTrainingSessionForMeArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  trainingId: Scalars['String']['input'];
};


export type QueryFindMastercardBanksArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindMyChannelsArgs = {
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindMyChannelsV2Args = {
  addLatestMessage?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  participantLimit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFindMyInboxArgs = {
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFindMyUserDevicesArgs = {
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindOptionsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
  isParent?: InputMaybe<Scalars['Boolean']['input']>;
  optionType: OptionType;
  parentTextId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindPendingChannelInvitationsForUserArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindProductCategoriesArgs = {
  filter?: InputMaybe<ProductCategoryListFilter>;
  match?: InputMaybe<ProductCategoryInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindPronounsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindPurchaseOrderByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindPurchaseOrderItemsArgs = {
  filter?: InputMaybe<PurchaseOrderItemListFilter>;
  match?: InputMaybe<PurchaseOrderItemInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindPurchaseOrdersArgs = {
  filter?: InputMaybe<PurchaseOrderListFilter>;
  match?: InputMaybe<PurchaseOrderInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindReportUserReasonsArgs = {
  fallbackUiLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindServiceRequestByIdArgs = {
  serviceRequestId: Scalars['String']['input'];
};


export type QueryFindShoppingCartItemByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindShoppingCartItemsArgs = {
  filter?: InputMaybe<ShoppingCartItemListFilter>;
  match?: InputMaybe<ShoppingCartItemInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindShoppingCartsArgs = {
  filter?: InputMaybe<ShoppingCartListFilter>;
  match?: InputMaybe<ShoppingCartInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindTrainingByIdArgs = {
  id: Scalars['String']['input'];
  selectedLanguage?: InputMaybe<UiLanguage>;
};


export type QueryFindTrainingSessionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindTrainingSessionsByTrainingIdArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  trainingId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindTrainingSessionsForMeArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  trainingId: Scalars['String']['input'];
};


export type QueryFindTrainingsForMeArgs = {
  displayInTrainingsList?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindTrainingsForUserArgs = {
  displayInTrainingsList?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindUploadedAssetByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUploadedAssetsArgs = {
  filter?: InputMaybe<UploadedAssetListFilter>;
  match?: InputMaybe<UploadedAssetInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUploadedAssetsForUserArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  userId: Scalars['String']['input'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUserByIdentArgs = {
  ident: Scalars['String']['input'];
  identType?: InputMaybe<UserIdentType>;
  options?: InputMaybe<FindUserByIdentOptions>;
};


export type QueryFindUserCmsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryFindUserDeviceByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUserDevicesArgs = {
  filter?: InputMaybe<UserDeviceListFilter>;
  match?: InputMaybe<UserDeviceInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUserSearchByIdArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  userSearchId: Scalars['String']['input'];
};


export type QueryFindUserSearchResultsArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  runIndex?: InputMaybe<Scalars['Int']['input']>;
  userSearchId: Scalars['String']['input'];
};


export type QueryFindUserSearchesArgs = {
  filter?: InputMaybe<UserSearchListFilter>;
  match?: InputMaybe<UserSearchInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindUsersArgs = {
  filter?: InputMaybe<UserListFilter>;
  match?: InputMaybe<UserInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindWalletItemByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindWalletItemByTransferSlugArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  transferSlug: Scalars['String']['input'];
};


export type QueryFindWalletItemTransferByIdArgs = {
  id: Scalars['String']['input'];
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindWalletItemTransferByTransferSlugArgs = {
  options?: InputMaybe<FindObjectsOptions>;
  transferSlug: Scalars['String']['input'];
};


export type QueryFindWalletItemTransferRecipientInfoByTransferSlugArgs = {
  transferSecret: Scalars['String']['input'];
  transferSlug: Scalars['String']['input'];
};


export type QueryFindWalletItemTransfersArgs = {
  filter?: InputMaybe<WalletItemTransferListFilter>;
  match?: InputMaybe<WalletItemTransferInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindWalletItemsArgs = {
  filter?: InputMaybe<WalletItemListFilter>;
  match?: InputMaybe<WalletItemInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryFindWalletsArgs = {
  filter?: InputMaybe<WalletListFilter>;
  match?: InputMaybe<WalletInput>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryGetMultiStepActionProgressArgs = {
  actionId: Scalars['String']['input'];
  confirmToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIsUserIdentAvailableArgs = {
  ident: Scalars['String']['input'];
  identType?: InputMaybe<UserIdentType>;
};


export type QueryMyChannelInvitationsArgs = {
  direction?: InputMaybe<ChannelInvitationDirection>;
  onlyPending?: InputMaybe<Scalars['Boolean']['input']>;
  onlyUnseen?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
};


export type QueryMyInboxArgs = {
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserWillReceiveWelcomeMessageArgs = {
  userId: Scalars['String']['input'];
};


export type QueryVerifyMyPasswordArgs = {
  password: Scalars['String']['input'];
};

export type ReportUserInput = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  reasonTextId?: InputMaybe<ReportUserReasonTextId>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReportUserReason = {
  __typename?: 'ReportUserReason';
  adminNotes?: Maybe<Scalars['String']['output']>;
  childOptions?: Maybe<Array<Option>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<UiLanguage>;
  /** Material icon name. Intended to be used by the Flutter app for the expertises and industries icons. */
  materialIconName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2TextId?: Maybe<Scalars['String']['output']>;
  mm2Value?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm3TextId?: Maybe<Scalars['String']['output']>;
  optionType: OptionType;
  parentOption?: Maybe<Array<Option>>;
  parentTextId?: Maybe<Scalars['String']['output']>;
  supportedLanguages?: Maybe<Array<UiLanguage>>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  textId: Scalars['String']['output'];
  translatedDescription?: Maybe<Scalars['String']['output']>;
  translatedValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export enum ReportUserReasonTextId {
  BadActor = 'badActor',
  FakePerson = 'fakePerson',
  Harasses = 'harasses',
  Impersonator = 'impersonator',
  Inappropriate = 'inappropriate',
  NotSet = 'notSet',
  ObjectionableLanguage = 'objectionableLanguage',
  PromotesHate = 'promotesHate',
  SharesObjectionableContent = 'sharesObjectionableContent',
  Spammer = 'spammer',
  UsesObjectionableLanguage = 'usesObjectionableLanguage',
  ViolatesRules = 'violatesRules'
}

export type SendMultiStepActionNotificationInput = {
  actionId?: Scalars['String']['input'];
  /** Only allowed for certain flows, i.e. during sign-up with only an email or phone number. */
  email?: InputMaybe<Scalars['String']['input']>;
  notificationMethod?: InputMaybe<NotificationMethod>;
  /** Only allowed for certain flows, i.e. during sign-up with only an email or phone number. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export enum ServiceName {
  Accounts = 'accounts',
  Admin = 'admin',
  AdminJs = 'adminJs',
  Analytics = 'analytics',
  AppEvents = 'appEvents',
  Assets = 'assets',
  Aws = 'aws',
  BgChannels = 'bgChannels',
  BullBoard = 'bullBoard',
  Channels = 'channels',
  Content = 'content',
  ContentTags = 'contentTags',
  DataGenerator = 'dataGenerator',
  Db = 'db',
  Firebase = 'firebase',
  GraphqlApi = 'graphqlApi',
  Groups = 'groups',
  Http = 'http',
  I18N = 'i18N',
  Logger = 'logger',
  Marketplace = 'marketplace',
  Matching = 'matching',
  MessageBus = 'messageBus',
  Messaging = 'messaging',
  Mm2 = 'mm2',
  Models = 'models',
  Moderation = 'moderation',
  Nats = 'nats',
  Nlp = 'nlp',
  Redis = 'redis',
  RestApi = 'restApi',
  SecureId = 'secureId',
  Slack = 'slack',
  System = 'system',
  Tracking = 'tracking',
  Unset = 'unset',
  Vts = 'vts',
  Wallet = 'wallet'
}

export type ServiceRequest = {
  __typename?: 'ServiceRequest';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  deviceUuid?: Maybe<Scalars['String']['output']>;
  errorCode?: Maybe<ErrorCode>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  finishedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  messageIds?: Maybe<Array<ServiceRequestMessageId>>;
  metadata?: Maybe<BaseModelMetadata>;
  modelTypes?: Maybe<Array<ModelType>>;
  objectIds?: Maybe<Array<Scalars['ID']['output']>>;
  result: ServiceRequestResult;
  serviceRequestType: ServiceRequestType;
  source?: Maybe<ServiceRequestSource>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** @deprecated user createdBy */
  userId?: Maybe<Scalars['String']['output']>;
  userRoles?: Maybe<Array<UserRole>>;
};

export enum ServiceRequestMessageId {
  GroupRuleFailed = 'groupRuleFailed',
  InvalidInput = 'invalidInput',
  SystemError = 'systemError',
  Unknown = 'unknown'
}

export enum ServiceRequestResult {
  Error = 'error',
  Ok = 'ok',
  Unset = 'unset'
}

export enum ServiceRequestSource {
  Admin = 'admin',
  Analytics = 'analytics',
  App = 'app',
  GraphqlApi = 'graphqlApi',
  HttpRoute = 'httpRoute',
  Mm2 = 'mm2',
  RestApi = 'restApi',
  System = 'system',
  Vts = 'vts',
  Wallet = 'wallet'
}

export enum ServiceRequestType {
  GraphQlMutationAcceptWalletItemTransfer = 'graphQlMutationAcceptWalletItemTransfer',
  GraphQlMutationAddChannelMessageEvent = 'graphQlMutationAddChannelMessageEvent',
  GraphQlMutationAddFeatureToUser = 'graphQlMutationAddFeatureToUser',
  GraphQlMutationAddUserToGroup = 'graphQlMutationAddUserToGroup',
  GraphQlMutationArchiveChannelForUserByMe = 'graphQlMutationArchiveChannelForUserByMe',
  GraphQlMutationBlockUser = 'graphQlMutationBlockUser',
  GraphQlMutationClearAllAnalyticsSyncInfo = 'graphQlMutationClearAllAnalyticsSyncInfo',
  GraphQlMutationClearAllSyncInfo = 'graphQlMutationClearAllSyncInfo',
  GraphQlMutationClearMyShoppingCart = 'graphQlMutationClearMyShoppingCart',
  GraphQlMutationClearShoppingCart = 'graphQlMutationClearShoppingCart',
  GraphQlMutationCreateAcademicExperience = 'graphQlMutationCreateAcademicExperience',
  GraphQlMutationCreateAdminTask = 'graphQlMutationCreateAdminTask',
  GraphQlMutationCreateAnalyticsSynchronization = 'graphQlMutationCreateAnalyticsSynchronization',
  GraphQlMutationCreateBusinessExperience = 'graphQlMutationCreateBusinessExperience',
  GraphQlMutationCreateChannel = 'graphQlMutationCreateChannel',
  GraphQlMutationCreateChannelInvitation = 'graphQlMutationCreateChannelInvitation',
  GraphQlMutationCreateChannelMessage = 'graphQlMutationCreateChannelMessage',
  GraphQlMutationCreateChannelParticipant = 'graphQlMutationCreateChannelParticipant',
  GraphQlMutationCreateCompany = 'graphQlMutationCreateCompany',
  GraphQlMutationCreateContact = 'graphQlMutationCreateContact',
  GraphQlMutationCreateContentTag = 'graphQlMutationCreateContentTag',
  GraphQlMutationCreateGroup = 'graphQlMutationCreateGroup',
  GraphQlMutationCreateGroupMembership = 'graphQlMutationCreateGroupMembership',
  GraphQlMutationCreateMm2Synchronization = 'graphQlMutationCreateMm2Synchronization',
  GraphQlMutationCreateMultiStepAction = 'graphQlMutationCreateMultiStepAction',
  GraphQlMutationCreateNatsMessage = 'graphQlMutationCreateNatsMessage',
  GraphQlMutationCreateNotification = 'graphQlMutationCreateNotification',
  GraphQlMutationCreateNotificationTemplate = 'graphQlMutationCreateNotificationTemplate',
  GraphQlMutationCreatePurchaseOrderField = 'graphQlMutationCreatePurchaseOrderField',
  GraphQlMutationCreateShoppingCartItem = 'graphQlMutationCreateShoppingCartItem',
  GraphQlMutationCreateSupportChannelConfig = 'graphQlMutationCreateSupportChannelConfig',
  GraphQlMutationCreateUploadedAsset = 'graphQlMutationCreateUploadedAsset',
  GraphQlMutationCreateUserDevice = 'graphQlMutationCreateUserDevice',
  GraphQlMutationCreateUserSearch = 'graphQlMutationCreateUserSearch',
  GraphQlMutationCreateUserTracking = 'graphQlMutationCreateUserTracking',
  GraphQlMutationCreateWalletItem = 'graphQlMutationCreateWalletItem',
  GraphQlMutationCreateWalletItemTransfer = 'graphQlMutationCreateWalletItemTransfer',
  GraphQlMutationCreateWalletTransfer = 'graphQlMutationCreateWalletTransfer',
  GraphQlMutationDeclineWalletItemTransfer = 'graphQlMutationDeclineWalletItemTransfer',
  GraphQlMutationDeleteAcademicExperience = 'graphQlMutationDeleteAcademicExperience',
  GraphQlMutationDeleteAdminTask = 'graphQlMutationDeleteAdminTask',
  GraphQlMutationDeleteAllMm2DataInMm3 = 'graphQlMutationDeleteAllMm2DataInMm3',
  GraphQlMutationDeleteAnalyticsSynchronization = 'graphQlMutationDeleteAnalyticsSynchronization',
  GraphQlMutationDeleteBusinessExperience = 'graphQlMutationDeleteBusinessExperience',
  GraphQlMutationDeleteChannel = 'graphQlMutationDeleteChannel',
  GraphQlMutationDeleteChannelInvitation = 'graphQlMutationDeleteChannelInvitation',
  GraphQlMutationDeleteChannelMessage = 'graphQlMutationDeleteChannelMessage',
  GraphQlMutationDeleteChannelParticipant = 'graphQlMutationDeleteChannelParticipant',
  GraphQlMutationDeleteCompany = 'graphQlMutationDeleteCompany',
  GraphQlMutationDeleteContentTag = 'graphQlMutationDeleteContentTag',
  GraphQlMutationDeleteGroup = 'graphQlMutationDeleteGroup',
  GraphQlMutationDeleteGroupCms = 'graphQlMutationDeleteGroupCms',
  GraphQlMutationDeleteGroupMembership = 'graphQlMutationDeleteGroupMembership',
  GraphQlMutationDeleteMm2Synchronization = 'graphQlMutationDeleteMm2Synchronization',
  GraphQlMutationDeleteMyUser = 'graphQlMutationDeleteMyUser',
  GraphQlMutationDeleteNotification = 'graphQlMutationDeleteNotification',
  GraphQlMutationDeleteNotificationTemplate = 'graphQlMutationDeleteNotificationTemplate',
  GraphQlMutationDeleteShoppingCartItem = 'graphQlMutationDeleteShoppingCartItem',
  GraphQlMutationDeleteSupportChannelConfig = 'graphQlMutationDeleteSupportChannelConfig',
  GraphQlMutationDeleteUploadedAsset = 'graphQlMutationDeleteUploadedAsset',
  GraphQlMutationDeleteUser = 'graphQlMutationDeleteUser',
  GraphQlMutationDeleteUserSearch = 'graphQlMutationDeleteUserSearch',
  GraphQlMutationDeleteWalletItem = 'graphQlMutationDeleteWalletItem',
  GraphQlMutationDeleteWalletItemTransfer = 'graphQlMutationDeleteWalletItemTransfer',
  GraphQlMutationEndMySession = 'graphQlMutationEndMySession',
  GraphQlMutationFindAdminTaskById = 'graphQlMutationFindAdminTaskById',
  GraphQlMutationFindUploadedAssetById = 'graphQlMutationFindUploadedAssetById',
  GraphQlMutationFindUploadedAssetForUser = 'graphQlMutationFindUploadedAssetForUser',
  GraphQlMutationInitAssetUpload = 'graphQlMutationInitAssetUpload',
  GraphQlMutationMarkChannelMessagesAsSeenByMe = 'graphQlMutationMarkChannelMessagesAsSeenByMe',
  GraphQlMutationMarkInAppMessageReceived = 'graphQlMutationMarkInAppMessageReceived',
  GraphQlMutationNlpLabelMessage = 'graphQlMutationNlpLabelMessage',
  GraphQlMutationPauseAnalyticsSynchronization = 'graphQlMutationPauseAnalyticsSynchronization',
  GraphQlMutationRemoveFeatureFromUser = 'graphQlMutationRemoveFeatureFromUser',
  GraphQlMutationRemoveUserFromAllGroups = 'graphQlMutationRemoveUserFromAllGroups',
  GraphQlMutationRemoveUserFromGroup = 'graphQlMutationRemoveUserFromGroup',
  GraphQlMutationReportUser = 'graphQlMutationReportUser',
  GraphQlMutationRunAnalyticsSynchronization = 'graphQlMutationRunAnalyticsSynchronization',
  GraphQlMutationRunDataGenerator = 'graphQlMutationRunDataGenerator',
  GraphQlMutationRunMm2Synchronization = 'graphQlMutationRunMm2Synchronization',
  GraphQlMutationSendMultiStepActionNotification = 'graphQlMutationSendMultiStepActionNotification',
  GraphQlMutationSignInUser = 'graphQlMutationSignInUser',
  GraphQlMutationSignMeOut = 'graphQlMutationSignMeOut',
  GraphQlMutationSignUpOauthUser = 'graphQlMutationSignUpOauthUser',
  GraphQlMutationSignUpUser = 'graphQlMutationSignUpUser',
  GraphQlMutationStartMySession = 'graphQlMutationStartMySession',
  GraphQlMutationUnblockUser = 'graphQlMutationUnblockUser',
  GraphQlMutationUpdateAcademicExperience = 'graphQlMutationUpdateAcademicExperience',
  GraphQlMutationUpdateAdminTask = 'graphQlMutationUpdateAdminTask',
  GraphQlMutationUpdateBusinessExperience = 'graphQlMutationUpdateBusinessExperience',
  GraphQlMutationUpdateChannel = 'graphQlMutationUpdateChannel',
  GraphQlMutationUpdateChannelInvitation = 'graphQlMutationUpdateChannelInvitation',
  GraphQlMutationUpdateChannelMessage = 'graphQlMutationUpdateChannelMessage',
  GraphQlMutationUpdateChannelParticipant = 'graphQlMutationUpdateChannelParticipant',
  GraphQlMutationUpdateCompany = 'graphQlMutationUpdateCompany',
  GraphQlMutationUpdateContact = 'graphQlMutationUpdateContact',
  GraphQlMutationUpdateContentTag = 'graphQlMutationUpdateContentTag',
  GraphQlMutationUpdateGroup = 'graphQlMutationUpdateGroup',
  GraphQlMutationUpdateGroupMembership = 'graphQlMutationUpdateGroupMembership',
  GraphQlMutationUpdateMyUser = 'graphQlMutationUpdateMyUser',
  GraphQlMutationUpdateNlpConversation = 'graphQlMutationUpdateNlpConversation',
  GraphQlMutationUpdateNlpMessage = 'graphQlMutationUpdateNlpMessage',
  GraphQlMutationUpdateNotification = 'graphQlMutationUpdateNotification',
  GraphQlMutationUpdateNotificationTemplate = 'graphQlMutationUpdateNotificationTemplate',
  GraphQlMutationUpdateShoppingCartItem = 'graphQlMutationUpdateShoppingCartItem',
  GraphQlMutationUpdateSupportChannelConfig = 'graphQlMutationUpdateSupportChannelConfig',
  GraphQlMutationUpdateUploadedAsset = 'graphQlMutationUpdateUploadedAsset',
  GraphQlMutationUpdateUser = 'graphQlMutationUpdateUser',
  GraphQlMutationUpdateUserDevice = 'graphQlMutationUpdateUserDevice',
  GraphQlMutationUpdateUserSearch = 'graphQlMutationUpdateUserSearch',
  GraphQlMutationUpdateUserTracking = 'graphQlMutationUpdateUserTracking',
  GraphQlMutationUpdateWalletItem = 'graphQlMutationUpdateWalletItem',
  GraphQlMutationUpdateWalletItemTransfer = 'graphQlMutationUpdateWalletItemTransfer',
  GraphQlMutationUpdateWalletItemTransferPassword = 'graphQlMutationUpdateWalletItemTransferPassword',
  GraphQlMutationUpsertBackgroundTask = 'graphQlMutationUpsertBackgroundTask',
  GraphQlMutationVerifyMultiStepActionToken = 'graphQlMutationVerifyMultiStepActionToken',
  GraphQlQueryAdminTaskDefinitions = 'graphQlQueryAdminTaskDefinitions',
  GraphQlQueryAvailableUserHandle = 'graphQlQueryAvailableUserHandle',
  GraphQlQueryBackgroundTask = 'graphQlQueryBackgroundTask',
  GraphQlQueryChannelInvitations = 'graphQlQueryChannelInvitations',
  GraphQlQueryChannelMessageChannel = 'graphQlQueryChannelMessageChannel',
  GraphQlQueryChannelParticipants = 'graphQlQueryChannelParticipants',
  GraphQlQueryContactTypes = 'graphQlQueryContactTypes',
  GraphQlQueryContacts = 'graphQlQueryContacts',
  GraphQlQueryContentTag = 'graphQlQueryContentTag',
  GraphQlQueryFindAdminTask = 'graphQlQueryFindAdminTask',
  GraphQlQueryFindAnalyticsServiceRecord = 'graphQlQueryFindAnalyticsServiceRecord',
  GraphQlQueryFindAnalyticsSynchronizationById = 'graphQlQueryFindAnalyticsSynchronizationById',
  GraphQlQueryFindAndUpdateAllMm2Users = 'graphQlQueryFindAndUpdateAllMm2Users',
  GraphQlQueryFindAvailableUserHandle = 'graphQlQueryFindAvailableUserHandle',
  GraphQlQueryFindBrands = 'graphQlQueryFindBrands',
  GraphQlQueryFindChannelById = 'graphQlQueryFindChannelById',
  GraphQlQueryFindChannelInvitationById = 'graphQlQueryFindChannelInvitationById',
  GraphQlQueryFindChannelInvitationsBetweenUsers = 'graphQlQueryFindChannelInvitationsBetweenUsers',
  GraphQlQueryFindChannelInvitationsForUser = 'graphQlQueryFindChannelInvitationsForUser',
  GraphQlQueryFindChannelMessageById = 'graphQlQueryFindChannelMessageById',
  GraphQlQueryFindChannelMessages = 'graphQlQueryFindChannelMessages',
  GraphQlQueryFindChannelParticipantById = 'graphQlQueryFindChannelParticipantById',
  GraphQlQueryFindChannelParticipants = 'graphQlQueryFindChannelParticipants',
  GraphQlQueryFindChannels = 'graphQlQueryFindChannels',
  GraphQlQueryFindChannelsForUser = 'graphQlQueryFindChannelsForUser',
  GraphQlQueryFindContact = 'graphQlQueryFindContact',
  GraphQlQueryFindContactById = 'graphQlQueryFindContactById',
  GraphQlQueryFindContacts = 'graphQlQueryFindContacts',
  GraphQlQueryFindCountries = 'graphQlQueryFindCountries',
  GraphQlQueryFindExpertises = 'graphQlQueryFindExpertises',
  GraphQlQueryFindGiftCardProducts = 'graphQlQueryFindGiftCardProducts',
  GraphQlQueryFindGroupById = 'graphQlQueryFindGroupById',
  GraphQlQueryFindGroupByIdent = 'graphQlQueryFindGroupByIdent',
  GraphQlQueryFindGroupCmsByGroupId = 'graphQlQueryFindGroupCmsByGroupId',
  GraphQlQueryFindGroupCmsByGroupIdent = 'graphQlQueryFindGroupCmsByGroupIdent',
  GraphQlQueryFindGroupCmsById = 'graphQlQueryFindGroupCmsById',
  GraphQlQueryFindGroupMembershipByIdField = 'graphQlQueryFindGroupMembershipByIdField',
  GraphQlQueryFindGroupMemberships = 'graphQlQueryFindGroupMemberships',
  GraphQlQueryFindGroupsField = 'graphQlQueryFindGroupsField',
  GraphQlQueryFindIndustries = 'graphQlQueryFindIndustries',
  GraphQlQueryFindMarketplaceServiceRecord = 'graphQlQueryFindMarketplaceServiceRecord',
  GraphQlQueryFindMm2SynchronizationById = 'graphQlQueryFindMm2SynchronizationById',
  GraphQlQueryFindMyBlockedUsers = 'graphQlQueryFindMyBlockedUsers',
  GraphQlQueryFindMyChannels = 'graphQlQueryFindMyChannels',
  GraphQlQueryFindMyShoppingCart = 'graphQlQueryFindMyShoppingCart',
  GraphQlQueryFindMyUser = 'graphQlQueryFindMyUser',
  GraphQlQueryFindMyUserDevices = 'graphQlQueryFindMyUserDevices',
  GraphQlQueryFindMyWallet = 'graphQlQueryFindMyWallet',
  GraphQlQueryFindNlpConversation = 'graphQlQueryFindNlpConversation',
  GraphQlQueryFindOptions = 'graphQlQueryFindOptions',
  GraphQlQueryFindPendingChannelInvitationsForUser = 'graphQlQueryFindPendingChannelInvitationsForUser',
  GraphQlQueryFindProductCategories = 'graphQlQueryFindProductCategories',
  GraphQlQueryFindPurchaseOrderItems = 'graphQlQueryFindPurchaseOrderItems',
  GraphQlQueryFindPurchaseOrders = 'graphQlQueryFindPurchaseOrders',
  GraphQlQueryFindShoppingCartItems = 'graphQlQueryFindShoppingCartItems',
  GraphQlQueryFindShoppingCarts = 'graphQlQueryFindShoppingCarts',
  GraphQlQueryFindTrainingById = 'graphQlQueryFindTrainingById',
  GraphQlQueryFindTrainingSessionById = 'graphQlQueryFindTrainingSessionById',
  GraphQlQueryFindTrainingSessionsByTrainingId = 'graphQlQueryFindTrainingSessionsByTrainingId',
  GraphQlQueryFindTrainingSessionsForMe = 'graphQlQueryFindTrainingSessionsForMe',
  GraphQlQueryFindTrainingsForMe = 'graphQlQueryFindTrainingsForMe',
  GraphQlQueryFindTrainingsForUser = 'graphQlQueryFindTrainingsForUser',
  GraphQlQueryFindUploadedAssetById = 'graphQlQueryFindUploadedAssetById',
  GraphQlQueryFindUploadedAssets = 'graphQlQueryFindUploadedAssets',
  GraphQlQueryFindUploadedAssetsForUser = 'graphQlQueryFindUploadedAssetsForUser',
  GraphQlQueryFindUserById = 'graphQlQueryFindUserById',
  GraphQlQueryFindUserByIdent = 'graphQlQueryFindUserByIdent',
  GraphQlQueryFindUserDeviceById = 'graphQlQueryFindUserDeviceById',
  GraphQlQueryFindUserDevices = 'graphQlQueryFindUserDevices',
  GraphQlQueryFindUserSearchById = 'graphQlQueryFindUserSearchById',
  GraphQlQueryFindUserSearchResults = 'graphQlQueryFindUserSearchResults',
  GraphQlQueryFindUsers = 'graphQlQueryFindUsers',
  GraphQlQueryFindWalletItemById = 'graphQlQueryFindWalletItemById',
  GraphQlQueryFindWalletItemByTransferSlug = 'graphQlQueryFindWalletItemByTransferSlug',
  GraphQlQueryFindWalletItemTransferById = 'graphQlQueryFindWalletItemTransferById',
  GraphQlQueryFindWalletItemTransferByTransferSlug = 'graphQlQueryFindWalletItemTransferByTransferSlug',
  GraphQlQueryFindWalletItemTransferRecipientInfoByTransferSlug = 'graphQlQueryFindWalletItemTransferRecipientInfoByTransferSlug',
  GraphQlQueryFindWalletItemTransfers = 'graphQlQueryFindWalletItemTransfers',
  GraphQlQueryFindWalletItems = 'graphQlQueryFindWalletItems',
  GraphQlQueryFindWalletServiceRecord = 'graphQlQueryFindWalletServiceRecord',
  GraphQlQueryFindWallets = 'graphQlQueryFindWallets',
  GraphQlQueryGetMm2Integration = 'graphQlQueryGetMm2Integration',
  GraphQlQueryGetMultiStepActionProgress = 'graphQlQueryGetMultiStepActionProgress',
  GraphQlQueryLatestUserDevice = 'graphQlQueryLatestUserDevice',
  GraphQlQueryMyContacts = 'graphQlQueryMyContacts',
  GraphQlQueryMyGroupMemberships = 'graphQlQueryMyGroupMemberships',
  GraphQlQueryMyInbox = 'graphQlQueryMyInbox',
  GraphQlQueryNotificationTemplate = 'graphQlQueryNotificationTemplate',
  GraphQlQueryUnreadInAppMessages = 'graphQlQueryUnreadInAppMessages',
  GraphQlQueryUser = 'graphQlQueryUser',
  GraphQlQueryUserChannels = 'graphQlQueryUserChannels',
  GraphQlQueryUserCompanies = 'graphQlQueryUserCompanies',
  GraphQlQueryUserGroupMembers = 'graphQlQueryUserGroupMembers',
  GraphQlQueryUserGroups = 'graphQlQueryUserGroups',
  GraphQlQueryUserInboxUser = 'graphQlQueryUserInboxUser',
  GraphQlQueryUserSearchFoundUsers = 'graphQlQueryUserSearchFoundUsers',
  GraphQlQueryVerifyMyPassword = 'graphQlQueryVerifyMyPassword',
  GraphQlQueryVerifyWalletItemTransferPassword = 'graphQlQueryVerifyWalletItemTransferPassword',
  Unset = 'unset'
}

export type ShoppingCart = {
  __typename?: 'ShoppingCart';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  items: Array<ShoppingCartItem>;
  metadata?: Maybe<BaseModelMetadata>;
  sumItemPrice: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  vat: Scalars['Int']['output'];
};

export type ShoppingCartInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  sumItemPrice?: InputMaybe<Scalars['Int']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  vat?: InputMaybe<Scalars['Int']['input']>;
};

export type ShoppingCartItem = {
  __typename?: 'ShoppingCartItem';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  shoppingCartId: Scalars['ID']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type ShoppingCartItemInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shoppingCartId?: InputMaybe<Scalars['ID']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ShoppingCartItemListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ShoppingCartListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type SidContactListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userIdIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type SidMultiStepAction = {
  __typename?: 'SidMultiStepAction';
  actionStatus: MultiStepActionStatus;
  actionType: MultiStepActionType;
  adminNotes?: Maybe<Scalars['String']['output']>;
  attemptCount: Scalars['Int']['output'];
  confirmToken?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  deviceUuid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailPassed?: Maybe<Scalars['Boolean']['output']>;
  emailUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  emailVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  errors?: Maybe<Array<MultiStepActionError>>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  notificationId?: Maybe<Scalars['String']['output']>;
  notificationMethod: NotificationMethod;
  notificationResult?: Maybe<MultiStepActionSendNotificationResult>;
  notificationSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  passwordPassed?: Maybe<Scalars['Boolean']['output']>;
  passwordResettedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberPassed?: Maybe<Scalars['Boolean']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumberVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  result: MultiStepActionResult;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  textData?: Maybe<Scalars['String']['output']>;
  tfaBackupCodes?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userHandle?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
  userIdent?: Maybe<Scalars['String']['output']>;
};

export type SidMultiStepActionInput = {
  actionStatus?: InputMaybe<MultiStepActionStatus>;
  actionType?: InputMaybe<MultiStepActionType>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  attemptCount?: InputMaybe<Scalars['Int']['input']>;
  confirmToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailPassed?: InputMaybe<Scalars['Boolean']['input']>;
  emailUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  emailVerifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  errors?: InputMaybe<Array<MultiStepActionErrorInput>>;
  events?: InputMaybe<Array<ModelEventInput>>;
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  notificationId?: InputMaybe<Scalars['String']['input']>;
  notificationMethod?: InputMaybe<NotificationMethod>;
  notificationResult?: InputMaybe<MultiStepActionSendNotificationResult>;
  notificationSentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordPassed?: InputMaybe<Scalars['Boolean']['input']>;
  passwordResettedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  passwordUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberPassed?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumberUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phoneNumberVerifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  report?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<MultiStepActionResult>;
  signedInAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  textData?: InputMaybe<Scalars['String']['input']>;
  tfaBackupCodes?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  userIdent?: InputMaybe<Scalars['String']['input']>;
};

export type SidMultiStepActionProgress = {
  __typename?: 'SidMultiStepActionProgress';
  actionId: Scalars['ID']['output'];
  actionStatus?: Maybe<MultiStepActionStatus>;
  actionType: MultiStepActionType;
  attemptCount: Scalars['Int']['output'];
  authToken?: Maybe<Scalars['String']['output']>;
  authTokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  emailPassed?: Maybe<Scalars['Boolean']['output']>;
  emailUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  emailVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  errors?: Maybe<Array<MultiStepActionError>>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  notificationId?: Maybe<Scalars['String']['output']>;
  notificationMethod?: Maybe<NotificationMethod>;
  notificationResult?: Maybe<MultiStepActionSendNotificationResult>;
  notificationSentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  passwordPassed?: Maybe<Scalars['Boolean']['output']>;
  passwordResettedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumberPassed?: Maybe<Scalars['Boolean']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  phoneNumberVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  result: MultiStepActionResult;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  textData?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

/** User sign up input data */
export type SignInOauthUserInput = {
  allowToTrack?: InputMaybe<Scalars['Boolean']['input']>;
  checkAvailable?: Scalars['Boolean']['input'];
  cookieConsentChoice?: InputMaybe<CookieChoiceTextId>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  ident?: InputMaybe<Scalars['String']['input']>;
  identType?: InputMaybe<UserIdentType>;
  identityProvider?: IdentityProvider;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oauthDelegateUserId?: InputMaybe<Scalars['String']['input']>;
  oauthFederatedProvider?: InputMaybe<FederatedIdentityProvider>;
  oauthIdToken?: InputMaybe<Scalars['String']['input']>;
  oauthProfileUrl?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshToken?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthRefreshTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  oauthTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthTokenId?: InputMaybe<Scalars['String']['input']>;
  oauthUserId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  trackId?: InputMaybe<Scalars['String']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
};

/** User sign up input data */
export type SignInUserInput = {
  allowToTrack?: InputMaybe<Scalars['Boolean']['input']>;
  authType?: AuthType;
  captchaService?: InputMaybe<Scalars['String']['input']>;
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  cookieConsentChoice?: InputMaybe<CookieChoiceTextId>;
  ident?: InputMaybe<Scalars['String']['input']>;
  identType?: InputMaybe<UserIdentType>;
  password?: InputMaybe<Scalars['String']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
};

/** User sign up input data */
export type SignUpUserInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  allowToTrack?: InputMaybe<Scalars['Boolean']['input']>;
  authType?: AuthType;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  captchaService?: InputMaybe<Scalars['String']['input']>;
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  checkAvailable?: Scalars['Boolean']['input'];
  cookieConsentChoice?: InputMaybe<CookieChoiceTextId>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailSource?: InputMaybe<Scalars['String']['input']>;
  emailVerifiedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isTestUser?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  offersHelp?: InputMaybe<Scalars['Boolean']['input']>;
  optIntoNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
  seeksHelp?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trackId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortItem = {
  direction?: InputMaybe<SortDirection>;
  field?: Scalars['String']['input'];
};

/**
 *
 * This object contains the profile information describing an a Strive Indonesia user.
 */
export type StriveIndonesiaGroupMembership = IGroupMembership & {
  __typename?: 'StriveIndonesiaGroupMembership';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expertises: Array<Expertise>;
  groupId: Scalars['ID']['output'];
  groupIdent: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  industries: Array<Industry>;
  industry?: Maybe<Industry>;
  metadata?: Maybe<BaseModelMetadata>;
  /** Number of employees */
  numberOfEmployees?: Maybe<Scalars['Int']['output']>;
  roles: Array<GroupMembershipRole>;
  soughtExpertises: Array<Expertise>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
  /** Venture Start Date */
  ventureStartDate?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  channelChanged: BgChannelChangedEvent;
  objectChanged: ObjectChangedEvent;
};


export type SubscriptionChannelChangedArgs = {
  channelId?: Scalars['ID']['input'];
};


export type SubscriptionObjectChangedArgs = {
  modelType?: InputMaybe<ModelType>;
  objectId?: Scalars['ID']['input'];
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
};

export type SupportChannelConfig = {
  __typename?: 'SupportChannelConfig';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** Any language option can be selected, not just a UiLanguage */
  channelLanguageTextId?: Maybe<Scalars['String']['output']>;
  createSupportChannelForMentees: Scalars['Boolean']['output'];
  createSupportChannelForMentors: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  filterByGenderTextIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The welcome message is a plain text field */
  firstMessageText?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  /** Is this welcome message active / should we send it to users? */
  isActive: Scalars['Boolean']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** Setting to false will ensure no notifications are sent. Setting to true will still check notification template settings. */
  sendNotifications: Scalars['Boolean']['output'];
  senderUserId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type SupportChannelConfigInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  /** Any language option can be selected, not just a UiLanguage */
  channelLanguageTextId?: InputMaybe<Scalars['String']['input']>;
  createSupportChannelForMentees?: InputMaybe<Scalars['Boolean']['input']>;
  createSupportChannelForMentors?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  filterByGenderTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The welcome message is a plain text */
  firstMessageText?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIdent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Is this welcome message active / should we send it to users? */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  /** Setting to false will ensure no notifications are sent. Setting to true will still check notification template settings. */
  sendNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  senderUserId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type Training = {
  __typename?: 'Training';
  about?: Maybe<Scalars['String']['output']>;
  aboutAr?: Maybe<Scalars['String']['output']>;
  aboutArMm2?: Maybe<Scalars['String']['output']>;
  aboutEn?: Maybe<Scalars['String']['output']>;
  aboutEnMm2?: Maybe<Scalars['String']['output']>;
  aboutEs?: Maybe<Scalars['String']['output']>;
  aboutEsMm2?: Maybe<Scalars['String']['output']>;
  aboutInd?: Maybe<Scalars['String']['output']>;
  aboutIndMm2?: Maybe<Scalars['String']['output']>;
  aboutMm2?: Maybe<Scalars['String']['output']>;
  aboutRu?: Maybe<Scalars['String']['output']>;
  aboutRuMm2?: Maybe<Scalars['String']['output']>;
  aboutSo?: Maybe<Scalars['String']['output']>;
  aboutSoMm2?: Maybe<Scalars['String']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  certificateTemplateId?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  /** Maps to TrainingPageCountry from MM2 */
  countriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expired: Scalars['Boolean']['output'];
  /** Maps to TrainingPageCommunity from MM2 */
  groupIds?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  imageUrls?: Maybe<Array<Scalars['String']['output']>>;
  introduction?: Maybe<Scalars['String']['output']>;
  introductionAr?: Maybe<Scalars['String']['output']>;
  introductionArMm2?: Maybe<Scalars['String']['output']>;
  introductionEn?: Maybe<Scalars['String']['output']>;
  introductionEnMm2?: Maybe<Scalars['String']['output']>;
  introductionEs?: Maybe<Scalars['String']['output']>;
  introductionEsMm2?: Maybe<Scalars['String']['output']>;
  introductionInd?: Maybe<Scalars['String']['output']>;
  introductionIndMm2?: Maybe<Scalars['String']['output']>;
  introductionMm2?: Maybe<Scalars['String']['output']>;
  introductionRu?: Maybe<Scalars['String']['output']>;
  introductionRuMm2?: Maybe<Scalars['String']['output']>;
  introductionSo?: Maybe<Scalars['String']['output']>;
  introductionSoMm2?: Maybe<Scalars['String']['output']>;
  isTrainingCompletedForMe?: Maybe<Scalars['Boolean']['output']>;
  isTrainingPassedForMe?: Maybe<Scalars['Boolean']['output']>;
  /** Maps to TrainingPageLanguage from MM2 */
  languagesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Markdown field which contains the trainings lesson plan */
  lessonPlan?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Arabic */
  lessonPlanAr?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in English */
  lessonPlanEn?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Spanish */
  lessonPlanEs?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Bahasa Indonesian */
  lessonPlanInd?: Maybe<Scalars['String']['output']>;
  lessonPlanLevels: Scalars['Int']['output'];
  /** Markdown field which contains the trainings lesson plan in Russian */
  lessonPlanRu?: Maybe<Scalars['String']['output']>;
  /** Markdown field which contains the trainings lesson plan in Somali */
  lessonPlanSo?: Maybe<Scalars['String']['output']>;
  live: Scalars['Boolean']['output'];
  locked: Scalars['Boolean']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2/VTS synchronizer. MM2 Wagtail page PK/ MM2 training page ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  myLatestTrainingSession?: Maybe<TrainingSession>;
  myTrainingSessions: Array<TrainingSession>;
  numCorrectAnswersToPass: Scalars['Int']['output'];
  /** Restrict the training to mentors. Maps to MM2 TrainingPage.role. */
  offersHelp: Scalars['Boolean']['output'];
  relativeUrlPath?: Maybe<Scalars['String']['output']>;
  relativeUrlPathAr?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEn?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEs?: Maybe<Scalars['String']['output']>;
  relativeUrlPathInd?: Maybe<Scalars['String']['output']>;
  relativeUrlPathRu?: Maybe<Scalars['String']['output']>;
  relativeUrlPathSo?: Maybe<Scalars['String']['output']>;
  restricted?: Maybe<Scalars['Boolean']['output']>;
  /** Restrict the training to mentees. Maps to MM2 TrainingPage.role. */
  seeksHelp: Scalars['Boolean']['output'];
  /** Maps to wagtailcore_page.show_in_menus from MM2 */
  showInMenus: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  slugAr?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugInd?: Maybe<Scalars['String']['output']>;
  slugRu?: Maybe<Scalars['String']['output']>;
  slugSo?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  titleAr?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleInd?: Maybe<Scalars['String']['output']>;
  titleRu?: Maybe<Scalars['String']['output']>;
  titleSo?: Maybe<Scalars['String']['output']>;
  /** Training content pages used for the lesson plan */
  trainingContentPages?: Maybe<Array<TrainingContentPage>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
  urlPathAr?: Maybe<Scalars['String']['output']>;
  urlPathEn?: Maybe<Scalars['String']['output']>;
  urlPathEs?: Maybe<Scalars['String']['output']>;
  urlPathInd?: Maybe<Scalars['String']['output']>;
  urlPathRu?: Maybe<Scalars['String']['output']>;
  urlPathSo?: Maybe<Scalars['String']['output']>;
};

export type TrainingContentPage = {
  __typename?: 'TrainingContentPage';
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** TrainingContentPages can have children TrainingContentPages. This is used to represent the tree structure of the training content. */
  children?: Maybe<Array<TrainingContentPage>>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expired: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  live: Scalars['Boolean']['output'];
  locked: Scalars['Boolean']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  /** This attribute is only used by the MM2/VTS synchronizer. MM2 Wagtail page PK/ MM2 trainingContentPage page ID. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  relativeUrlPath?: Maybe<Scalars['String']['output']>;
  relativeUrlPathAr?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEn?: Maybe<Scalars['String']['output']>;
  relativeUrlPathEs?: Maybe<Scalars['String']['output']>;
  relativeUrlPathInd?: Maybe<Scalars['String']['output']>;
  relativeUrlPathRu?: Maybe<Scalars['String']['output']>;
  relativeUrlPathSo?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAr?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugInd?: Maybe<Scalars['String']['output']>;
  slugRu?: Maybe<Scalars['String']['output']>;
  slugSo?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleAr?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleInd?: Maybe<Scalars['String']['output']>;
  titleRu?: Maybe<Scalars['String']['output']>;
  titleSo?: Maybe<Scalars['String']['output']>;
  /** FK to Training model */
  trainingId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
  urlPathAr?: Maybe<Scalars['String']['output']>;
  urlPathEn?: Maybe<Scalars['String']['output']>;
  urlPathEs?: Maybe<Scalars['String']['output']>;
  urlPathInd?: Maybe<Scalars['String']['output']>;
  urlPathRu?: Maybe<Scalars['String']['output']>;
  urlPathSo?: Maybe<Scalars['String']['output']>;
};

export type TrainingSession = {
  __typename?: 'TrainingSession';
  adminNotes?: Maybe<Scalars['String']['output']>;
  completionInfo?: Maybe<TrainingSessionCompletionInfo>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  isInProgress: Scalars['Boolean']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  mm2Id?: Maybe<Scalars['String']['output']>;
  percentCompleted: Scalars['Float']['output'];
  startedAt: Scalars['DateTimeISO']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  /** The ID of the training in MM3. */
  trainingId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['String']['output'];
};

export type TrainingSessionCompletionInfo = {
  __typename?: 'TrainingSessionCompletionInfo';
  completedAt: Scalars['DateTimeISO']['output'];
  isPassingScore: Scalars['Boolean']['output'];
  mm2Id?: Maybe<Scalars['String']['output']>;
  numCorrectAnswersToPass: Scalars['Int']['output'];
  numberOfPreTestQuestions: Scalars['Int']['output'];
  numberOfQuestions: Scalars['Int']['output'];
  preTestQuestionsAnsweredCorrectly: Scalars['Int']['output'];
  questionsAnsweredCorrectly: Scalars['Int']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export enum UiLanguage {
  Ar = 'ar',
  En = 'en',
  Es = 'es',
  Id = 'id',
  Ru = 'ru',
  So = 'so'
}

export type UpdateObjectOptions = {
  replace?: InputMaybe<Scalars['Boolean']['input']>;
  returnReloadedObject?: InputMaybe<Scalars['Boolean']['input']>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UploadedAsset = {
  __typename?: 'UploadedAsset';
  adminNotes?: Maybe<Scalars['String']['output']>;
  assetType: UploadedAssetType;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  hostingService: AssetHostingService;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  mimeType?: Maybe<Scalars['String']['output']>;
  ownerId: Scalars['ID']['output'];
  ownerModelType: ModelType;
  path?: Maybe<Scalars['String']['output']>;
  s3Bucket?: Maybe<Scalars['String']['output']>;
  s3Key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  uploadUrl?: Maybe<Scalars['String']['output']>;
  uploadUrlExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  uploadedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type UploadedAssetInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<UploadedAssetType>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hostingService?: InputMaybe<AssetHostingService>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  ownerModelType?: InputMaybe<ModelType>;
  path?: InputMaybe<Scalars['String']['input']>;
  s3Bucket?: InputMaybe<Scalars['String']['input']>;
  s3Key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
  uploadUrlExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  uploadedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UploadedAssetListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export enum UploadedAssetType {
  Avatar = 'avatar',
  ProfileHeroImage = 'profileHeroImage',
  Unset = 'unset'
}

export type User = {
  __typename?: 'User';
  academicExperienceIds?: Maybe<Array<Scalars['ID']['output']>>;
  academicExperiences?: Maybe<Array<AcademicExperience>>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  anonymizedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  appFeatures?: Maybe<Array<AppFeature>>;
  avatarAsset?: Maybe<UploadedAsset>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  birthYear?: Maybe<Scalars['Int']['output']>;
  businessExperienceIds?: Maybe<Array<Scalars['ID']['output']>>;
  businessExperiences?: Maybe<Array<BusinessExperience>>;
  channelInvitations: Array<ChannelInvitation>;
  channelParticipants: Array<ChannelParticipant>;
  channels: Array<Channel>;
  cityOfOrigin?: Maybe<Scalars['String']['output']>;
  cityOfResidence?: Maybe<Scalars['String']['output']>;
  companies?: Maybe<Array<Company>>;
  companyIds?: Maybe<Array<Scalars['ID']['output']>>;
  countryOfOrigin?: Maybe<Country>;
  countryOfOriginTextId?: Maybe<Scalars['String']['output']>;
  countryOfResidence?: Maybe<Country>;
  countryOfResidenceTextId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  /** If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally. */
  discoverable?: Maybe<Scalars['Boolean']['output']>;
  educationLevel?: Maybe<EducationLevel>;
  educationLevelTextId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** The source of the email address, e.g. "google", "facebook", etc. */
  emailSource?: Maybe<Scalars['String']['output']>;
  emailUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  endorsements?: Maybe<Array<EndorsementWithTypes>>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  externalGroupIds: Array<Scalars['ID']['output']>;
  fallbackUiLanguage: Language;
  fallbackUiLanguageTextId?: Maybe<UiLanguage>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  /** This attribute is only used by the MM2 synchronizer. */
  genderSelfDescribed?: Maybe<Scalars['String']['output']>;
  genderTextId?: Maybe<Scalars['String']['output']>;
  groupIds: Array<Scalars['ID']['output']>;
  groupMembers: Array<IGroupMembership>;
  groupMemberships: Array<IGroupMembership>;
  groups: Array<Group>;
  /** Records whether a user has logged into MM2. */
  hasSignedInToMm2?: Maybe<Scalars['Boolean']['output']>;
  /** Records whether a user has logged into MM3. */
  hasSignedInToMm3?: Maybe<Scalars['Boolean']['output']>;
  hasTrainings: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  inactivatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  inactivatedBy?: Maybe<Scalars['ID']['output']>;
  inviteCode?: Maybe<Scalars['String']['output']>;
  isEmailVerified: Scalars['Boolean']['output'];
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified: Scalars['Boolean']['output'];
  isTestUser?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestActivityAt?: Maybe<Scalars['DateTimeISO']['output']>;
  latestUserDevice: UserDeviceWithoutAuth;
  /** This attribute is a copy of the mentee group membership. */
  mentee?: Maybe<MenteesGroupMembership>;
  /** This attribute is a copy of the mentor group membership. */
  mentor?: Maybe<MentorsGroupMembership>;
  metadata?: Maybe<UserMetadata>;
  /** For MM2 users, this means a profile is completed. */
  mm2BasicAccountCompleted?: Maybe<Scalars['Boolean']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  /** This is the MM2 password hash. */
  mm2PasswordHash?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2PhotoOriginal?: Maybe<Scalars['String']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  mm2ProfileId?: Maybe<Scalars['String']['output']>;
  offersHelp?: Maybe<Scalars['Boolean']['output']>;
  onboardingStage?: Maybe<Scalars['String']['output']>;
  optIntoNewsletter?: Maybe<Scalars['Boolean']['output']>;
  /** Records whether a user was originally created in MM2. */
  originatedInMm2?: Maybe<Scalars['Boolean']['output']>;
  parentGroupIds: Array<Scalars['ID']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  personalBio?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<UserPreferences>;
  preferredLanguage?: Maybe<Language>;
  preferredLanguageTextId?: Maybe<Scalars['String']['output']>;
  preferredUiLanguage?: Maybe<Language>;
  profileCompletionPercentage: Scalars['Int']['output'];
  profileRole: UserProfileRole;
  profileRoleHistory?: Maybe<Array<UserProfileRoleHistoryItem>>;
  pronouns: Array<Pronoun>;
  pronounsDisplay: Scalars['String']['output'];
  pronounsTextIds?: Maybe<Array<Scalars['String']['output']>>;
  regionOfOrigin?: Maybe<Scalars['String']['output']>;
  regionOfResidence?: Maybe<Scalars['String']['output']>;
  roles: Array<UserRole>;
  seeksHelp?: Maybe<Scalars['Boolean']['output']>;
  selectedUiLanguageTextId?: Maybe<UiLanguage>;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  signedOutAt?: Maybe<Scalars['DateTimeISO']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  spokenLanguages: Array<Language>;
  spokenLanguagesTextIds: Array<Scalars['String']['output']>;
  ssoIdp?: Maybe<Scalars['String']['output']>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  suspendedBy?: Maybe<Scalars['ID']['output']>;
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  termsAndConditionsAcceptedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trustLevel: Scalars['Int']['output'];
  unreadInAppMessages: Array<Notification>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  uploadedAssets: Array<UploadedAsset>;
  userBlocks?: Maybe<Array<UserBlock>>;
  userDevices: Array<UserDeviceWithoutAuth>;
  userHandle?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<LabeledStringValue>>;
  yearsManagementExperience?: Maybe<Scalars['Int']['output']>;
  yearsOwnershipExperience?: Maybe<Scalars['Int']['output']>;
};


export type UserChannelsArgs = {
  mustBeAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  mustHaveMessages?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FindObjectsOptions>;
};

/** API response to signInUser/signUpUser/signInOauthUser */
export type UserAuthResponse = {
  __typename?: 'UserAuthResponse';
  authToken?: Maybe<Scalars['String']['output']>;
  authTokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  authType: AuthType;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  foundUser: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  onboardingStage: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  roles: Array<UserRole>;
  userHandle: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserBlock = {
  __typename?: 'UserBlock';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  mm2Id?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  reasonTextId: Scalars['String']['output'];
  /** This attribute is only used by the MM2 synchronizer. */
  syncedWithMm2At?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['ID']['output'];
};

export type UserCms = {
  __typename?: 'UserCms';
  groupCms?: Maybe<GroupCms>;
  userId: Scalars['ID']['output'];
};

export type UserDeviceInput = {
  acceptedLanguage?: InputMaybe<Scalars['String']['input']>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  appVersion?: InputMaybe<Scalars['String']['input']>;
  authType?: InputMaybe<AuthType>;
  brand?: InputMaybe<Scalars['String']['input']>;
  consumer?: InputMaybe<Scalars['String']['input']>;
  consumerVersion?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deviceType?: InputMaybe<Scalars['String']['input']>;
  deviceUuid?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  identityProvider?: InputMaybe<IdentityProvider>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isTablet?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  model?: InputMaybe<Scalars['String']['input']>;
  oauthDelegateUserId?: InputMaybe<Scalars['String']['input']>;
  oauthFederatedProvider?: InputMaybe<FederatedIdentityProvider>;
  oauthProfileUrl?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshToken?: InputMaybe<Scalars['String']['input']>;
  oauthRefreshTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthRefreshTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  oauthTokenCreatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  oauthUserId?: InputMaybe<Scalars['String']['input']>;
  os?: InputMaybe<Scalars['String']['input']>;
  osVersion?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  pushNotificationToken?: InputMaybe<Scalars['String']['input']>;
  screenHeight?: InputMaybe<Scalars['Int']['input']>;
  screenWidth?: InputMaybe<Scalars['Int']['input']>;
  sessionEndedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  sessionStartedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  signedInAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  signedOutAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trusted?: InputMaybe<Scalars['Boolean']['input']>;
  trustedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserDeviceListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserDeviceWithoutAuth = {
  __typename?: 'UserDeviceWithoutAuth';
  acceptedLanguage?: Maybe<Scalars['String']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  appVersion?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  consumer?: Maybe<Scalars['String']['output']>;
  consumerVersion?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  deviceType?: Maybe<Scalars['String']['output']>;
  deviceUuid: Scalars['String']['output'];
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  identityProvider?: Maybe<IdentityProvider>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  isPhoneNumberVerified: Scalars['Boolean']['output'];
  isTablet: Scalars['Boolean']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  model?: Maybe<Scalars['String']['output']>;
  oauthProfileUrl?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  osVersion?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  screenHeight: Scalars['Int']['output'];
  screenWidth: Scalars['Int']['output'];
  sessionEndedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  sessionStartedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  signedInAt?: Maybe<Scalars['DateTimeISO']['output']>;
  signedOutAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trusted: Scalars['Boolean']['output'];
  trustedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type UserIdentInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  inviteCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userIdent?: InputMaybe<Scalars['String']['input']>;
};

export enum UserIdentType {
  Any = 'any',
  Email = 'email',
  Id = 'id',
  InviteCode = 'inviteCode',
  OauthProfileUrl = 'oauthProfileUrl',
  OauthUserId = 'oauthUserId',
  PhoneNumber = 'phoneNumber',
  UserHandle = 'userHandle'
}

export type UserInbox = {
  __typename?: 'UserInbox';
  adminNotes?: Maybe<Scalars['String']['output']>;
  channels?: Maybe<ChannelInbox>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type UserInput = {
  academicExperienceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify a list of academic experiences you want to create for the user. */
  academicExperiences?: InputMaybe<Array<AcademicExperienceInput>>;
  addToGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  appFeatures?: InputMaybe<Array<AppFeature>>;
  authType?: InputMaybe<AuthType>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  businessExperienceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify a list of business experiences you want to create for the user. */
  businessExperiences?: InputMaybe<Array<BusinessExperienceInput>>;
  cityOfOrigin?: InputMaybe<Scalars['String']['input']>;
  cityOfResidence?: InputMaybe<Scalars['String']['input']>;
  /** Used internally, will not work in GraphQL queries. */
  companies?: InputMaybe<Array<CompanyInput>>;
  /** Specify a company you want to create and add the user to. */
  company?: InputMaybe<CompanyInput>;
  companyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Users Country of origin. Use a Country Options textId. */
  countryOfOriginTextId?: InputMaybe<Scalars['String']['input']>;
  countryOfResidenceTextId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  discoverable?: InputMaybe<Scalars['Boolean']['input']>;
  educationLevelTextId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** The source of the email address, e.g. "google", "facebook", etc. */
  emailSource?: InputMaybe<Scalars['String']['input']>;
  emailUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  externalGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  fallbackUiLanguageTextId?: InputMaybe<UiLanguage>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  genderTextId?: InputMaybe<Scalars['String']['input']>;
  groupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  groupMemberships?: InputMaybe<Array<GroupMembershipInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inactivatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  inactivatedBy?: InputMaybe<Scalars['ID']['input']>;
  inviteCode?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isOnVacation?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isTestUser?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latestActivityAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  offersHelp?: InputMaybe<Scalars['Boolean']['input']>;
  onboardingStage?: InputMaybe<Scalars['String']['input']>;
  optIntoNewsletter?: InputMaybe<Scalars['Boolean']['input']>;
  parentGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  personalBio?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<UserPreferencesInput>;
  preferredLanguageTextId?: InputMaybe<Scalars['String']['input']>;
  profileRoleHistory?: InputMaybe<Array<UserProfileRoleHistoryItemInput>>;
  pronounsTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  regionOfOrigin?: InputMaybe<Scalars['String']['input']>;
  regionOfResidence?: InputMaybe<Scalars['String']['input']>;
  removeFromGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  roles?: InputMaybe<Array<UserRole>>;
  seeksHelp?: InputMaybe<Scalars['Boolean']['input']>;
  selectedUiLanguageTextId?: InputMaybe<UiLanguage>;
  signedInAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  signedOutAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  spokenLanguagesTextIds?: InputMaybe<Array<Scalars['String']['input']>>;
  ssoIdp?: InputMaybe<Scalars['String']['input']>;
  suspendedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  suspendedBy?: InputMaybe<Scalars['ID']['input']>;
  syncedToAnalyticsAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  termsAndConditionsAcceptedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trustLevel?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userHandle?: InputMaybe<Scalars['String']['input']>;
  websites?: InputMaybe<Array<LabeledStringValueInput>>;
  yearsManagementExperience?: InputMaybe<Scalars['Int']['input']>;
  yearsOwnershipExperience?: InputMaybe<Scalars['Int']['input']>;
};

export type UserListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  companyId?: InputMaybe<Scalars['ID']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtGreaterThan?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  emailIn?: InputMaybe<Array<Scalars['String']['input']>>;
  excludeContacts?: InputMaybe<Scalars['Boolean']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  excludeRoles?: InputMaybe<Array<Scalars['String']['input']>>;
  ident?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  inviteCodeIn?: InputMaybe<Array<Scalars['String']['input']>>;
  isMm2User?: InputMaybe<Scalars['Boolean']['input']>;
  latestActivityAtGreaterThan?: InputMaybe<Scalars['DateTimeISO']['input']>;
  phoneNumberIn?: InputMaybe<Array<Scalars['String']['input']>>;
  rolesIn?: InputMaybe<Array<UserRole>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  syncedWithMm2?: InputMaybe<Scalars['Boolean']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserListItem = {
  __typename?: 'UserListItem';
  academicExperiences?: Maybe<Array<AcademicExperience>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  businessExperiences?: Maybe<Array<BusinessExperience>>;
  cityOfResidence?: Maybe<Scalars['String']['output']>;
  companies: Array<Company>;
  countryOfOrigin?: Maybe<Country>;
  countryOfResidence?: Maybe<Country>;
  countryOfResidenceTextId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally. */
  discoverable?: Maybe<Scalars['Boolean']['output']>;
  educationLevel?: Maybe<EducationLevel>;
  endorsements?: Maybe<Array<EndorsementWithTypes>>;
  firstName?: Maybe<Scalars['String']['output']>;
  genderTextId?: Maybe<Scalars['String']['output']>;
  groupMemberships: Array<IGroupMembership>;
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  inactivatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestActivityAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** This attribute is a copy of the mentee group membership. */
  mentee?: Maybe<MenteesGroupMembership>;
  /** This attribute is a copy of the mentor group membership. */
  mentor?: Maybe<MentorsGroupMembership>;
  offersHelp?: Maybe<Scalars['Boolean']['output']>;
  preferredLanguageTextId?: Maybe<Scalars['String']['output']>;
  profileCompletionPercentage: Scalars['Int']['output'];
  profileRole: UserProfileRole;
  pronouns: Array<Pronoun>;
  pronounsDisplay: Scalars['String']['output'];
  regionOfResidence?: Maybe<Scalars['String']['output']>;
  roles: Array<UserRole>;
  seeksHelp?: Maybe<Scalars['Boolean']['output']>;
  spokenLanguagesTextIds: Array<Scalars['String']['output']>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trustLevel: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userBlocks?: Maybe<Array<UserBlock>>;
  userHandle?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<LabeledStringValue>>;
  yearsManagementExperience?: Maybe<Scalars['Int']['output']>;
  yearsOwnershipExperience?: Maybe<Scalars['Int']['output']>;
};

export type UserMetadata = BaseModelMetadata & {
  __typename?: 'UserMetadata';
  channelsMetadata: ChannelsUserMetadata;
  groupsMetadata: GroupsUserMetadata;
  totalTimeOnPlatform: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  notificationOptions?: Maybe<Array<NotificationOptions>>;
  shareEmail?: Maybe<Scalars['Boolean']['output']>;
  sharePhoneNumber?: Maybe<Scalars['Boolean']['output']>;
  showWelcomeMessage?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type UserPreferencesInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  notificationOptionsInput?: InputMaybe<Array<NotificationOptionsInput>>;
  shareEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sharePhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  showWelcomeMessage?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export enum UserProfileRole {
  Both = 'both',
  Mentee = 'mentee',
  Mentor = 'mentor',
  None = 'none'
}

export type UserProfileRoleHistoryItem = {
  __typename?: 'UserProfileRoleHistoryItem';
  createdAt: Scalars['DateTimeISO']['output'];
  newRole: UserProfileRole;
};

export type UserProfileRoleHistoryItemInput = {
  createdAt?: Scalars['DateTimeISO']['input'];
  newRole?: UserProfileRole;
};

export enum UserRole {
  Admin = 'admin',
  Qa = 'qa',
  Staff = 'staff',
  Support = 'support',
  Test = 'test'
}

export type UserSearch = {
  __typename?: 'UserSearch';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  /** A list of user IDs of users that should not be included into the search results, i.e. blocked users. */
  excludeUserIds?: Maybe<Array<Scalars['ID']['output']>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  filter?: Maybe<UserSearchFilter>;
  id: Scalars['ID']['output'];
  matchingEngineId?: Maybe<Scalars['ID']['output']>;
  maxResultCount: Scalars['Int']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  name?: Maybe<Scalars['String']['output']>;
  resultExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  runInfos?: Maybe<Array<UserSearchRunInfo>>;
  subscription?: Maybe<UserSearchSubscriptionType>;
  topFoundUsers: Array<UserListItem>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  /** The ID of the user that is searching and owns this object */
  userId: Scalars['ID']['output'];
  userSearchType: UserSearchType;
};

export enum UserSearchFieldOption {
  Any = 'any',
  IsFalse = 'isFalse',
  IsTrue = 'isTrue',
  Match = 'match'
}

export type UserSearchFilter = {
  __typename?: 'UserSearchFilter';
  companyStagesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  countryTextIds?: Maybe<Array<Scalars['String']['output']>>;
  expertisesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  industriesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  languagesTextIds?: Maybe<Array<Scalars['String']['output']>>;
  latestActivityAfter?: Maybe<Scalars['DateTimeISO']['output']>;
  offersHelp?: Maybe<UserSearchFieldOption>;
  searchText?: Maybe<Scalars['String']['output']>;
  seeksHelp?: Maybe<UserSearchFieldOption>;
};

export type UserSearchFilterInput = {
  companyStagesTextIds?: Array<Scalars['String']['input']>;
  countryTextIds?: Array<Scalars['String']['input']>;
  expertisesTextIds?: Array<Scalars['String']['input']>;
  industriesTextIds?: Array<Scalars['String']['input']>;
  languagesTextIds?: Array<Scalars['String']['input']>;
  latestActivityAfter?: InputMaybe<Scalars['DateTimeISO']['input']>;
  offersHelp?: InputMaybe<UserSearchFieldOption>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  seeksHelp?: InputMaybe<UserSearchFieldOption>;
};

export type UserSearchInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  /** A list of user IDs of users that should not be included into the search results, i.e. blocked users. */
  excludeUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  filter?: InputMaybe<UserSearchFilterInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  matchingEngineId?: InputMaybe<Scalars['ID']['input']>;
  maxResultCount?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  resultExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  startSearch?: Scalars['Boolean']['input'];
  subscription?: InputMaybe<UserSearchSubscriptionType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  /** The ID of the user that is searching and owns this object */
  userId?: InputMaybe<Scalars['ID']['input']>;
  userSearchType?: InputMaybe<UserSearchType>;
};

export type UserSearchListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserSearchRunInfo = {
  __typename?: 'UserSearchRunInfo';
  batchCount?: Maybe<Scalars['Int']['output']>;
  batchSize: Scalars['Int']['output'];
  durationHuman?: Maybe<Scalars['String']['output']>;
  durationInSecs?: Maybe<Scalars['Int']['output']>;
  finishedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  matchCount: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  topUserIds?: Maybe<Array<Scalars['ID']['output']>>;
  totalDurationMatching?: Maybe<Scalars['Int']['output']>;
  totalDurationReadFromDb?: Maybe<Scalars['Int']['output']>;
  totalDurationSearchInDb?: Maybe<Scalars['Int']['output']>;
  totalDurationWriteToDb?: Maybe<Scalars['Int']['output']>;
  userCount: Scalars['Int']['output'];
};

export enum UserSearchSubscriptionType {
  Daily = 'daily',
  Monthly = 'monthly',
  None = 'none',
  Weekly = 'weekly'
}

export enum UserSearchType {
  MenteeRecommendation = 'menteeRecommendation',
  MentorRecommendation = 'mentorRecommendation',
  Search = 'search'
}

export type UserTrackingInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  allowToTrack?: InputMaybe<Scalars['Boolean']['input']>;
  cookieConsentChoice?: InputMaybe<CookieChoiceTextId>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  googleClickId?: InputMaybe<Scalars['String']['input']>;
  /** This is the Google Analytics tracking ID */
  googleId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** fbp cookie */
  metaBrowserId?: InputMaybe<Scalars['String']['input']>;
  /** fbc cookie (FBCLID) */
  metaClickId?: InputMaybe<Scalars['String']['input']>;
  metaPixelId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  syncedToAnalyticsAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  trackId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserWithScore = {
  __typename?: 'UserWithScore';
  academicExperiences?: Maybe<Array<AcademicExperience>>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  businessExperiences?: Maybe<Array<BusinessExperience>>;
  cityOfResidence?: Maybe<Scalars['String']['output']>;
  companies: Array<Company>;
  countryOfOrigin?: Maybe<Country>;
  countryOfResidence?: Maybe<Country>;
  countryOfResidenceTextId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally. */
  discoverable?: Maybe<Scalars['Boolean']['output']>;
  educationLevel?: Maybe<EducationLevel>;
  endorsements?: Maybe<Array<EndorsementWithTypes>>;
  firstName?: Maybe<Scalars['String']['output']>;
  genderTextId?: Maybe<Scalars['String']['output']>;
  groupMemberships: Array<IGroupMembership>;
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  inactivatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  isOnVacation?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestActivityAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** This attribute is a copy of the mentee group membership. */
  mentee?: Maybe<MenteesGroupMembership>;
  /** This attribute is a copy of the mentor group membership. */
  mentor?: Maybe<MentorsGroupMembership>;
  offersHelp?: Maybe<Scalars['Boolean']['output']>;
  preferredLanguageTextId?: Maybe<Scalars['String']['output']>;
  profileCompletionPercentage: Scalars['Int']['output'];
  profileRole: UserProfileRole;
  pronouns: Array<Pronoun>;
  pronounsDisplay: Scalars['String']['output'];
  regionOfResidence?: Maybe<Scalars['String']['output']>;
  roles: Array<UserRole>;
  /** The score value that the matching engine assigned to this user. */
  score?: Maybe<Scalars['Float']['output']>;
  seeksHelp?: Maybe<Scalars['Boolean']['output']>;
  spokenLanguagesTextIds: Array<Scalars['String']['output']>;
  suspendedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  trustLevel: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userBlocks?: Maybe<Array<UserBlock>>;
  userHandle?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<LabeledStringValue>>;
  yearsManagementExperience?: Maybe<Scalars['Int']['output']>;
  yearsOwnershipExperience?: Maybe<Scalars['Int']['output']>;
};

export type VerifyMultiStepActionTokenInput = {
  actionId?: Scalars['String']['input'];
  newPassword?: InputMaybe<Scalars['String']['input']>;
  token?: Scalars['String']['input'];
};

export type VerifyOneTimeAuthTokenInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deviceUuid?: Scalars['String']['input'];
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  token?: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  userIdent?: Scalars['String']['input'];
  userIdentType?: InputMaybe<UserIdentType>;
};

export type Wallet = {
  __typename?: 'Wallet';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};

export type WalletInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type WalletItem = {
  __typename?: 'WalletItem';
  adminNotes?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  balance: Scalars['Int']['output'];
  balanceUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  barcodeFormat?: Maybe<BarcodeType>;
  brandId: Scalars['ID']['output'];
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  hasBarcode?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  imageSourceBack?: Maybe<Scalars['String']['output']>;
  imageSourceFront?: Maybe<Scalars['String']['output']>;
  initialBalance: Scalars['Int']['output'];
  instructionsEn?: Maybe<Scalars['String']['output']>;
  instructionsUrl?: Maybe<Scalars['String']['output']>;
  issuedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  name: Scalars['String']['output'];
  pin?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  productType: ProductType;
  purchaseOrderItemId: Scalars['ID']['output'];
  referenceUrl?: Maybe<Scalars['String']['output']>;
  sortIndex: Scalars['Int']['output'];
  source?: Maybe<WalletItemSource>;
  termsEn?: Maybe<Scalars['String']['output']>;
  termsUrl?: Maybe<Scalars['String']['output']>;
  transferAcceptedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  transferStartedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  walletId: Scalars['ID']['output'];
};

export type WalletItemInput = {
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  balance?: InputMaybe<Scalars['Int']['input']>;
  balanceUpdatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  barcodeFormat?: InputMaybe<BarcodeType>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  expiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  hasBarcode?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageSourceBack?: InputMaybe<Scalars['String']['input']>;
  imageSourceFront?: InputMaybe<Scalars['String']['input']>;
  initialBalance?: InputMaybe<Scalars['Int']['input']>;
  instructionsEn?: InputMaybe<Scalars['String']['input']>;
  instructionsUrl?: InputMaybe<Scalars['String']['input']>;
  issuedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  pin?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  productType?: InputMaybe<ProductType>;
  purchaseOrderItemId?: InputMaybe<Scalars['ID']['input']>;
  referenceUrl?: InputMaybe<Scalars['String']['input']>;
  sortIndex?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<WalletItemSource>;
  termsEn?: InputMaybe<Scalars['String']['input']>;
  termsUrl?: InputMaybe<Scalars['String']['input']>;
  transferAcceptedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  transferStartedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type WalletItemListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export enum WalletItemSource {
  Gifted = 'gifted',
  Purchased = 'purchased',
  User = 'user'
}

export type WalletItemTransfer = {
  __typename?: 'WalletItemTransfer';
  /** The recipient accepted this transfer */
  acceptedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  adminNotes?: Maybe<Scalars['String']['output']>;
  /** The sender archived this transfer */
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** The sender canceled this transfer */
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  /** The recipient declined this transfer */
  declinedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  messageText?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<BaseModelMetadata>;
  notificationId?: Maybe<Scalars['ID']['output']>;
  recipientEmail?: Maybe<Scalars['String']['output']>;
  recipientFullName?: Maybe<Scalars['String']['output']>;
  recipientPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** email | phoneNumber | link */
  sendMethod?: Maybe<Scalars['String']['output']>;
  /** i.e. WhatsApp, Signal, ... */
  sendPlatform?: Maybe<Scalars['String']['output']>;
  /** Date this transfer was sent */
  sentAt?: Maybe<Scalars['DateTimeISO']['output']>;
  subjectText?: Maybe<Scalars['String']['output']>;
  transferSlug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  walletItemId: Scalars['ID']['output'];
};

export type WalletItemTransferInput = {
  /** The recipient accepted this transfer */
  acceptedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  adminNotes?: InputMaybe<Scalars['String']['input']>;
  /** The sender archived this transfer */
  archivedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  /** The sender canceled this transfer */
  canceledAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  /** The recipient declined this transfer */
  declinedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<ModelEventInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messageText?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<BaseModelMetadataInput>;
  notificationId?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  recipientEmail?: InputMaybe<Scalars['String']['input']>;
  recipientFullName?: InputMaybe<Scalars['String']['input']>;
  recipientPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** email | phoneNumber | link */
  sendMethod?: InputMaybe<Scalars['String']['input']>;
  /** i.e. WhatsApp, Signal, ... */
  sendPlatform?: InputMaybe<Scalars['String']['input']>;
  /** Date this transfer was sent */
  sentAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  subjectText?: InputMaybe<Scalars['String']['input']>;
  transferSecret?: InputMaybe<Scalars['String']['input']>;
  transferSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  walletItemId?: InputMaybe<Scalars['ID']['input']>;
};

export type WalletItemTransferListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type WalletItemTransferRecipientInfo = {
  __typename?: 'WalletItemTransferRecipientInfo';
  brand?: Maybe<Brand>;
  product?: Maybe<GiftCardProduct>;
  secretCheck?: Maybe<Scalars['String']['output']>;
  walletItem: WalletItem;
  walletItemTransfer: WalletItemTransfer;
};

export type WalletListFilter = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  textSearchFields?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAtUntil?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type WalletServiceRecord = {
  __typename?: 'WalletServiceRecord';
  adminNotes?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<ModelEvent>>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<BaseModelMetadata>;
  serviceName: ServiceName;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
};
