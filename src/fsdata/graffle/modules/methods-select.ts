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
  GroupMembership: GroupMembership;
  ModelEvent: ModelEvent;
  Expertise: Expertise;
  Option: Option;
  Industry: Industry;
  MenteesGroupMembership: MenteesGroupMembership;
  MentorsGroupMembership: MentorsGroupMembership;
  UserMetadata: UserMetadata;
  ChannelsUserMetadata: ChannelsUserMetadata;
  GroupsUserMetadata: GroupsUserMetadata;
  MastercardGroupMembership: MastercardGroupMembership;
  IqlaaGroupMembership: IqlaaGroupMembership;
  StriveIndonesiaGroupMembership: StriveIndonesiaGroupMembership;
  ChannelInvitation: ChannelInvitation;
  Channel: Channel;
  ChannelMetadata: ChannelMetadata;
  BgChannelStatus: BgChannelStatus;
  User: User;
  LabeledStringValue: LabeledStringValue;
  UserPreferences: UserPreferences;
  NotificationOptions: NotificationOptions;
  UserDeviceWithoutAuth: UserDeviceWithoutAuth;
  UserBlock: UserBlock;
  Company: Company;
  CompanyStage: CompanyStage;
  CompanyType: CompanyType;
  AcademicExperience: AcademicExperience;
  BusinessExperience: BusinessExperience;
  UploadedAsset: UploadedAsset;
  UserProfileRoleHistoryItem: UserProfileRoleHistoryItem;
  Country: Country;
  Gender: Gender;
  Language: Language;
  Notification: Notification;
  NotificationContext: NotificationContext;
  ChannelParticipant: ChannelParticipant;
  BgChannelParticipantUserInfo: BgChannelParticipantUserInfo;
  Contact: Contact;
  ContactMetadata: ContactMetadata;
  ContactType: ContactType;
  UserListItem: UserListItem;
  EducationLevel: EducationLevel;
  EndorsementWithTypes: EndorsementWithTypes;
  ContentTagType: ContentTagType;
  Group: Group;
  AppliedGroupRule: AppliedGroupRule;
  GroupRuleBaseConfig: GroupRuleBaseConfig;
  GroupCms: GroupCms;
  GroupCmsOnboarding: GroupCmsOnboarding;
  Pronoun: Pronoun;
  ChannelMessage: ChannelMessage;
  ChannelMessageMetadata: ChannelMessageMetadata;
  ChannelMessageStatus: ChannelMessageStatus;
  DeclineChannelInvitationReason: DeclineChannelInvitationReason;
  ChannelListItem: ChannelListItem;
  Ethnicity: Ethnicity;
  UserCms: UserCms;
  UserInbox: UserInbox;
  ChannelInbox: ChannelInbox;
  ChannelInboxItemMessage: ChannelInboxItemMessage;
  ChannelInboxItemInvitation: ChannelInboxItemInvitation;
  AdminTask: AdminTask;
  AdminTaskDef: AdminTaskDef;
  AdminTaskArgDef: AdminTaskArgDef;
  ErrorCodeOption: ErrorCodeOption;
  IndonesianCity: IndonesianCity;
  IndonesianProvince: IndonesianProvince;
  IqlaaJordanianDistrict: IqlaaJordanianDistrict;
  IqlaaJordanianGovernorate: IqlaaJordanianGovernorate;
  MastercardBank: MastercardBank;
  Brand: Brand;
  PurchaseOrderItem: PurchaseOrderItem;
  PurchaseOrder: PurchaseOrder;
  ShoppingCartItem: ShoppingCartItem;
  ShoppingCart: ShoppingCart;
  WalletItem: WalletItem;
  WalletItemTransferRecipientInfo: WalletItemTransferRecipientInfo;
  WalletItemTransfer: WalletItemTransfer;
  GiftCardProduct: GiftCardProduct;
  GiftCardDenomination: GiftCardDenomination;
  Wallet: Wallet;
  WalletServiceRecord: WalletServiceRecord;
  MarketplaceServiceRecord: MarketplaceServiceRecord;
  ProductCategory: ProductCategory;
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
  ContentStatus: ContentStatus;
  BgChannelChangedEvent: BgChannelChangedEvent;
  UserInboxUpdatedAppEventData: UserInboxUpdatedAppEventData;
  ObjectChangedEvent: ObjectChangedEvent;
  BaseModel: BaseModel;
  IGroupMembership: IGroupMembership;
  BaseModelMetadata: BaseModelMetadata;
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
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query>): $SelectionSet;
}

export interface Mutation {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation>): $SelectionSet;
}

export interface Subscription {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Subscription>): $SelectionSet;
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

export interface GroupMembership {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.GroupMembership>): $SelectionSet;
}

export interface ModelEvent {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ModelEvent>): $SelectionSet;
}

export interface Expertise {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Expertise>): $SelectionSet;
}

export interface Option {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Option>): $SelectionSet;
}

export interface Industry {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Industry>): $SelectionSet;
}

export interface MenteesGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MenteesGroupMembership>,
  ): $SelectionSet;
}

export interface MentorsGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MentorsGroupMembership>,
  ): $SelectionSet;
}

export interface UserMetadata {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserMetadata>): $SelectionSet;
}

export interface ChannelsUserMetadata {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelsUserMetadata>): $SelectionSet;
}

export interface GroupsUserMetadata {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.GroupsUserMetadata>): $SelectionSet;
}

export interface MastercardGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MastercardGroupMembership>,
  ): $SelectionSet;
}

export interface IqlaaGroupMembership {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.IqlaaGroupMembership>): $SelectionSet;
}

export interface StriveIndonesiaGroupMembership {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.StriveIndonesiaGroupMembership>,
  ): $SelectionSet;
}

export interface ChannelInvitation {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelInvitation>): $SelectionSet;
}

export interface Channel {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Channel>): $SelectionSet;
}

export interface ChannelMetadata {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelMetadata>): $SelectionSet;
}

export interface BgChannelStatus {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BgChannelStatus>): $SelectionSet;
}

export interface User {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.User>): $SelectionSet;
}

export interface LabeledStringValue {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.LabeledStringValue>): $SelectionSet;
}

export interface UserPreferences {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserPreferences>): $SelectionSet;
}

export interface NotificationOptions {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.NotificationOptions>): $SelectionSet;
}

export interface UserDeviceWithoutAuth {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserDeviceWithoutAuth>): $SelectionSet;
}

export interface UserBlock {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserBlock>): $SelectionSet;
}

export interface Company {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Company>): $SelectionSet;
}

export interface CompanyStage {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.CompanyStage>): $SelectionSet;
}

export interface CompanyType {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.CompanyType>): $SelectionSet;
}

export interface AcademicExperience {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.AcademicExperience>): $SelectionSet;
}

export interface BusinessExperience {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BusinessExperience>): $SelectionSet;
}

export interface UploadedAsset {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UploadedAsset>): $SelectionSet;
}

export interface UserProfileRoleHistoryItem {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserProfileRoleHistoryItem>,
  ): $SelectionSet;
}

export interface Country {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Country>): $SelectionSet;
}

export interface Gender {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Gender>): $SelectionSet;
}

export interface Language {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Language>): $SelectionSet;
}

export interface Notification {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Notification>): $SelectionSet;
}

export interface NotificationContext {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.NotificationContext>): $SelectionSet;
}

export interface ChannelParticipant {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelParticipant>): $SelectionSet;
}

export interface BgChannelParticipantUserInfo {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BgChannelParticipantUserInfo>,
  ): $SelectionSet;
}

export interface Contact {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Contact>): $SelectionSet;
}

export interface ContactMetadata {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContactMetadata>): $SelectionSet;
}

export interface ContactType {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContactType>): $SelectionSet;
}

export interface UserListItem {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserListItem>): $SelectionSet;
}

export interface EducationLevel {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.EducationLevel>): $SelectionSet;
}

export interface EndorsementWithTypes {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.EndorsementWithTypes>): $SelectionSet;
}

export interface ContentTagType {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContentTagType>): $SelectionSet;
}

export interface Group {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Group>): $SelectionSet;
}

export interface AppliedGroupRule {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.AppliedGroupRule>): $SelectionSet;
}

export interface GroupRuleBaseConfig {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.GroupRuleBaseConfig>): $SelectionSet;
}

export interface GroupCms {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.GroupCms>): $SelectionSet;
}

export interface GroupCmsOnboarding {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.GroupCmsOnboarding>): $SelectionSet;
}

export interface Pronoun {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Pronoun>): $SelectionSet;
}

export interface ChannelMessage {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelMessage>): $SelectionSet;
}

export interface ChannelMessageMetadata {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelMessageMetadata>,
  ): $SelectionSet;
}

export interface ChannelMessageStatus {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelMessageStatus>): $SelectionSet;
}

export interface DeclineChannelInvitationReason {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.DeclineChannelInvitationReason>,
  ): $SelectionSet;
}

export interface ChannelListItem {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelListItem>): $SelectionSet;
}

export interface Ethnicity {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Ethnicity>): $SelectionSet;
}

export interface UserCms {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserCms>): $SelectionSet;
}

export interface UserInbox {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserInbox>): $SelectionSet;
}

export interface ChannelInbox {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelInbox>): $SelectionSet;
}

export interface ChannelInboxItemMessage {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelInboxItemMessage>,
  ): $SelectionSet;
}

export interface ChannelInboxItemInvitation {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ChannelInboxItemInvitation>,
  ): $SelectionSet;
}

export interface AdminTask {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.AdminTask>): $SelectionSet;
}

export interface AdminTaskDef {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.AdminTaskDef>): $SelectionSet;
}

export interface AdminTaskArgDef {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.AdminTaskArgDef>): $SelectionSet;
}

export interface ErrorCodeOption {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ErrorCodeOption>): $SelectionSet;
}

export interface IndonesianCity {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.IndonesianCity>): $SelectionSet;
}

export interface IndonesianProvince {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.IndonesianProvince>): $SelectionSet;
}

export interface IqlaaJordanianDistrict {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.IqlaaJordanianDistrict>,
  ): $SelectionSet;
}

export interface IqlaaJordanianGovernorate {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.IqlaaJordanianGovernorate>,
  ): $SelectionSet;
}

export interface MastercardBank {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MastercardBank>): $SelectionSet;
}

export interface Brand {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Brand>): $SelectionSet;
}

export interface PurchaseOrderItem {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.PurchaseOrderItem>): $SelectionSet;
}

export interface PurchaseOrder {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.PurchaseOrder>): $SelectionSet;
}

export interface ShoppingCartItem {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ShoppingCartItem>): $SelectionSet;
}

export interface ShoppingCart {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ShoppingCart>): $SelectionSet;
}

export interface WalletItem {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.WalletItem>): $SelectionSet;
}

export interface WalletItemTransferRecipientInfo {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.WalletItemTransferRecipientInfo>,
  ): $SelectionSet;
}

export interface WalletItemTransfer {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.WalletItemTransfer>): $SelectionSet;
}

export interface GiftCardProduct {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.GiftCardProduct>): $SelectionSet;
}

export interface GiftCardDenomination {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.GiftCardDenomination>): $SelectionSet;
}

export interface Wallet {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Wallet>): $SelectionSet;
}

export interface WalletServiceRecord {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.WalletServiceRecord>): $SelectionSet;
}

export interface MarketplaceServiceRecord {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MarketplaceServiceRecord>,
  ): $SelectionSet;
}

export interface ProductCategory {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ProductCategory>): $SelectionSet;
}

export interface UserSearch {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserSearch>): $SelectionSet;
}

export interface UserSearchFilter {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserSearchFilter>): $SelectionSet;
}

export interface UserSearchRunInfo {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserSearchRunInfo>): $SelectionSet;
}

export interface UserWithScore {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserWithScore>): $SelectionSet;
}

export interface ServiceRequest {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ServiceRequest>): $SelectionSet;
}

export interface ContactListItem {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContactListItem>): $SelectionSet;
}

export interface SidMultiStepAction {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.SidMultiStepAction>): $SelectionSet;
}

export interface MultiStepActionError {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MultiStepActionError>): $SelectionSet;
}

export interface SidMultiStepActionProgress {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.SidMultiStepActionProgress>,
  ): $SelectionSet;
}

export interface MyUser {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.MyUser>): $SelectionSet;
}

export interface ReportUserReason {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ReportUserReason>): $SelectionSet;
}

export interface Training {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Training>): $SelectionSet;
}

export interface TrainingContentPage {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.TrainingContentPage>): $SelectionSet;
}

export interface TrainingSession {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.TrainingSession>): $SelectionSet;
}

export interface TrainingSessionCompletionInfo {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.TrainingSessionCompletionInfo>,
  ): $SelectionSet;
}

export interface UserAuthResponse {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserAuthResponse>): $SelectionSet;
}

export interface ContentTag {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContentTag>): $SelectionSet;
}

export interface SupportChannelConfig {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.SupportChannelConfig>): $SelectionSet;
}

export interface NotificationTemplate {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.NotificationTemplate>): $SelectionSet;
}

export interface ContentStatus {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ContentStatus>): $SelectionSet;
}

export interface BgChannelChangedEvent {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BgChannelChangedEvent>): $SelectionSet;
}

export interface UserInboxUpdatedAppEventData {
  <$SelectionSet>(
    selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.UserInboxUpdatedAppEventData>,
  ): $SelectionSet;
}

export interface ObjectChangedEvent {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.ObjectChangedEvent>): $SelectionSet;
}

export interface BaseModel {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BaseModel>): $SelectionSet;
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

export interface IGroupMembership {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.IGroupMembership>): $SelectionSet;
}

export interface BaseModelMetadata {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BaseModelMetadata>): $SelectionSet;
}
