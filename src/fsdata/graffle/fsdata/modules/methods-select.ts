import type * as $$Utilities from 'graffle/utilities-for-generated';

import * as $$SelectionSets from './selection-sets.js';

//
//
//
//
//
//
// ==================================================================================================
//                                      Select Methods Interface
// ==================================================================================================
//
//
//
//
//
//

export interface $MethodsSelect {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  UserMetadata: UserMetadata;
  ChannelsUserMetadata: ChannelsUserMetadata;
  GroupsUserMetadata: GroupsUserMetadata;
  GroupMembership: GroupMembership;
  ModelEvent: ModelEvent;
  Expertise: Expertise;
  Option: Option;
  Industry: Industry;
  MenteesGroupMembership: MenteesGroupMembership;
  MentorsGroupMembership: MentorsGroupMembership;
  IqlaaGroupMembership: IqlaaGroupMembership;
  StriveIndonesiaGroupMembership: StriveIndonesiaGroupMembership;
  CompanyStage: CompanyStage;
  CompanyType: CompanyType;
  EducationLevel: EducationLevel;
  Gender: Gender;
  Pronoun: Pronoun;
  UserInbox: UserInbox;
  ChannelInbox: ChannelInbox;
  ChannelInboxItemMessage: ChannelInboxItemMessage;
  ChannelInboxItemInvitation: ChannelInboxItemInvitation;
  User: User;
  LabeledStringValue: LabeledStringValue;
  UserPreferences: UserPreferences;
  NotificationOptions: NotificationOptions;
  UserDeviceWithoutAuth: UserDeviceWithoutAuth;
  UserBlock: UserBlock;
  Contact: Contact;
  ContactMetadata: ContactMetadata;
  ContactType: ContactType;
  Company: Company;
  AcademicExperience: AcademicExperience;
  BusinessExperience: BusinessExperience;
  UploadedAsset: UploadedAsset;
  UserProfileRoleHistoryItem: UserProfileRoleHistoryItem;
  Country: Country;
  Language: Language;
  Notification: Notification;
  NotificationContext: NotificationContext;
  Channel: Channel;
  ChannelMetadata: ChannelMetadata;
  BgLatestUnseenChannelMessageInfo: BgLatestUnseenChannelMessageInfo;
  BgChannelStatus: BgChannelStatus;
  ChannelInvitation: ChannelInvitation;
  DeclineChannelInvitationReason: DeclineChannelInvitationReason;
  ChannelMessage: ChannelMessage;
  ChannelMessageMetadata: ChannelMessageMetadata;
  ChannelMessageStatus: ChannelMessageStatus;
  ChannelParticipant: ChannelParticipant;
  BgChannelParticipantMetadata: BgChannelParticipantMetadata;
  UserListItem: UserListItem;
  EndorsementWithTypes: EndorsementWithTypes;
  ModerationConcern: ModerationConcern;
  ContentTagType: ContentTagType;
  Group: Group;
  AppliedGroupRule: AppliedGroupRule;
  GroupRuleBaseConfig: GroupRuleBaseConfig;
  AdminTask: AdminTask;
  AdminTaskDef: AdminTaskDef;
  AdminTaskArgDef: AdminTaskArgDef;
  ErrorCodeOption: ErrorCodeOption;
  IndonesianCity: IndonesianCity;
  IndonesianProvince: IndonesianProvince;
  IqlaaJordanianDistrict: IqlaaJordanianDistrict;
  IqlaaJordanianGovernorate: IqlaaJordanianGovernorate;
  UserSearch: UserSearch;
  UserSearchFilter: UserSearchFilter;
  UserSearchRunInfo: UserSearchRunInfo;
  UserWithScore: UserWithScore;
  ServiceRequest: ServiceRequest;
  ContactListItem: ContactListItem;
  SidMultiStepAction: SidMultiStepAction;
  MultiStepActionError: MultiStepActionError;
  SidMultiStepActionProgress: SidMultiStepActionProgress;
  MyUser: MyUser;
  ReportUserReason: ReportUserReason;
  Training: Training;
  TrainingContentPage: TrainingContentPage;
  TrainingSession: TrainingSession;
  TrainingSessionCompletionInfo: TrainingSessionCompletionInfo;
  UserAuthResponse: UserAuthResponse;
  ContentTag: ContentTag;
  SupportChannelConfig: SupportChannelConfig;
  NotificationTemplate: NotificationTemplate;
  BgChannelChangedEvent: BgChannelChangedEvent;
  ObjectChangedEvent: ObjectChangedEvent;
  BaseModel: BaseModel;
  BaseModelMetadata: BaseModelMetadata;
  IGroupMembership: IGroupMembership;
}

//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//

export interface Query {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query>,
  ): $SelectionSet;
}

export interface Mutation {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation>,
  ): $SelectionSet;
}

export interface Subscription {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.Subscription
    >,
  ): $SelectionSet;
}

//
//
//
//
//
//
// ==================================================================================================
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

export interface UserMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserMetadata
    >,
  ): $SelectionSet;
}

export interface ChannelsUserMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelsUserMetadata
    >,
  ): $SelectionSet;
}

export interface GroupsUserMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.GroupsUserMetadata
    >,
  ): $SelectionSet;
}

export interface GroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.GroupMembership
    >,
  ): $SelectionSet;
}

export interface ModelEvent {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ModelEvent>,
  ): $SelectionSet;
}

export interface Expertise {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Expertise>,
  ): $SelectionSet;
}

export interface Option {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Option>,
  ): $SelectionSet;
}

export interface Industry {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Industry>,
  ): $SelectionSet;
}

export interface MenteesGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.MenteesGroupMembership
    >,
  ): $SelectionSet;
}

export interface MentorsGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.MentorsGroupMembership
    >,
  ): $SelectionSet;
}

export interface IqlaaGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.IqlaaGroupMembership
    >,
  ): $SelectionSet;
}

export interface StriveIndonesiaGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.StriveIndonesiaGroupMembership
    >,
  ): $SelectionSet;
}

export interface CompanyStage {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.CompanyStage
    >,
  ): $SelectionSet;
}

export interface CompanyType {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.CompanyType>,
  ): $SelectionSet;
}

export interface EducationLevel {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.EducationLevel
    >,
  ): $SelectionSet;
}

export interface Gender {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Gender>,
  ): $SelectionSet;
}

export interface Pronoun {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Pronoun>,
  ): $SelectionSet;
}

export interface UserInbox {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserInbox>,
  ): $SelectionSet;
}

export interface ChannelInbox {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelInbox
    >,
  ): $SelectionSet;
}

export interface ChannelInboxItemMessage {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelInboxItemMessage
    >,
  ): $SelectionSet;
}

export interface ChannelInboxItemInvitation {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelInboxItemInvitation
    >,
  ): $SelectionSet;
}

export interface User {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.User>,
  ): $SelectionSet;
}

export interface LabeledStringValue {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.LabeledStringValue
    >,
  ): $SelectionSet;
}

export interface UserPreferences {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserPreferences
    >,
  ): $SelectionSet;
}

export interface NotificationOptions {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.NotificationOptions
    >,
  ): $SelectionSet;
}

export interface UserDeviceWithoutAuth {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserDeviceWithoutAuth
    >,
  ): $SelectionSet;
}

export interface UserBlock {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserBlock>,
  ): $SelectionSet;
}

export interface Contact {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Contact>,
  ): $SelectionSet;
}

export interface ContactMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ContactMetadata
    >,
  ): $SelectionSet;
}

export interface ContactType {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContactType>,
  ): $SelectionSet;
}

export interface Company {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Company>,
  ): $SelectionSet;
}

export interface AcademicExperience {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.AcademicExperience
    >,
  ): $SelectionSet;
}

export interface BusinessExperience {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.BusinessExperience
    >,
  ): $SelectionSet;
}

export interface UploadedAsset {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UploadedAsset
    >,
  ): $SelectionSet;
}

export interface UserProfileRoleHistoryItem {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserProfileRoleHistoryItem
    >,
  ): $SelectionSet;
}

export interface Country {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Country>,
  ): $SelectionSet;
}

export interface Language {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Language>,
  ): $SelectionSet;
}

export interface Notification {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.Notification
    >,
  ): $SelectionSet;
}

export interface NotificationContext {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.NotificationContext
    >,
  ): $SelectionSet;
}

export interface Channel {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Channel>,
  ): $SelectionSet;
}

export interface ChannelMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelMetadata
    >,
  ): $SelectionSet;
}

export interface BgLatestUnseenChannelMessageInfo {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.BgLatestUnseenChannelMessageInfo
    >,
  ): $SelectionSet;
}

export interface BgChannelStatus {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.BgChannelStatus
    >,
  ): $SelectionSet;
}

export interface ChannelInvitation {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelInvitation
    >,
  ): $SelectionSet;
}

export interface DeclineChannelInvitationReason {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.DeclineChannelInvitationReason
    >,
  ): $SelectionSet;
}

export interface ChannelMessage {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelMessage
    >,
  ): $SelectionSet;
}

export interface ChannelMessageMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelMessageMetadata
    >,
  ): $SelectionSet;
}

export interface ChannelMessageStatus {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelMessageStatus
    >,
  ): $SelectionSet;
}

export interface ChannelParticipant {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ChannelParticipant
    >,
  ): $SelectionSet;
}

export interface BgChannelParticipantMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.BgChannelParticipantMetadata
    >,
  ): $SelectionSet;
}

export interface UserListItem {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserListItem
    >,
  ): $SelectionSet;
}

export interface EndorsementWithTypes {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.EndorsementWithTypes
    >,
  ): $SelectionSet;
}

export interface ModerationConcern {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ModerationConcern
    >,
  ): $SelectionSet;
}

export interface ContentTagType {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ContentTagType
    >,
  ): $SelectionSet;
}

export interface Group {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Group>,
  ): $SelectionSet;
}

export interface AppliedGroupRule {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.AppliedGroupRule
    >,
  ): $SelectionSet;
}

export interface GroupRuleBaseConfig {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.GroupRuleBaseConfig
    >,
  ): $SelectionSet;
}

export interface AdminTask {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.AdminTask>,
  ): $SelectionSet;
}

export interface AdminTaskDef {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.AdminTaskDef
    >,
  ): $SelectionSet;
}

export interface AdminTaskArgDef {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.AdminTaskArgDef
    >,
  ): $SelectionSet;
}

export interface ErrorCodeOption {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ErrorCodeOption
    >,
  ): $SelectionSet;
}

export interface IndonesianCity {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.IndonesianCity
    >,
  ): $SelectionSet;
}

export interface IndonesianProvince {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.IndonesianProvince
    >,
  ): $SelectionSet;
}

export interface IqlaaJordanianDistrict {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.IqlaaJordanianDistrict
    >,
  ): $SelectionSet;
}

export interface IqlaaJordanianGovernorate {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.IqlaaJordanianGovernorate
    >,
  ): $SelectionSet;
}

export interface UserSearch {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserSearch>,
  ): $SelectionSet;
}

export interface UserSearchFilter {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserSearchFilter
    >,
  ): $SelectionSet;
}

export interface UserSearchRunInfo {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserSearchRunInfo
    >,
  ): $SelectionSet;
}

export interface UserWithScore {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserWithScore
    >,
  ): $SelectionSet;
}

export interface ServiceRequest {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ServiceRequest
    >,
  ): $SelectionSet;
}

export interface ContactListItem {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ContactListItem
    >,
  ): $SelectionSet;
}

export interface SidMultiStepAction {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.SidMultiStepAction
    >,
  ): $SelectionSet;
}

export interface MultiStepActionError {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.MultiStepActionError
    >,
  ): $SelectionSet;
}

export interface SidMultiStepActionProgress {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.SidMultiStepActionProgress
    >,
  ): $SelectionSet;
}

export interface MyUser {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MyUser>,
  ): $SelectionSet;
}

export interface ReportUserReason {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ReportUserReason
    >,
  ): $SelectionSet;
}

export interface Training {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Training>,
  ): $SelectionSet;
}

export interface TrainingContentPage {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.TrainingContentPage
    >,
  ): $SelectionSet;
}

export interface TrainingSession {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.TrainingSession
    >,
  ): $SelectionSet;
}

export interface TrainingSessionCompletionInfo {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.TrainingSessionCompletionInfo
    >,
  ): $SelectionSet;
}

export interface UserAuthResponse {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.UserAuthResponse
    >,
  ): $SelectionSet;
}

export interface ContentTag {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContentTag>,
  ): $SelectionSet;
}

export interface SupportChannelConfig {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.SupportChannelConfig
    >,
  ): $SelectionSet;
}

export interface NotificationTemplate {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.NotificationTemplate
    >,
  ): $SelectionSet;
}

export interface BgChannelChangedEvent {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.BgChannelChangedEvent
    >,
  ): $SelectionSet;
}

export interface ObjectChangedEvent {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.ObjectChangedEvent
    >,
  ): $SelectionSet;
}

export interface BaseModel {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BaseModel>,
  ): $SelectionSet;
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Union
// ==================================================================================================
//
//
//
//
//
//

//
//
//
//
//
//
// ==================================================================================================
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//

export interface BaseModelMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.BaseModelMetadata
    >,
  ): $SelectionSet;
}

export interface IGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<
      $SelectionSet,
      $$SelectionSets.IGroupMembership
    >,
  ): $SelectionSet;
}
