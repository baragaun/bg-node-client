import type * as $$Utilities from 'graffle/utilities-for-generated';

import * as $$Schema from './schema.js';
import * as $$SelectionSets from './selection-sets.js';

export interface QueryMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >;
  __typename: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: 'Query' },
        '__typename'
      >
    >
  >;

  doesUserExist: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.doesUserExist<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { doesUserExist: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'doesUserExist'
      >
    >
  >;

  findUserById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserById'
      >
    >
  >;

  findUserByIdent: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserByIdent<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserByIdent: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserByIdent'
      >
    >
  >;

  isUserIdentAvailable: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.isUserIdentAvailable<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { isUserIdentAvailable: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'isUserIdentAvailable'
      >
    >
  >;

  findUsers: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUsers<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUsers: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUsers'
      >
    >
  >;

  findUserDeviceById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserDeviceById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserDeviceById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserDeviceById'
      >
    >
  >;

  findUserDevices: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserDevices<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserDevices: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserDevices'
      >
    >
  >;

  findMyUserDevices: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findMyUserDevices<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMyUserDevices: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMyUserDevices'
      >
    >
  >;

  findCompanyStages: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findCompanyStages<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findCompanyStages: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findCompanyStages'
      >
    >
  >;

  findCompanyTypes: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findCompanyTypes<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findCompanyTypes: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findCompanyTypes'
      >
    >
  >;

  findEducationLevels: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findEducationLevels<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findEducationLevels: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findEducationLevels'
      >
    >
  >;

  findExpertises: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findExpertises<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findExpertises: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findExpertises'
      >
    >
  >;

  findGenders: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findGenders<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGenders: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGenders'
      >
    >
  >;

  findPronouns: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findPronouns<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findPronouns: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findPronouns'
      >
    >
  >;

  findUserCmsByUserId: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserCmsByUserId<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserCmsByUserId: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserCmsByUserId'
      >
    >
  >;
  /**
   * @deprecated use findMyInbox
   */
  myInbox: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.myInbox<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { myInbox: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'myInbox'
      >
    >
  >;

  findMyInbox: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findMyInbox<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMyInbox: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMyInbox'
      >
    >
  >;

  findAdminTaskById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findAdminTaskById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findAdminTaskById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findAdminTaskById'
      >
    >
  >;

  findAdminTaskDefs: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findAdminTaskDefs<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findAdminTaskDefs: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findAdminTaskDefs'
      >
    >
  >;

  findUploadedAssetById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUploadedAssetById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUploadedAssetById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUploadedAssetById'
      >
    >
  >;

  findUploadedAssets: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUploadedAssets<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUploadedAssets: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUploadedAssets'
      >
    >
  >;

  findUploadedAssetsForUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findUploadedAssetsForUser<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUploadedAssetsForUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUploadedAssetsForUser'
      >
    >
  >;

  findChannelInvitationById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findChannelInvitationById<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelInvitationById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelInvitationById'
      >
    >
  >;

  findChannelInvitationsBetweenUsers: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findChannelInvitationsBetweenUsers<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelInvitationsBetweenUsers: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelInvitationsBetweenUsers'
      >
    >
  >;

  findChannelInvitationsForUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findChannelInvitationsForUser<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelInvitationsForUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelInvitationsForUser'
      >
    >
  >;

  myChannelInvitations: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.myChannelInvitations<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { myChannelInvitations: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'myChannelInvitations'
      >
    >
  >;

  findPendingChannelInvitationsForUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findPendingChannelInvitationsForUser<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findPendingChannelInvitationsForUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findPendingChannelInvitationsForUser'
      >
    >
  >;

  findChannelById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findChannelById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelById'
      >
    >
  >;

  findChannels: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findChannels<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannels: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannels'
      >
    >
  >;

  findChannelsForUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findChannelsForUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelsForUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelsForUser'
      >
    >
  >;

  find1On1Channel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.find1On1Channel<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { find1On1Channel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'find1On1Channel'
      >
    >
  >;

  findMyChannels: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findMyChannels<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMyChannels: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMyChannels'
      >
    >
  >;

  findChannelMessageById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findChannelMessageById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelMessageById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelMessageById'
      >
    >
  >;

  findChannelMessages: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findChannelMessages<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelMessages: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelMessages'
      >
    >
  >;

  findChannelParticipants: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findChannelParticipants<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelParticipants: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelParticipants'
      >
    >
  >;

  findChannelParticipantsForChannel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findChannelParticipantsForChannel<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelParticipantsForChannel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelParticipantsForChannel'
      >
    >
  >;

  findChannelParticipantById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findChannelParticipantById<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findChannelParticipantById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findChannelParticipantById'
      >
    >
  >;

  findDeclineChannelInvitationReasons: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findDeclineChannelInvitationReasons<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findDeclineChannelInvitationReasons: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findDeclineChannelInvitationReasons'
      >
    >
  >;

  findOptions: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findOptions<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findOptions: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findOptions'
      >
    >
  >;

  findCountries: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findCountries<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findCountries: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findCountries'
      >
    >
  >;

  findErrorCodes: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findErrorCodes<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findErrorCodes: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findErrorCodes'
      >
    >
  >;

  findIndustries: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findIndustries<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findIndustries: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findIndustries'
      >
    >
  >;

  findLanguages: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findLanguages<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findLanguages: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findLanguages'
      >
    >
  >;

  apiVersion: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.apiVersion<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { apiVersion: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'apiVersion'
      >
    >
  >;

  findGroupCmsByGroupIdent: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findGroupCmsByGroupIdent<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroupCmsByGroupIdent: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroupCmsByGroupIdent'
      >
    >
  >;

  findGroupCmsByGroupId: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findGroupCmsByGroupId<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroupCmsByGroupId: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroupCmsByGroupId'
      >
    >
  >;

  findGroupCmsById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findGroupCmsById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroupCmsById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroupCmsById'
      >
    >
  >;

  findGroupMembershipById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findGroupMembershipById<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroupMembershipById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroupMembershipById'
      >
    >
  >;

  myGroupMemberships: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.myGroupMemberships<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { myGroupMemberships: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'myGroupMemberships'
      >
    >
  >;

  findGroupMemberships: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findGroupMemberships<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroupMemberships: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroupMemberships'
      >
    >
  >;

  findGroupById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findGroupById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroupById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroupById'
      >
    >
  >;

  findGroupByIdent: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findGroupByIdent<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroupByIdent: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroupByIdent'
      >
    >
  >;

  findGroups: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findGroups<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findGroups: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findGroups'
      >
    >
  >;

  findIndonesianCities: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findIndonesianCities<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findIndonesianCities: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findIndonesianCities'
      >
    >
  >;

  findIndonesianProvinces: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findIndonesianProvinces<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findIndonesianProvinces: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findIndonesianProvinces'
      >
    >
  >;

  findIqlaaJordanianDistricts: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findIqlaaJordanianDistricts<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findIqlaaJordanianDistricts: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findIqlaaJordanianDistricts'
      >
    >
  >;

  findIqlaaJordanianGovernorates: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findIqlaaJordanianGovernorates<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findIqlaaJordanianGovernorates: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findIqlaaJordanianGovernorates'
      >
    >
  >;

  findMastercardBanks: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findMastercardBanks<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMastercardBanks: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMastercardBanks'
      >
    >
  >;

  userWillReceiveWelcomeMessage: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.userWillReceiveWelcomeMessage<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { userWillReceiveWelcomeMessage: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'userWillReceiveWelcomeMessage'
      >
    >
  >;

  findUserSearchById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserSearchById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserSearchById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserSearchById'
      >
    >
  >;

  findUserSearches: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserSearches<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserSearches: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserSearches'
      >
    >
  >;

  findUserSearchResults: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findUserSearchResults<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findUserSearchResults: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findUserSearchResults'
      >
    >
  >;

  myUserSearches: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.myUserSearches<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { myUserSearches: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'myUserSearches'
      >
    >
  >;

  findServiceRequestById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findServiceRequestById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findServiceRequestById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findServiceRequestById'
      >
    >
  >;

  findContactById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findContactById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findContactById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findContactById'
      >
    >
  >;

  findContact: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findContact<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findContact: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findContact'
      >
    >
  >;

  findContacts: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findContacts<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findContacts: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findContacts'
      >
    >
  >;

  findMyActiveMultiStepActions: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findMyActiveMultiStepActions<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMyActiveMultiStepActions: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMyActiveMultiStepActions'
      >
    >
  >;
  /**
   * @deprecated Use findMyActiveMultiStepActions instead
   */
  findMyActiveMultiStepAction: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findMyActiveMultiStepAction<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMyActiveMultiStepAction: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMyActiveMultiStepAction'
      >
    >
  >;

  getMultiStepActionProgress: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.getMultiStepActionProgress<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { getMultiStepActionProgress: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'getMultiStepActionProgress'
      >
    >
  >;

  findAvailableUserHandle: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findAvailableUserHandle<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findAvailableUserHandle: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findAvailableUserHandle'
      >
    >
  >;
  /**
   * @deprecated Use findMyUser
   */
  getMyUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.getMyUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { getMyUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'getMyUser'
      >
    >
  >;

  findMyUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findMyUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMyUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMyUser'
      >
    >
  >;
  /**
   * @deprecated Use findMyBlockedUsers
   */
  getMyBlockedUsers: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.getMyBlockedUsers<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { getMyBlockedUsers: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'getMyBlockedUsers'
      >
    >
  >;

  findMyBlockedUsers: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findMyBlockedUsers<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findMyBlockedUsers: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findMyBlockedUsers'
      >
    >
  >;

  verifyMyPassword: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.verifyMyPassword<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { verifyMyPassword: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'verifyMyPassword'
      >
    >
  >;

  findReportUserReasons: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findReportUserReasons<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findReportUserReasons: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findReportUserReasons'
      >
    >
  >;

  findTrainingsForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findTrainingsForMe<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findTrainingsForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findTrainingsForMe'
      >
    >
  >;

  findTrainingsForUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findTrainingsForUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findTrainingsForUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findTrainingsForUser'
      >
    >
  >;

  findTrainingById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query.findTrainingById<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findTrainingById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findTrainingById'
      >
    >
  >;

  findTrainingSessionById: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findTrainingSessionById<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findTrainingSessionById: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findTrainingSessionById'
      >
    >
  >;

  findTrainingSessionsForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findTrainingSessionsForMe<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findTrainingSessionsForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findTrainingSessionsForMe'
      >
    >
  >;
  /**
   * Find training sessions by training  id. By default, finds the requestor's sessions.
   */
  findTrainingSessionsByTrainingId: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findTrainingSessionsByTrainingId<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findTrainingSessionsByTrainingId: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findTrainingSessionsByTrainingId'
      >
    >
  >;

  findLatestTrainingSessionForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Query.findLatestTrainingSessionForMe<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationQuery<
          { findLatestTrainingSessionForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findLatestTrainingSessionForMe'
      >
    >
  >;
}

export interface MutationMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >;
  __typename: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: 'Mutation' },
        '__typename'
      >
    >
  >;

  createOneTimeAuthTokenForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createOneTimeAuthTokenForMe<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createOneTimeAuthTokenForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createOneTimeAuthTokenForMe'
      >
    >
  >;

  signInUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.signInUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { signInUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'signInUser'
      >
    >
  >;

  signInOauthUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.signInOauthUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { signInOauthUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'signInOauthUser'
      >
    >
  >;

  signMeOut: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.signMeOut<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { signMeOut: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'signMeOut'
      >
    >
  >;

  signUpUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.signUpUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { signUpUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'signUpUser'
      >
    >
  >;

  verifyOneTimeAuthToken: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.verifyOneTimeAuthToken<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { verifyOneTimeAuthToken: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'verifyOneTimeAuthToken'
      >
    >
  >;

  addAppFeatureToUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addAppFeatureToUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addAppFeatureToUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addAppFeatureToUser'
      >
    >
  >;

  deleteUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteUser'
      >
    >
  >;

  removeAppFeatureFromUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.removeAppFeatureFromUser<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeAppFeatureFromUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeAppFeatureFromUser'
      >
    >
  >;

  reportUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.reportUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { reportUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'reportUser'
      >
    >
  >;

  updateUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateUser'
      >
    >
  >;

  createUserDevice: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createUserDevice<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createUserDevice: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createUserDevice'
      >
    >
  >;

  updateUserDevice: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateUserDevice<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateUserDevice: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateUserDevice'
      >
    >
  >;

  createAcademicExperience: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createAcademicExperience<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createAcademicExperience: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createAcademicExperience'
      >
    >
  >;

  deleteAcademicExperience: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteAcademicExperience<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteAcademicExperience: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteAcademicExperience'
      >
    >
  >;

  updateAcademicExperience: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateAcademicExperience<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateAcademicExperience: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateAcademicExperience'
      >
    >
  >;

  createBusinessExperience: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createBusinessExperience<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createBusinessExperience: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createBusinessExperience'
      >
    >
  >;

  deleteBusinessExperience: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteBusinessExperience<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteBusinessExperience: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteBusinessExperience'
      >
    >
  >;

  updateBusinessExperience: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateBusinessExperience<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateBusinessExperience: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateBusinessExperience'
      >
    >
  >;

  createCompany: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createCompany<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createCompany: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createCompany'
      >
    >
  >;

  deleteCompany: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteCompany<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteCompany: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteCompany'
      >
    >
  >;

  updateCompany: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateCompany<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateCompany: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateCompany'
      >
    >
  >;

  findAndUpdateAllMm2Users: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.findAndUpdateAllMm2Users<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { findAndUpdateAllMm2Users: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'findAndUpdateAllMm2Users'
      >
    >
  >;

  createAdminTask: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createAdminTask<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createAdminTask: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createAdminTask'
      >
    >
  >;

  deleteAdminTask: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteAdminTask<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteAdminTask: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteAdminTask'
      >
    >
  >;

  runAdminTask: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.runAdminTask<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { runAdminTask: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'runAdminTask'
      >
    >
  >;

  updateAdminTask: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateAdminTask<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateAdminTask: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateAdminTask'
      >
    >
  >;

  createUploadedAsset: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createUploadedAsset<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createUploadedAsset: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createUploadedAsset'
      >
    >
  >;

  deleteUploadedAsset: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteUploadedAsset<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteUploadedAsset: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteUploadedAsset'
      >
    >
  >;

  initAssetUpload: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.initAssetUpload<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { initAssetUpload: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'initAssetUpload'
      >
    >
  >;

  updateUploadedAsset: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateUploadedAsset<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateUploadedAsset: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateUploadedAsset'
      >
    >
  >;

  acceptChannelInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.acceptChannelInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { acceptChannelInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'acceptChannelInvitation'
      >
    >
  >;

  createChannelInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createChannelInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createChannelInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createChannelInvitation'
      >
    >
  >;

  declineChannelInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.declineChannelInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { declineChannelInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'declineChannelInvitation'
      >
    >
  >;

  deleteChannelInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteChannelInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteChannelInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteChannelInvitation'
      >
    >
  >;

  dismissChannelInvitationFromInbox: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.dismissChannelInvitationFromInbox<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { dismissChannelInvitationFromInbox: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'dismissChannelInvitationFromInbox'
      >
    >
  >;

  updateChannelInvitation: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateChannelInvitation<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateChannelInvitation: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateChannelInvitation'
      >
    >
  >;

  archiveChannelForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.archiveChannelForMe<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { archiveChannelForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'archiveChannelForMe'
      >
    >
  >;

  createChannel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createChannel<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createChannel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createChannel'
      >
    >
  >;

  deleteChannel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteChannel<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteChannel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteChannel'
      >
    >
  >;

  markChannelMessagesAsSeenByMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markChannelMessagesAsSeenByMe<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { markChannelMessagesAsSeenByMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'markChannelMessagesAsSeenByMe'
      >
    >
  >;

  updateChannel: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateChannel<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateChannel: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateChannel'
      >
    >
  >;

  unarchiveChannelForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.unarchiveChannelForMe<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unarchiveChannelForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unarchiveChannelForMe'
      >
    >
  >;

  addChannelMessageEvent: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.addChannelMessageEvent<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addChannelMessageEvent: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addChannelMessageEvent'
      >
    >
  >;

  createChannelMessage: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createChannelMessage<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createChannelMessage: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createChannelMessage'
      >
    >
  >;

  deleteChannelMessage: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteChannelMessage<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteChannelMessage: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteChannelMessage'
      >
    >
  >;

  updateChannelMessage: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateChannelMessage<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateChannelMessage: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateChannelMessage'
      >
    >
  >;

  createChannelParticipant: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createChannelParticipant<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createChannelParticipant: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createChannelParticipant'
      >
    >
  >;

  deleteChannelParticipant: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteChannelParticipant<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteChannelParticipant: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteChannelParticipant'
      >
    >
  >;

  updateChannelParticipant: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateChannelParticipant<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateChannelParticipant: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateChannelParticipant'
      >
    >
  >;

  createContentTag: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createContentTag<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createContentTag: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createContentTag'
      >
    >
  >;

  deleteContentTag: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteContentTag<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteContentTag: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteContentTag'
      >
    >
  >;

  updateContentTag: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateContentTag<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateContentTag: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateContentTag'
      >
    >
  >;

  createGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createGroupMembership'
      >
    >
  >;

  createMenteesGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createMenteesGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createMenteesGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createMenteesGroupMembership'
      >
    >
  >;

  createMentorsGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createMentorsGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createMentorsGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createMentorsGroupMembership'
      >
    >
  >;

  deleteGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteGroupMembership'
      >
    >
  >;

  updateGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateGroupMembership'
      >
    >
  >;

  updateIqlaaGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateIqlaaGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateIqlaaGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateIqlaaGroupMembership'
      >
    >
  >;

  updateMastercardGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateMastercardGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateMastercardGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateMastercardGroupMembership'
      >
    >
  >;

  updateMenteesGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateMenteesGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateMenteesGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateMenteesGroupMembership'
      >
    >
  >;

  updateMentorsGroupMembership: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateMentorsGroupMembership<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateMentorsGroupMembership: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateMentorsGroupMembership'
      >
    >
  >;

  addUserToGroup: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.addUserToGroup<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { addUserToGroup: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'addUserToGroup'
      >
    >
  >;

  createGroup: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createGroup<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createGroup: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createGroup'
      >
    >
  >;

  deleteGroup: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteGroup<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteGroup: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteGroup'
      >
    >
  >;

  removeUserFromGroup: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.removeUserFromGroup<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { removeUserFromGroup: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'removeUserFromGroup'
      >
    >
  >;

  updateGroup: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateGroup<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateGroup: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateGroup'
      >
    >
  >;

  createSupportChannelConfig: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createSupportChannelConfig<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createSupportChannelConfig: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createSupportChannelConfig'
      >
    >
  >;

  deleteSupportChannelConfig: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteSupportChannelConfig<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteSupportChannelConfig: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteSupportChannelConfig'
      >
    >
  >;

  updateSupportChannelConfig: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateSupportChannelConfig<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateSupportChannelConfig: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateSupportChannelConfig'
      >
    >
  >;

  createUserSearch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createUserSearch<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createUserSearch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createUserSearch'
      >
    >
  >;

  deleteUserSearch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteUserSearch<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteUserSearch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteUserSearch'
      >
    >
  >;

  updateUserSearch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateUserSearch<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateUserSearch: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateUserSearch'
      >
    >
  >;

  createNotification: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createNotification<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createNotification: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createNotification'
      >
    >
  >;

  deleteNotification: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteNotification<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteNotification: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteNotification'
      >
    >
  >;

  markInAppMessageReceived: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.markInAppMessageReceived<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { markInAppMessageReceived: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'markInAppMessageReceived'
      >
    >
  >;

  sendMultiStepActionNotification: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.sendMultiStepActionNotification<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { sendMultiStepActionNotification: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'sendMultiStepActionNotification'
      >
    >
  >;

  updateNotification: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateNotification<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateNotification: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateNotification'
      >
    >
  >;

  createNotificationTemplate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createNotificationTemplate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createNotificationTemplate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createNotificationTemplate'
      >
    >
  >;

  deleteNotificationTemplate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.deleteNotificationTemplate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteNotificationTemplate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteNotificationTemplate'
      >
    >
  >;

  updateNotificationTemplate: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.updateNotificationTemplate<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateNotificationTemplate: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateNotificationTemplate'
      >
    >
  >;

  createContact: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createContact<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createContact: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createContact'
      >
    >
  >;

  updateContact: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateContact<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateContact: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateContact'
      >
    >
  >;

  createMultiStepAction: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.createMultiStepAction<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createMultiStepAction: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createMultiStepAction'
      >
    >
  >;

  startResetPassword: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.startResetPassword<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { startResetPassword: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'startResetPassword'
      >
    >
  >;

  startVerifyEmail: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.startVerifyEmail<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { startVerifyEmail: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'startVerifyEmail'
      >
    >
  >;

  startVerifyPhoneNumber: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.startVerifyPhoneNumber<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { startVerifyPhoneNumber: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'startVerifyPhoneNumber'
      >
    >
  >;

  verifyMultiStepActionToken: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<
        $SelectionSet,
        $$SelectionSets.Mutation.verifyMultiStepActionToken<$Context['scalars']>
      >,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { verifyMultiStepActionToken: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'verifyMultiStepActionToken'
      >
    >
  >;
  /**
   * @deprecated Use blockUserForMeV2
   */
  blockUserForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.blockUserForMe<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { blockUserForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'blockUserForMe'
      >
    >
  >;

  blockUserForMeV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.blockUserForMeV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { blockUserForMeV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'blockUserForMeV2'
      >
    >
  >;

  deleteMyUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.deleteMyUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { deleteMyUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'deleteMyUser'
      >
    >
  >;
  /**
   * @deprecated Use endMySessionV2
   */
  endMySession: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.endMySession<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { endMySession: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'endMySession'
      >
    >
  >;

  endMySessionV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet?: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.endMySessionV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { endMySessionV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'endMySessionV2'
      >
    >
  >;
  /**
   * @deprecated Use startMySessionV2
   */
  startMySession: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.startMySession<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { startMySession: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'startMySession'
      >
    >
  >;

  startMySessionV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.startMySessionV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { startMySessionV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'startMySessionV2'
      >
    >
  >;
  /**
   * @deprecated Use unblockUserForMeV2
   */
  unblockUserForMe: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unblockUserForMe<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unblockUserForMe: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unblockUserForMe'
      >
    >
  >;

  unblockUserForMeV2: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.unblockUserForMeV2<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { unblockUserForMeV2: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'unblockUserForMeV2'
      >
    >
  >;

  updateMyUser: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.updateMyUser<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { updateMyUser: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'updateMyUser'
      >
    >
  >;

  createUserTracking: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation.createUserTracking<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationMutation<
          { createUserTracking: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'createUserTracking'
      >
    >
  >;
}

export interface SubscriptionMethods<$Context extends $$Utilities.Context> {
  $batch: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Subscription<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutput<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationSubscription<
          $$Utilities.AssertExtendsObject<$SelectionSet>,
          $$Schema.Schema<$Context['scalars']>
        >
      >
    >
  >;
  __typename: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    () => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        { __typename: 'Subscription' },
        '__typename'
      >
    >
  >;

  channelChanged: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Subscription.channelChanged<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationSubscription<
          { channelChanged: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'channelChanged'
      >
    >
  >;

  objectChanged: $$Utilities.ClientTransports.PreflightCheck<
    $Context,
    <$SelectionSet>(
      selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Subscription.objectChanged<$Context['scalars']>>,
    ) => Promise<
      & (null | {})
      & $$Utilities.HandleOutputDocumentBuilderRootField<
        $Context,
        $$Utilities.DocumentBuilder.InferResult.OperationSubscription<
          { objectChanged: $SelectionSet },
          $$Schema.Schema<$Context['scalars']>
        >,
        'objectChanged'
      >
    >
  >;
}

export interface BuilderMethodsRoot<$Context extends $$Utilities.Context> {
  query: QueryMethods<$Context>;
  mutation: MutationMethods<$Context>;
  subscription: SubscriptionMethods<$Context>;
}

export interface BuilderMethodsRootFn extends $$Utilities.TypeFunction {
  // @ts-expect-error parameter is Untyped.
  return: BuilderMethodsRoot<this['params']>;
}
