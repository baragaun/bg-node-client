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
            'type': 'UserMetadata',
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
                    'type': 'BaseModelMetadata',
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
            'properties': {
                'id': {
                    'type': 'string',
                    'maxLength': 32,
                },
                'adminNotes': {
                    'type': 'string',
                },
                'metadata': {
                    'type': 'ContactMetadata',
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
                'channelId': {
                    'type': 'string',
                    'maxLength': 32,
                },
                'nickname': {
                    'type': 'string',
                },
                'typeTextIds': {
                    'type': 'array',
                    'items': {
                        'type': 'string',
                    },
                },
                'favorite': {
                    'type': 'boolean',
                },
                'notes': {
                    'type': 'string',
                },
                'archivedAt': {
                    'type': 'string',
                    'format': 'date-time',
                },
            },
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
                'metadata': {
                    'type': 'BaseModelMetadata',
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
            'type': 'UploadedAsset',
        },
        'profileRoleHistory': {
            'type': 'array',
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
            'type': 'MentorsGroupMembership',
            'description': 'This attribute is a copy of the mentor group membership.',
        },
        'mentee': {
            'type': 'MenteesGroupMembership',
            'description': 'This attribute is a copy of the mentee group membership.',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=myUserSchema.js.map