export declare const MyUserSchema: {
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        id: {
            type: string;
            maxLength: number;
        };
        adminNotes: {
            type: string;
            nullable: boolean;
        };
        metadata: {
            type: string;
            properties: {
                channelsMetadata: {
                    type: string;
                    properties: {
                        channelCount: {
                            type: string;
                        };
                        messagesSentCount: {
                            type: string;
                        };
                        unseenMessageCount: {
                            type: string;
                        };
                        unrespondedMessageCount: {
                            type: string;
                        };
                        invitationsSentCount: {
                            type: string;
                        };
                        invitationsReceivedCount: {
                            type: string;
                        };
                        declinedInvitationCount: {
                            type: string;
                        };
                        acceptedInvitationCount: {
                            type: string;
                        };
                        pendingInvitationCount: {
                            type: string;
                        };
                        updatedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        mentoringSessionCount: {
                            type: string;
                        };
                    };
                };
                groupsMetadata: {
                    type: string;
                    properties: {
                        groupCount: {
                            type: string;
                        };
                        updatedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                    };
                };
            };
            nullable: boolean;
        };
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        updatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        updatedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        deletedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        deletedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        firstName: {
            type: string;
            nullable: boolean;
        };
        lastName: {
            type: string;
            nullable: boolean;
        };
        userHandle: {
            type: string;
            nullable: boolean;
        };
        phoneNumber: {
            type: string;
            nullable: boolean;
        };
        phoneNumberUpdatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        isPhoneNumberVerified: {
            type: string;
        };
        email: {
            type: string;
            nullable: boolean;
        };
        emailUpdatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        isEmailVerified: {
            type: string;
        };
        genderTextId: {
            type: string;
            nullable: boolean;
        };
        cityOfResidence: {
            type: string;
            nullable: boolean;
        };
        regionOfResidence: {
            type: string;
            nullable: boolean;
        };
        countryOfResidenceTextId: {
            type: string;
            nullable: boolean;
        };
        postalCode: {
            type: string;
            nullable: boolean;
        };
        avatarUrl: {
            type: string;
            nullable: boolean;
        };
        websites: {
            type: string;
            items: {
                type: string;
                properties: {
                    label: {
                        type: string;
                        nullable: boolean;
                    };
                    value: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                };
            };
            nullable: boolean;
        };
        inviteCode: {
            type: string;
            nullable: boolean;
        };
        passwordHash: {
            type: string;
            nullable: boolean;
        };
        tfaBackupCodes: {
            type: string;
            nullable: boolean;
        };
        passwordUpdatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        preferredLanguageTextId: {
            type: string;
            nullable: boolean;
        };
        spokenLanguagesTextIds: {
            type: string;
            items: {
                type: string;
            };
        };
        selectedUiLanguageTextId: {
            type: string;
            enum: string[];
            nullable: boolean;
        };
        fallbackUiLanguageTextId: {
            type: string;
            enum: string[];
            nullable: boolean;
        };
        discoverable: {
            type: string;
            description: string;
            nullable: boolean;
        };
        roles: {
            type: string;
            items: {
                type: string;
                enum: string[];
            };
        };
        appFeatures: {
            type: string;
            items: {
                type: string;
                enum: string[];
            };
            nullable: boolean;
        };
        source: {
            type: string;
            nullable: boolean;
        };
        timezone: {
            type: string;
            nullable: boolean;
        };
        preferences: {
            type: string;
            properties: {
                shareEmail: {
                    type: string;
                    nullable: boolean;
                };
                sharePhoneNumber: {
                    type: string;
                    nullable: boolean;
                };
                showWelcomeMessage: {
                    type: string;
                    nullable: boolean;
                };
                notificationOptions: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            notificationType: {
                                type: string;
                                enum: string[];
                            };
                            enableEmail: {
                                type: string;
                                nullable: boolean;
                            };
                            enableInAppMessage: {
                                type: string;
                                nullable: boolean;
                            };
                            enablePushNotification: {
                                type: string;
                                nullable: boolean;
                            };
                            enableSms: {
                                type: string;
                                nullable: boolean;
                            };
                            frequency: {
                                type: string;
                                nullable: boolean;
                            };
                        };
                    };
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        trustLevel: {
            type: string;
        };
        userBlocks: {
            type: string;
            items: {
                type: string;
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                        nullable: boolean;
                    };
                    metadata: {
                        type: string;
                        properties: {
                            updatedAt: {
                                type: string;
                                format: string;
                                nullable: boolean;
                            };
                        };
                        nullable: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                        nullable: boolean;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                        nullable: boolean;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
                        nullable: boolean;
                    };
                    userId: {
                        type: string;
                        maxLength: number;
                    };
                    reasonTextId: {
                        type: string;
                    };
                    notes: {
                        type: string;
                        nullable: boolean;
                    };
                };
            };
            nullable: boolean;
        };
        termsAndConditionsAcceptedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        optIntoNewsletter: {
            type: string;
            nullable: boolean;
        };
        onboardingStage: {
            type: string;
            nullable: boolean;
        };
        isTestUser: {
            type: string;
            nullable: boolean;
        };
        signedInAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        signedOutAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        latestActivityAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        inactivatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        inactivatedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        suspendedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        anonymizedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        syncedToAnalyticsAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        companyIds: {
            type: string;
            items: {
                type: string;
                maxLength: number;
            };
            nullable: boolean;
        };
        companies: {
            type: string;
            items: {
                type: string;
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                        nullable: boolean;
                    };
                    metadata: {
                        type: string;
                        properties: {
                            updatedAt: {
                                type: string;
                                format: string;
                                nullable: boolean;
                            };
                        };
                        nullable: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                        nullable: boolean;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                        nullable: boolean;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
                        nullable: boolean;
                    };
                    userIds: {
                        type: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                        nullable: boolean;
                    };
                    location: {
                        type: string;
                        nullable: boolean;
                    };
                    companyTypeTextId: {
                        type: string;
                        nullable: boolean;
                    };
                    companyStageTextId: {
                        type: string;
                        nullable: boolean;
                    };
                    websites: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                label: {
                                    type: string;
                                    nullable: boolean;
                                };
                                value: {
                                    type: string;
                                };
                                tags: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                    nullable: boolean;
                                };
                            };
                        };
                        nullable: boolean;
                    };
                    industries: {
                        type: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    isOperational: {
                        type: string;
                        nullable: boolean;
                    };
                    isFundraising: {
                        type: string;
                        nullable: boolean;
                    };
                    annualRevenue: {
                        type: string;
                        nullable: boolean;
                    };
                    employeeCount: {
                        type: string;
                        nullable: boolean;
                    };
                    foundedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    mm2UserId: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    mm2CompanyRole: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                };
            };
            nullable: boolean;
        };
        ethnicityTextIds: {
            type: string;
            items: {
                type: string;
            };
            nullable: boolean;
        };
        avatarAsset: {
            type: string;
            properties: {
                id: {
                    type: string;
                    maxLength: number;
                };
                adminNotes: {
                    type: string;
                    nullable: boolean;
                };
                createdAt: {
                    type: string;
                    format: string;
                };
                createdBy: {
                    type: string;
                    maxLength: number;
                    nullable: boolean;
                };
                updatedAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
                updatedBy: {
                    type: string;
                    maxLength: number;
                    nullable: boolean;
                };
                deletedAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
                deletedBy: {
                    type: string;
                    maxLength: number;
                    nullable: boolean;
                };
                ownerId: {
                    type: string;
                    maxLength: number;
                };
                ownerModelType: {
                    type: string;
                    enum: string[];
                };
                assetType: {
                    type: string;
                    enum: string[];
                };
                hostingService: {
                    type: string;
                    enum: string[];
                };
                url: {
                    type: string;
                    nullable: boolean;
                };
                path: {
                    type: string;
                    nullable: boolean;
                };
                s3Bucket: {
                    type: string;
                    nullable: boolean;
                };
                s3Key: {
                    type: string;
                    nullable: boolean;
                };
                mimeType: {
                    type: string;
                    nullable: boolean;
                };
                uploadUrl: {
                    type: string;
                    nullable: boolean;
                };
                uploadUrlExpiresAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
                uploadedAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
                expiresAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        ssoIdp: {
            type: string;
            nullable: boolean;
        };
    };
    required: string[];
};
