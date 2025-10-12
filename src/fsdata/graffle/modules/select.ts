import { createSelect } from 'graffle/client';
import type * as $$Utilities from 'graffle/utilities-for-generated';
import type { OperationTypeNode } from 'graphql';

import * as $$Data from './data.js';
import * as $$Schema from './schema.js';
import * as $$SelectionSets from './selection-sets.js';

//
//
//
//
//
//
// ==================================================================================================
//                                              Runtime
// ==================================================================================================
//
//
//
//
//
//
// eslint-disable-next-line import/export
export const Select = createSelect($$Data.Name);

//
//
//
//
//
//
// ==================================================================================================
//                                             Buildtime
// ==================================================================================================
//
//
//
//
//
//
// eslint-disable-next-line import/export
export namespace Select {
  //                                                Root
  // --------------------------------------------------------------------------------------------------
  //
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.DocumentBuilder.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    OperationTypeNode.QUERY
  >;
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilder.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>;
  export type Subscription<$SelectionSet extends $$SelectionSets.Subscription> =
    $$Utilities.DocumentBuilder.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.SUBSCRIPTION>;
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type UserMetadata<$SelectionSet extends $$SelectionSets.UserMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserMetadata']
    >;
  export type ChannelsUserMetadata<$SelectionSet extends $$SelectionSets.ChannelsUserMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelsUserMetadata']
    >;
  export type GroupsUserMetadata<$SelectionSet extends $$SelectionSets.GroupsUserMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GroupsUserMetadata']
    >;
  export type GroupMembership<$SelectionSet extends $$SelectionSets.GroupMembership> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GroupMembership']
    >;
  export type ModelEvent<$SelectionSet extends $$SelectionSets.ModelEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ModelEvent']
    >;
  export type Expertise<$SelectionSet extends $$SelectionSets.Expertise> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Expertise']
    >;
  export type Option<$SelectionSet extends $$SelectionSets.Option> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Option']
    >;
  export type Industry<$SelectionSet extends $$SelectionSets.Industry> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Industry']
    >;
  export type MenteesGroupMembership<$SelectionSet extends $$SelectionSets.MenteesGroupMembership> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MenteesGroupMembership']
    >;
  export type MentorsGroupMembership<$SelectionSet extends $$SelectionSets.MentorsGroupMembership> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MentorsGroupMembership']
    >;
  export type MastercardGroupMembership<$SelectionSet extends $$SelectionSets.MastercardGroupMembership> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MastercardGroupMembership']
    >;
  export type IqlaaGroupMembership<$SelectionSet extends $$SelectionSets.IqlaaGroupMembership> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IqlaaGroupMembership']
    >;
  export type StriveIndonesiaGroupMembership<$SelectionSet extends $$SelectionSets.StriveIndonesiaGroupMembership> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['StriveIndonesiaGroupMembership']
    >;
  export type User<$SelectionSet extends $$SelectionSets.User> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['User']
    >;
  export type LabeledStringValue<$SelectionSet extends $$SelectionSets.LabeledStringValue> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['LabeledStringValue']
    >;
  export type UserPreferences<$SelectionSet extends $$SelectionSets.UserPreferences> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserPreferences']
    >;
  export type NotificationOptions<$SelectionSet extends $$SelectionSets.NotificationOptions> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['NotificationOptions']
    >;
  export type UserDeviceWithoutAuth<$SelectionSet extends $$SelectionSets.UserDeviceWithoutAuth> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserDeviceWithoutAuth']
    >;
  export type UserBlock<$SelectionSet extends $$SelectionSets.UserBlock> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserBlock']
    >;
  export type Contact<$SelectionSet extends $$SelectionSets.Contact> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Contact']
    >;
  export type ContactMetadata<$SelectionSet extends $$SelectionSets.ContactMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContactMetadata']
    >;
  export type ContactType<$SelectionSet extends $$SelectionSets.ContactType> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContactType']
    >;
  export type Company<$SelectionSet extends $$SelectionSets.Company> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Company']
    >;
  export type CompanyStage<$SelectionSet extends $$SelectionSets.CompanyStage> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CompanyStage']
    >;
  export type CompanyType<$SelectionSet extends $$SelectionSets.CompanyType> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CompanyType']
    >;
  export type AcademicExperience<$SelectionSet extends $$SelectionSets.AcademicExperience> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AcademicExperience']
    >;
  export type BusinessExperience<$SelectionSet extends $$SelectionSets.BusinessExperience> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BusinessExperience']
    >;
  export type UploadedAsset<$SelectionSet extends $$SelectionSets.UploadedAsset> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UploadedAsset']
    >;
  export type UserProfileRoleHistoryItem<$SelectionSet extends $$SelectionSets.UserProfileRoleHistoryItem> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserProfileRoleHistoryItem']
    >;
  export type Country<$SelectionSet extends $$SelectionSets.Country> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Country']
    >;
  export type Gender<$SelectionSet extends $$SelectionSets.Gender> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Gender']
    >;
  export type Language<$SelectionSet extends $$SelectionSets.Language> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Language']
    >;
  export type Notification<$SelectionSet extends $$SelectionSets.Notification> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Notification']
    >;
  export type NotificationContext<$SelectionSet extends $$SelectionSets.NotificationContext> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['NotificationContext']
    >;
  export type Channel<$SelectionSet extends $$SelectionSets.Channel> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Channel']
    >;
  export type ChannelMetadata<$SelectionSet extends $$SelectionSets.ChannelMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelMetadata']
    >;
  export type BgChannelStatus<$SelectionSet extends $$SelectionSets.BgChannelStatus> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BgChannelStatus']
    >;
  export type ChannelInvitation<$SelectionSet extends $$SelectionSets.ChannelInvitation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelInvitation']
    >;
  export type DeclineChannelInvitationReason<$SelectionSet extends $$SelectionSets.DeclineChannelInvitationReason> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['DeclineChannelInvitationReason']
    >;
  export type ChannelMessage<$SelectionSet extends $$SelectionSets.ChannelMessage> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelMessage']
    >;
  export type ChannelMessageMetadata<$SelectionSet extends $$SelectionSets.ChannelMessageMetadata> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelMessageMetadata']
    >;
  export type ChannelMessageStatus<$SelectionSet extends $$SelectionSets.ChannelMessageStatus> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelMessageStatus']
    >;
  export type ChannelParticipant<$SelectionSet extends $$SelectionSets.ChannelParticipant> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelParticipant']
    >;
  export type BgChannelParticipantUserInfo<$SelectionSet extends $$SelectionSets.BgChannelParticipantUserInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BgChannelParticipantUserInfo']
    >;
  export type UserListItem<$SelectionSet extends $$SelectionSets.UserListItem> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserListItem']
    >;
  export type EducationLevel<$SelectionSet extends $$SelectionSets.EducationLevel> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EducationLevel']
    >;
  export type EndorsementWithTypes<$SelectionSet extends $$SelectionSets.EndorsementWithTypes> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['EndorsementWithTypes']
    >;
  // @ts-ignore
  export type ModerationConcern<$SelectionSet extends $$SelectionSets.ModerationConcern> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      // @ts-ignore
      $$Schema.Schema['allTypes']['ModerationConcern']
    >;
  export type ContentTagType<$SelectionSet extends $$SelectionSets.ContentTagType> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContentTagType']
    >;
  export type Group<$SelectionSet extends $$SelectionSets.Group> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Group']
    >;
  export type AppliedGroupRule<$SelectionSet extends $$SelectionSets.AppliedGroupRule> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AppliedGroupRule']
    >;
  export type GroupRuleBaseConfig<$SelectionSet extends $$SelectionSets.GroupRuleBaseConfig> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GroupRuleBaseConfig']
    >;
  export type GroupCms<$SelectionSet extends $$SelectionSets.GroupCms> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GroupCms']
    >;
  export type GroupCmsOnboarding<$SelectionSet extends $$SelectionSets.GroupCmsOnboarding> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['GroupCmsOnboarding']
    >;
  export type Pronoun<$SelectionSet extends $$SelectionSets.Pronoun> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Pronoun']
    >;
  export type UserCms<$SelectionSet extends $$SelectionSets.UserCms> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserCms']
    >;
  export type UserInbox<$SelectionSet extends $$SelectionSets.UserInbox> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserInbox']
    >;
  export type ChannelInbox<$SelectionSet extends $$SelectionSets.ChannelInbox> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelInbox']
    >;
  export type ChannelInboxItemMessage<$SelectionSet extends $$SelectionSets.ChannelInboxItemMessage> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelInboxItemMessage']
    >;
  export type ChannelInboxItemInvitation<$SelectionSet extends $$SelectionSets.ChannelInboxItemInvitation> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ChannelInboxItemInvitation']
    >;
  export type AdminTask<$SelectionSet extends $$SelectionSets.AdminTask> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AdminTask']
    >;
  export type AdminTaskDef<$SelectionSet extends $$SelectionSets.AdminTaskDef> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AdminTaskDef']
    >;
  export type AdminTaskArgDef<$SelectionSet extends $$SelectionSets.AdminTaskArgDef> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['AdminTaskArgDef']
    >;
  export type ErrorCodeOption<$SelectionSet extends $$SelectionSets.ErrorCodeOption> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ErrorCodeOption']
    >;
  export type IndonesianCity<$SelectionSet extends $$SelectionSets.IndonesianCity> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IndonesianCity']
    >;
  export type IndonesianProvince<$SelectionSet extends $$SelectionSets.IndonesianProvince> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IndonesianProvince']
    >;
  export type IqlaaJordanianDistrict<$SelectionSet extends $$SelectionSets.IqlaaJordanianDistrict> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IqlaaJordanianDistrict']
    >;
  export type IqlaaJordanianGovernorate<$SelectionSet extends $$SelectionSets.IqlaaJordanianGovernorate> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IqlaaJordanianGovernorate']
    >;
  export type MastercardBank<$SelectionSet extends $$SelectionSets.MastercardBank> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MastercardBank']
    >;
  export type UserSearch<$SelectionSet extends $$SelectionSets.UserSearch> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserSearch']
    >;
  export type UserSearchFilter<$SelectionSet extends $$SelectionSets.UserSearchFilter> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserSearchFilter']
    >;
  export type UserSearchRunInfo<$SelectionSet extends $$SelectionSets.UserSearchRunInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserSearchRunInfo']
    >;
  export type UserWithScore<$SelectionSet extends $$SelectionSets.UserWithScore> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserWithScore']
    >;
  export type ServiceRequest<$SelectionSet extends $$SelectionSets.ServiceRequest> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ServiceRequest']
    >;
  export type ContactListItem<$SelectionSet extends $$SelectionSets.ContactListItem> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContactListItem']
    >;
  export type SidMultiStepAction<$SelectionSet extends $$SelectionSets.SidMultiStepAction> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SidMultiStepAction']
    >;
  export type MultiStepActionError<$SelectionSet extends $$SelectionSets.MultiStepActionError> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MultiStepActionError']
    >;
  export type SidMultiStepActionProgress<$SelectionSet extends $$SelectionSets.SidMultiStepActionProgress> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SidMultiStepActionProgress']
    >;
  export type MyUser<$SelectionSet extends $$SelectionSets.MyUser> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['MyUser']
    >;
  export type ReportUserReason<$SelectionSet extends $$SelectionSets.ReportUserReason> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ReportUserReason']
    >;
  export type Training<$SelectionSet extends $$SelectionSets.Training> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Training']
    >;
  export type TrainingContentPage<$SelectionSet extends $$SelectionSets.TrainingContentPage> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TrainingContentPage']
    >;
  export type TrainingSession<$SelectionSet extends $$SelectionSets.TrainingSession> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TrainingSession']
    >;
  export type TrainingSessionCompletionInfo<$SelectionSet extends $$SelectionSets.TrainingSessionCompletionInfo> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['TrainingSessionCompletionInfo']
    >;
  export type UserAuthResponse<$SelectionSet extends $$SelectionSets.UserAuthResponse> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['UserAuthResponse']
    >;
  export type ContentTag<$SelectionSet extends $$SelectionSets.ContentTag> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContentTag']
    >;
  export type SupportChannelConfig<$SelectionSet extends $$SelectionSets.SupportChannelConfig> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['SupportChannelConfig']
    >;
  export type NotificationTemplate<$SelectionSet extends $$SelectionSets.NotificationTemplate> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['NotificationTemplate']
    >;
  export type ContentStatus<$SelectionSet extends $$SelectionSets.ContentStatus> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ContentStatus']
    >;
  export type BgChannelChangedEvent<$SelectionSet extends $$SelectionSets.BgChannelChangedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BgChannelChangedEvent']
    >;
  export type ObjectChangedEvent<$SelectionSet extends $$SelectionSets.ObjectChangedEvent> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['ObjectChangedEvent']
    >;
  export type BaseModel<$SelectionSet extends $$SelectionSets.BaseModel> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BaseModel']
    >;
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
  export type BaseModelMetadata<$SelectionSet extends $$SelectionSets.BaseModelMetadata> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BaseModelMetadata']
    >;
  export type IGroupMembership<$SelectionSet extends $$SelectionSets.IGroupMembership> =
    $$Utilities.DocumentBuilder.InferResult.Interface<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['IGroupMembership']
    >;
}
