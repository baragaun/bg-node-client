export const UserSchema = {
  title: 'User',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 32,
    },
    adminNotes: {
      type: 'string',
      nullable: true,
    },
    metadata: {
      type: 'object',
      properties: {
        channelsMetadata: {
          type: 'object',
          properties: {
            channelCount: {
              type: 'integer',
            },
            messagesSentCount: {
              type: 'integer',
            },
            unseenMessageCount: {
              type: 'integer',
            },
            unrespondedMessageCount: {
              type: 'integer',
            },
            invitationsSentCount: {
              type: 'integer',
            },
            invitationsReceivedCount: {
              type: 'integer',
            },
            rejectedInvitationCount: {
              type: 'integer',
            },
            acceptedInvitationCount: {
              type: 'integer',
            },
            pendingInvitationCount: {
              type: 'integer',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              nullable: true,
            },
            mentoringSessionCount: {
              type: 'integer',
            },
          },
        },
        groupsMetadata: {
          type: 'object',
          properties: {
            groupCount: {
              type: 'integer',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              nullable: true,
            },
          },
        },
      },
      nullable: true,
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    createdBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    updatedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    deletedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    deletedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    firstName: {
      type: 'string',
      nullable: true,
    },
    lastName: {
      type: 'string',
      nullable: true,
    },
    userHandle: {
      type: 'string',
      nullable: true,
    },
    phoneNumber: {
      type: 'string',
      nullable: true,
    },
    phoneNumberUpdatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    isPhoneNumberVerified: {
      type: 'boolean',
    },
    email: {
      type: 'string',
      nullable: true,
    },
    emailUpdatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    isEmailVerified: {
      type: 'boolean',
    },
    genderTextId: {
      type: 'string',
      nullable: true,
    },
    cityOfResidence: {
      type: 'string',
      nullable: true,
    },
    regionOfResidence: {
      type: 'string',
      nullable: true,
    },
    countryOfResidenceTextId: {
      type: 'string',
      nullable: true,
    },
    postalCode: {
      type: 'string',
      nullable: true,
    },
    avatarUrl: {
      type: 'string',
      nullable: true,
    },
    websites: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            nullable: true,
          },
          value: {
            type: 'string',
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
            },
            nullable: true,
          },
        },
      },
      nullable: true,
    },
    inviteCode: {
      type: 'string',
      nullable: true,
    },
    passwordHash: {
      type: 'string',
      nullable: true,
    },
    tfaBackupCodes: {
      type: 'string',
      nullable: true,
    },
    passwordUpdatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    preferredLanguageTextId: {
      type: 'string',
      nullable: true,
    },
    spokenLanguagesTextIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    selectedUiLanguageTextId: {
      type: 'string',
      enum: ['ar', 'en', 'es', 'id', 'ru', 'so', null],
      nullable: true,
    },
    fallbackUiLanguageTextId: {
      type: 'string',
      enum: ['ar', 'en', 'es', 'id', 'ru', 'so', null],
      nullable: true,
    },
    discoverable: {
      type: 'boolean',
      description:
        'If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally.',
      nullable: true,
    },
    roles: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['admin', 'support', 'staff', 'qa', 'test'],
      },
    },
    appFeatures: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['testFeatures1', 'testFeatures2', null],
      },
      nullable: true,
    },
    source: {
      type: 'string',
      nullable: true,
    },
    timezone: {
      type: 'string',
      nullable: true,
    },
    preferences: {
      type: 'object',
      properties: {
        shareEmail: {
          type: 'boolean',
          nullable: true,
        },
        sharePhoneNumber: {
          type: 'boolean',
          nullable: true,
        },
        showWelcomeMessage: {
          type: 'boolean',
          nullable: true,
        },
        notificationOptions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              notificationType: {
                type: 'string',
                enum: [
                  'accountDeletedConfirmation',
                  'channelInvitationAccepted',
                  'channelInvitationDeclined',
                  'channelInvitationReceived',
                  'channelMessageReceived',
                  'completeProfile',
                  'completeSignUp',
                  'matchesRecommendations',
                  'newPrivacyRules',
                  'newsletter',
                  'resetPasswordConfirmation',
                  'resetPasswordConfirmToken',
                  'sendFirstInvitation',
                  'unset',
                  'welcome',
                ],
              },
              enableEmail: {
                type: 'boolean',
                nullable: true,
              },
              enableInAppMessage: {
                type: 'boolean',
                nullable: true,
              },
              enablePushNotification: {
                type: 'boolean',
                nullable: true,
              },
              enableSms: {
                type: 'boolean',
                nullable: true,
              },
              frequency: {
                type: 'string',
                nullable: true,
              },
            },
          },
          nullable: true,
        },
      },
      nullable: true,
    },
    trustLevel: {
      type: 'integer',
    },
    userBlocks: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            maxLength: 32,
          },
          adminNotes: {
            type: 'string',
            nullable: true,
          },
          metadata: {
            type: 'object',
            properties: {
              updatedAt: {
                type: 'string',
                format: 'date-time',
                nullable: true,
              },
            },
            nullable: true,
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
          },
          createdBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
          },
          updatedBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
          },
          deletedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
          },
          deletedBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
          },
          userId: {
            type: 'string',
            maxLength: 32,
          },
          reasonTextId: {
            type: 'string',
          },
          notes: {
            type: 'string',
            nullable: true,
          },
        },
      },
      nullable: true,
    },
    termsAndConditionsAcceptedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    optIntoNewsletter: {
      type: 'boolean',
      nullable: true,
    },
    onboardingStage: {
      type: 'string',
      nullable: true,
    },
    isTestUser: {
      type: 'boolean',
      nullable: true,
    },
    signedInAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    signedOutAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    latestActivityAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    inactivatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    inactivatedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    suspendedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    suspendedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    anonymizedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    syncedToAnalyticsAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    companyIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
      nullable: true,
    },
    companies: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            maxLength: 32,
          },
          adminNotes: {
            type: 'string',
            nullable: true,
          },
          metadata: {
            type: 'object',
            properties: {
              updatedAt: {
                type: 'string',
                format: 'date-time',
                nullable: true,
              },
            },
            nullable: true,
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
          },
          createdBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
          },
          updatedBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
          },
          deletedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
          },
          deletedBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
          },
          userIds: {
            type: 'array',
            items: {
              type: 'string',
            },
            nullable: true,
          },
          name: {
            type: 'string',
          },
          description: {
            type: 'string',
            nullable: true,
          },
          location: {
            type: 'string',
            nullable: true,
          },
          companyTypeTextId: {
            type: 'string',
            nullable: true,
          },
          companyStageTextId: {
            type: 'string',
            nullable: true,
          },
          websites: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                label: {
                  type: 'string',
                  nullable: true,
                },
                value: {
                  type: 'string',
                },
                tags: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                  nullable: true,
                },
              },
            },
            nullable: true,
          },
          industries: {
            type: 'array',
            items: {
              type: 'string',
            },
            nullable: true,
          },
          isOperational: {
            type: 'boolean',
            nullable: true,
          },
          isFundraising: {
            type: 'boolean',
            nullable: true,
          },
          annualRevenue: {
            type: 'integer',
            nullable: true,
          },
          employeeCount: {
            type: 'integer',
            nullable: true,
          },
          foundedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
          },
          mm2UserId: {
            type: 'string',
            description:
              'If a Company was created from the imported attributes of an MM2 Profile, mm2UserId references the MM2 user ID. This attribute is only used by the MM2 synchronizer.',
            nullable: true,
          },
          mm2CompanyRole: {
            type: 'string',
            description:
              'If a Company was created from the imported from MM2, mm2CompanyRole is either "mentor" or "mentee". This attribute is only used by the MM2 synchronizer.',
            nullable: true,
          },
        },
      },
      nullable: true,
    },
    avatarAsset: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          maxLength: 32,
        },
        adminNotes: {
          type: 'string',
          nullable: true,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        createdBy: {
          type: 'string',
          maxLength: 32,
          nullable: true,
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          nullable: true,
        },
        updatedBy: {
          type: 'string',
          maxLength: 32,
          nullable: true,
        },
        deletedAt: {
          type: 'string',
          format: 'date-time',
          nullable: true,
        },
        deletedBy: {
          type: 'string',
          maxLength: 32,
          nullable: true,
        },
        ownerId: {
          type: 'string',
          maxLength: 32,
        },
        ownerModelType: {
          type: 'string',
          enum: [
            'AcademicExperience',
            'BusinessExperience',
            'Company',
            'DataDeletion',
            'MentorBoard',
            'MentoringSession',
            'UserInbox',
            'UserMetadata',
            'UserPreferences',
            'AdminTask',
            'UploadedAsset',
            'Channel',
            'ChannelInbox',
            'ChannelInvitation',
            'ChannelMessage',
            'ChannelParticipant',
            'ContentStatus',
            'Option',
            'ContentTag',
            'AppliedGroupRule',
            'Group',
            'GroupMembership',
            'GroupRule',
            'GroupRuleConfig',
            'MastercardBank',
            'SupportChannelConfig',
            'Match',
            'MatchProfile',
            'MatchingEngine',
            'UserSearch',
            'Notification',
            'NotificationTemplate',
            'Mm2Integration',
            'Mm2Synchronization',
            'Mm2SynchronizationResultItem',
            'ModerationConcern',
            'ApiAuthInfo',
            'MultiStepAction',
            'MyUser',
            'ServiceRequest',
            'User',
            'UserDevice',
            'UserRelationship',
            'TrackingEvent',
            'UserTracking',
            'Training',
            'TrainingContentPage',
            'TrainingSession',
            'unset',
          ],
        },
        assetType: {
          type: 'string',
          enum: ['unset', 'avatar', 'profileHeroImage'],
        },
        hostingService: {
          type: 'string',
          enum: ['s3', 'unset'],
        },
        url: {
          type: 'string',
          nullable: true,
        },
        path: {
          type: 'string',
          nullable: true,
        },
        s3Bucket: {
          type: 'string',
          nullable: true,
        },
        s3Key: {
          type: 'string',
          nullable: true,
        },
        mimeType: {
          type: 'string',
          nullable: true,
        },
        uploadUrl: {
          type: 'string',
          nullable: true,
        },
        uploadUrlExpiresAt: {
          type: 'string',
          format: 'date-time',
          nullable: true,
        },
        uploadedAt: {
          type: 'string',
          format: 'date-time',
          nullable: true,
        },
        expiresAt: {
          type: 'string',
          format: 'date-time',
          nullable: true,
        },
      },
      nullable: true,
    },
    ssoIdp: {
      type: 'string',
      nullable: true,
    },
  },
  required: ['id'],
};
