export const MyUserSchema = {
  '$schema': 'https://json-schema.org/draft/2020-12/schema',
  '$id': 'https://firstspark.social/myUser.schema.json',
  'title': 'MyUser',
  'version': 0,
  'primaryKey': 'id',
  'type': 'object',
  'properties': {
    'id': {
      'type': 'string',
      'maxLength': 32,
    },
    'adminNotes': {
      'type': 'string',
    },
    'metadata': {
      'type': 'object',
      'properties': {
        'channelsMetadata': {
          'type': 'object',
          'properties': {
            'channelCount': {
              'type': 'integer',
            },
            'messagesSentCount': {
              'type': 'integer',
            },
            'unseenMessageCount': {
              'type': 'integer',
            },
            'unrespondedMessageCount': {
              'type': 'integer',
            },
            'invitationsSentCount': {
              'type': 'integer',
            },
            'invitationsReceivedCount': {
              'type': 'integer',
            },
            'rejectedInvitationCount': {
              'type': 'integer',
            },
            'acceptedInvitationCount': {
              'type': 'integer',
            },
            'pendingInvitationCount': {
              'type': 'integer',
            },
            'updatedAt': {
              'type': 'string',
              'format': 'date-time',
            },
            'mentoringSessionCount': {
              'type': 'integer',
            },
          },
        },
        'groupsMetadata': {
          'type': 'object',
          'properties': {
            'groupCount': {
              'type': 'integer',
            },
            'updatedAt': {
              'type': 'string',
              'format': 'date-time',
            },
          },
        },
      },
    },
    'createdAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'createdBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'updatedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'updatedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'deletedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'deletedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'firstName': {
      'type': 'string',
    },
    'lastName': {
      'type': 'string',
    },
    'userHandle': {
      'type': 'string',
    },
    'phoneNumber': {
      'type': 'string',
    },
    'phoneNumberUpdatedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'isPhoneNumberVerified': {
      'type': 'boolean',
    },
    'email': {
      'type': 'string',
    },
    'emailSource': {
      'type': 'string',
      'description': 'The source of the email address, e.g. "google", "facebook", etc.',
    },
    'emailUpdatedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'isEmailVerified': {
      'type': 'boolean',
    },
    'genderTextId': {
      'type': 'string',
    },
    'cityOfResidence': {
      'type': 'string',
    },
    'regionOfResidence': {
      'type': 'string',
    },
    'countryOfResidenceTextId': {
      'type': 'string',
    },
    'postalCode': {
      'type': 'string',
    },
    'avatarUrl': {
      'type': 'string',
    },
    'websites': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'label': {
          'type': 'string',
        },
        'value': {
          'type': 'string',
        },
        'tags': {
          'type': 'array',
          'items': {
            'type': 'string',
          },
        },
      },
    },
    'authType': {
      'type': 'string',
      'enum': [
        'none',
        'oauth',
        'token',
        'hmac',
        'saml',
      ],
      'enumType': 'AuthType',
    },
    'inviteCode': {
      'type': 'string',
    },
    'passwordHash': {
      'type': 'string',
    },
    'tfaBackupCodes': {
      'type': 'string',
    },
    'passwordUpdatedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'preferredLanguageTextId': {
      'type': 'string',
    },
    'spokenLanguagesTextIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
    },
    'selectedUiLanguageTextId': {
      'type': 'string',
      'enum': [
        'ar',
        'en',
        'es',
        'id',
        'ru',
        'so',
      ],
      'enumType': 'UiLanguage',
    },
    'fallbackUiLanguageTextId': {
      'type': 'string',
      'enum': [
        'ar',
        'en',
        'es',
        'id',
        'ru',
        'so',
      ],
      'enumType': 'UiLanguage',
    },
    'discoverable': {
      'type': 'boolean',
      'description': 'If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally.',
    },
    'roles': {
      'type': 'string',
      'enum': [
        'admin',
        'support',
        'staff',
        'qa',
        'test',
      ],
      'enumType': 'UserRole',
    },
    'appFeatures': {
      'type': 'string',
      'enum': [
        'testFeatures1',
        'testFeatures2',
      ],
      'enumType': 'AppFeature',
    },
    'source': {
      'type': 'string',
    },
    'timezone': {
      'type': 'string',
    },
    'preferences': {
      'type': 'object',
      'properties': {
        'shareEmail': {
          'type': 'boolean',
        },
        'sharePhoneNumber': {
          'type': 'boolean',
        },
        'showWelcomeMessage': {
          'type': 'boolean',
        },
        'notificationOptions': {
          'type': 'array',
          'items': {
            'type': 'object',
          },
          'properties': {
            'notificationType': {
              'type': 'string',
              'enum': [
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
              'enumType': 'NotificationType',
            },
            'enableEmail': {
              'type': 'boolean',
            },
            'enableInAppMessage': {
              'type': 'boolean',
            },
            'enablePushNotification': {
              'type': 'boolean',
            },
            'enableSms': {
              'type': 'boolean',
            },
            'frequency': {
              'type': 'string',
            },
          },
        },
      },
    },
    'trustLevel': {
      'type': 'integer',
    },
    'signedInAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'signedOutAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'latestActivityAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'userDevices': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'id': {
          'type': 'string',
          'maxLength': 32,
        },
        'adminNotes': {
          'type': 'string',
        },
        'metadata': {
          'type': 'object',
          'properties': {
            'updatedAt': {
              'type': 'string',
              'format': 'date-time',
            },
          },
        },
        'createdAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'createdBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'updatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'updatedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'deletedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'deletedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'userId': {
          'type': 'string',
          'maxLength': 32,
        },
        'deviceUuid': {
          'type': 'string',
        },
        'deviceType': {
          'type': 'string',
        },
        'trusted': {
          'type': 'boolean',
        },
        'phoneNumber': {
          'type': 'string',
        },
        'phoneNumberUpdatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'isPhoneNumberVerified': {
          'type': 'boolean',
        },
        'brand': {
          'type': 'string',
        },
        'model': {
          'type': 'string',
        },
        'isTablet': {
          'type': 'boolean',
        },
        'screenWidth': {
          'type': 'integer',
        },
        'screenHeight': {
          'type': 'integer',
        },
        'os': {
          'type': 'string',
        },
        'osVersion': {
          'type': 'string',
        },
        'timezone': {
          'type': 'string',
        },
        'ipAddress': {
          'type': 'string',
        },
        'consumer': {
          'type': 'string',
        },
        'consumerVersion': {
          'type': 'string',
        },
        'acceptedLanguage': {
          'type': 'string',
        },
        'locale': {
          'type': 'string',
        },
        'countryCode': {
          'type': 'string',
        },
        'appVersion': {
          'type': 'string',
        },
        'signedInAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'signedOutAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'sessionStartedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'sessionEndedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'identityProvider': {
          'type': 'string',
          'enum': [
            'apple',
            'facebook',
            'google',
            'instagram',
            'linkedIn',
            'microsoft',
            'own',
            'sso',
            'telegram',
            'twitter',
            'whatsApp',
          ],
          'enumType': 'IdentityProvider',
        },
        'oauthProfileUrl': {
          'type': 'string',
        },
        'trustedAt': {
          'type': 'string',
          'format': 'date-time',
        },
      },
    },
    'userBlocks': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'id': {
          'type': 'string',
          'maxLength': 32,
        },
        'adminNotes': {
          'type': 'string',
        },
        'metadata': {
          'type': 'object',
          'properties': {
            'updatedAt': {
              'type': 'string',
              'format': 'date-time',
            },
          },
        },
        'createdAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'createdBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'updatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'updatedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'deletedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'deletedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'userId': {
          'type': 'string',
          'maxLength': 32,
        },
        'reasonTextId': {
          'type': 'string',
        },
        'notes': {
          'type': 'string',
        },
        'syncedToAnalyticsAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'syncedWithMm2At': {
          'type': 'string',
          'description': 'This attribute is only used by the MM2 synchronizer.',
          'format': 'date-time',
        },
        'mm2Id': {
          'type': 'string',
          'description': 'This attribute is only used by the MM2 synchronizer.',
        },
      },
    },
    'contacts': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {},
    },
    'inactivatedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'inactivatedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'termsAndConditionsAcceptedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'optIntoNewsletter': {
      'type': 'boolean',
    },
    'onboardingStage': {
      'type': 'string',
    },
    'suspendedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'suspendedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'anonymizedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'addedToBgVaultAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'syncedToAnalyticsAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'companyIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
      'maxLength': 32,
    },
    'companies': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'id': {
          'type': 'string',
          'maxLength': 32,
        },
        'adminNotes': {
          'type': 'string',
        },
        'createdAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'createdBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'updatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'updatedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'deletedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'deletedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'userIds': {
          'type': 'array',
          'items': {
            'type': 'string',
          },
        },
        'name': {
          'type': 'string',
        },
        'description': {
          'type': 'string',
        },
        'location': {
          'type': 'string',
        },
        'companyTypeTextId': {
          'type': 'string',
        },
        'companyStageTextId': {
          'type': 'string',
        },
        'websites': {
          'type': 'array',
          'items': {
            'type': 'object',
          },
          'properties': {
            'label': {
              'type': 'string',
            },
            'value': {
              'type': 'string',
            },
            'tags': {
              'type': 'array',
              'items': {
                'type': 'string',
              },
            },
          },
        },
        'industries': {
          'type': 'array',
          'items': {
            'type': 'string',
          },
        },
        'isOperational': {
          'type': 'boolean',
        },
        'isFundraising': {
          'type': 'boolean',
        },
        'annualRevenue': {
          'type': 'integer',
        },
        'employeeCount': {
          'type': 'integer',
        },
        'foundedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'mm2UserId': {
          'type': 'string',
          'description': 'If a Company was created from the imported attributes of an MM2 Profile, mm2UserId references the MM2 user ID. This attribute is only used by the MM2 synchronizer.',
        },
        'mm2CompanyRole': {
          'type': 'string',
          'description': 'If a Company was created from the imported from MM2, mm2CompanyRole is either "mentor" or "mentee". This attribute is only used by the MM2 synchronizer.',
        },
        'syncedWithMm2At': {
          'type': 'string',
          'description': 'This attribute is only used by the MM2 synchronizer.',
          'format': 'date-time',
        },
      },
    },
    'groupIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
      'maxLength': 32,
    },
    'parentGroupIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
      'maxLength': 32,
    },
    'externalGroupIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
      'maxLength': 32,
    },
    'pronounsTextIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
    },
    'groupMemberships': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'id': {
          'type': 'string',
          'maxLength': 32,
        },
        'groupId': {
          'type': 'string',
          'maxLength': 32,
        },
        'groupIdent': {
          'type': 'string',
        },
        'userId': {
          'type': 'string',
          'maxLength': 32,
        },
        'roles': {
          'type': 'string',
          'enum': [
            'admin',
            'coordinator',
            'moderator',
            'owner',
          ],
          'enumType': 'GroupMembershipRole',
        },
      },
    },
    'seeksHelp': {
      'type': 'boolean',
    },
    'offersHelp': {
      'type': 'boolean',
    },
    'birthYear': {
      'type': 'integer',
    },
    'ethnicity': {
      'type': 'string',
    },
    'educationLevelTextId': {
      'type': 'string',
    },
    'personalBio': {
      'type': 'string',
    },
    'yearsManagementExperience': {
      'type': 'integer',
    },
    'yearsOwnershipExperience': {
      'type': 'integer',
    },
    'academicExperienceIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
      'maxLength': 32,
    },
    'academicExperiences': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'id': {
          'type': 'string',
          'maxLength': 32,
        },
        'adminNotes': {
          'type': 'string',
        },
        'createdAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'createdBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'updatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'updatedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'deletedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'deletedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'institutionName': {
          'type': 'string',
        },
        'degreeType': {
          'type': 'string',
          'description': 'E.g. "Bachelor of Science"',
        },
        'fieldOfStudy': {
          'type': 'string',
          'description': 'E.g. "Computer Science"',
        },
        'startDate': {
          'type': 'string',
          'description': 'If no start date is provided, startDate is null.',
          'format': 'date-time',
        },
        'endDate': {
          'type': 'string',
          'description': 'If the experience is ongoing, endDate is null.',
          'format': 'date-time',
        },
        'userId': {
          'type': 'string',
          'maxLength': 32,
        },
      },
    },
    'genderSelfDescribed': {
      'type': 'string',
      'description': 'This attribute is only used by the MM2 synchronizer.',
    },
    'businessExperienceIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
      'maxLength': 32,
    },
    'businessExperiences': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'id': {
          'type': 'string',
          'maxLength': 32,
        },
        'adminNotes': {
          'type': 'string',
        },
        'createdAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'createdBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'updatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'updatedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'deletedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'deletedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'businessName': {
          'type': 'string',
        },
        'jobTitle': {
          'type': 'string',
        },
        'city': {
          'type': 'string',
        },
        'state': {
          'type': 'string',
        },
        'country': {
          'type': 'string',
        },
        'startDate': {
          'type': 'string',
          'description': 'If no start date is provided, startDate is null.',
          'format': 'date-time',
        },
        'endDate': {
          'type': 'string',
          'description': 'If the experience is ongoing, endDate is null.',
          'format': 'date-time',
        },
        'userId': {
          'type': 'string',
          'maxLength': 32,
        },
      },
    },
    'cityOfOrigin': {
      'type': 'string',
    },
    'regionOfOrigin': {
      'type': 'string',
    },
    'countryOfOriginTextId': {
      'type': 'string',
    },
    'isOnVacation': {
      'type': 'boolean',
    },
    'avatarAsset': {
      'type': 'object',
      'properties': {
        'id': {
          'type': 'string',
          'maxLength': 32,
        },
        'adminNotes': {
          'type': 'string',
        },
        'createdAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'createdBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'updatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'updatedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'deletedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'deletedBy': {
          'type': 'string',
          'maxLength': 32,
        },
        'ownerId': {
          'type': 'string',
          'maxLength': 32,
        },
        'ownerModelType': {
          'type': 'string',
          'enum': [
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
          'enumType': 'ModelType',
        },
        'assetType': {
          'type': 'string',
          'enum': [
            'unset',
            'avatar',
            'profileHeroImage',
          ],
          'enumType': 'UploadedAssetType',
        },
        'hostingService': {
          'type': 'string',
          'enum': [
            's3',
            'unset',
          ],
          'enumType': 'AssetHostingService',
        },
        'url': {
          'type': 'string',
        },
        'path': {
          'type': 'string',
        },
        's3Bucket': {
          'type': 'string',
        },
        's3Key': {
          'type': 'string',
        },
        'mimeType': {
          'type': 'string',
        },
        'uploadUrl': {
          'type': 'string',
        },
        'uploadUrlExpiresAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'uploadedAt': {
          'type': 'string',
          'format': 'date-time',
        },
        'expiresAt': {
          'type': 'string',
          'format': 'date-time',
        },
      },
    },
    'profileRoleHistory': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'newRole': {
          'type': 'string',
          'enum': [
            'mentee',
            'mentor',
            'both',
            'none',
          ],
          'enumType': 'UserProfileRole',
        },
        'createdAt': {
          'type': 'string',
          'format': 'date-time',
        },
      },
    },
    'ssoIdp': {
      'type': 'string',
    },
    'originatedInMm2': {
      'type': 'boolean',
      'description': 'Records whether a user was originally created in MM2.',
    },
    'syncedWithMm2At': {
      'type': 'string',
      'description': 'This attribute is only used by the MM2 synchronizer.',
      'format': 'date-time',
    },
    'mm2PasswordHash': {
      'type': 'string',
      'description': 'This is the MM2 password hash.',
    },
    'mm2Id': {
      'type': 'string',
      'description': 'This attribute is only used by the MM2 synchronizer.',
    },
    'mm2PhotoOriginal': {
      'type': 'string',
      'description': 'This attribute is only used by the MM2 synchronizer.',
    },
    'mm2BasicAccountCompleted': {
      'type': 'boolean',
      'description': 'For MM2 users, this means a profile is completed.',
    },
    'hasSignedInToMm3': {
      'type': 'boolean',
      'description': 'Records whether a user has logged into MM3.',
    },
    'hasSignedInToMm2': {
      'type': 'boolean',
      'description': 'Records whether a user has logged into MM2.',
    },
    'mentor': {
      'type': 'object',
      'description': 'This attribute is a copy of the mentor group membership.',
      'properties': {
        'expertisesTextIds': {
          'type': 'array',
          'description': 'Must match expertise textIds.',
          'items': {
            'type': 'string',
          },
        },
        'additionalExpertisesTextIds': {
          'type': 'array',
          'description': 'Must match expertise textIds.',
          'items': {
            'type': 'string',
          },
        },
        'industriesTextIds': {
          'type': 'array',
          'description': 'Must match industry textIds.',
          'items': {
            'type': 'string',
          },
        },
        'mm2ExpertisesTextIds': {
          'type': 'array',
          'description': 'Must match mm2 expertise textIds -- only used by synchronizer',
          'items': {
            'type': 'string',
          },
        },
        'mm2IndustriesTextIds': {
          'type': 'array',
          'description': 'Must match mm2 industry textIds -- only used by synchronizer',
          'items': {
            'type': 'string',
          },
        },
        'helpICanOffer': {
          'type': 'string',
        },
        'expectationsForMentees': {
          'type': 'string',
        },
        'menteePreparationInstructions': {
          'type': 'string',
        },
        'endorsements': {
          'type': 'integer',
        },
        'reasonsForMentoring': {
          'type': 'string',
        },
        'howICanHelpMentees': {
          'type': 'string',
        },
      },
    },
    'mentee': {
      'type': 'object',
      'description': 'This attribute is a copy of the mentee group membership.',
      'properties': {
        'soughtExpertisesTextIds': {
          'type': 'array',
          'description': 'Must match expertise textIds.',
          'items': {
            'type': 'string',
          },
        },
        'additionalSoughtExpertisesTextIds': {
          'type': 'array',
          'description': 'Must match expertise textIds.',
          'items': {
            'type': 'string',
          },
        },
        'industryTextId': {
          'type': 'string',
          'description': 'Must match industry textIds.',
        },
        'mm2SoughtExpertisesTextIds': {
          'type': 'array',
          'description': 'Must match mm2 expertise textIds -- only used by synchronizer',
          'items': {
            'type': 'string',
          },
        },
        'mm2IndustryTextId': {
          'type': 'string',
          'description': 'Must match mm2 industry textIds -- only used by synchronizer',
        },
        'actionsTaken': {
          'type': 'string',
          'description': 'From MM2, not used in MM3 (yet)',
        },
        'currentChallenges': {
          'type': 'string',
          'description': 'From MM2, not used in MM3 (yet)',
        },
        'futureGoals': {
          'type': 'string',
          'description': 'From MM2, not used in MM3 (yet)',
        },
        'motivationsForMentorship': {
          'type': 'string',
          'description': 'From MM2, not used in MM3 (yet)',
        },
        'reasonsForStartingBusiness': {
          'type': 'string',
        },
        'howCanMentorSupportMe': {
          'type': 'string',
        },
      },
    },
  },
  'required': [
    'id',
  ],
};
