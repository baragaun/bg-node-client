declare const schema: {
    Channel: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            name: {
                type: string;
            };
            topic: {
                type: string;
            };
            description: {
                type: string;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                };
            };
            channelType: {
                type: string;
                enum: string[];
                enumType: string;
            };
            statuses: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    userId: {
                        type: string;
                        maxLength: number;
                    };
                    archivedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            userIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            otherUserId: {
                type: string;
                description: string;
                maxLength: number;
            };
            pausedAt: {
                type: string;
                format: string;
            };
            pausedBy: {
                type: string;
                maxLength: number;
            };
            suspendedAt: {
                type: string;
                format: string;
            };
            suspendedBy: {
                type: string;
                maxLength: number;
            };
            lockedAt: {
                type: string;
                format: string;
            };
            lockedBy: {
                type: string;
                maxLength: number;
            };
            archivedAt: {
                type: string;
                format: string;
            };
            archivedBy: {
                type: string;
                maxLength: number;
            };
            assumedMentorId: {
                type: string;
                maxLength: number;
            };
            mm2Id: {
                type: string;
                description: string;
            };
            syncedWithMm2At: {
                type: string;
                description: string;
                format: string;
            };
        };
        required: string[];
    };
    ChannelInvitation: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            channelId: {
                type: string;
                maxLength: number;
            };
            recipientId: {
                type: string;
                maxLength: number;
            };
            channelName: {
                type: string;
            };
            channelTopic: {
                type: string;
            };
            messageText: {
                type: string;
            };
            autoAccept: {
                type: string;
                description: string;
            };
            declineReasonTextId: {
                type: string;
            };
            dismissedFromInboxBySenderAt: {
                type: string;
                format: string;
            };
            dismissedFromInboxByRecipientAt: {
                type: string;
                format: string;
            };
            readByRecipientAt: {
                type: string;
                format: string;
            };
            status: {
                type: string;
                enum: string[];
                enumType: string;
            };
            suspendedAt: {
                type: string;
                format: string;
            };
            suspendedBy: {
                type: string;
                maxLength: number;
            };
            userSearchId: {
                type: string;
                maxLength: number;
            };
            searchRank: {
                type: string;
            };
            mm2ConversationId: {
                type: string;
                description: string;
            };
            mm2Id: {
                type: string;
                description: string;
            };
            syncedWithMm2At: {
                type: string;
                description: string;
                format: string;
            };
        };
        required: string[];
    };
    ChannelMessage: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            channelId: {
                type: string;
                maxLength: number;
            };
            replyToMessageId: {
                type: string;
                maxLength: number;
            };
            channelMessageType: {
                type: string;
                enum: string[];
                enumType: string;
            };
            messageText: {
                type: string;
            };
            statuses: {
                type: string;
            };
            editedAt: {
                type: string;
                format: string;
            };
            suspendedAt: {
                type: string;
                format: string;
            };
            suspendedBy: {
                type: string;
                maxLength: number;
            };
            mm2ConversationId: {
                type: string;
                description: string;
            };
            mm2Id: {
                type: string;
                description: string;
            };
            syncedWithMm2At: {
                type: string;
                description: string;
                format: string;
            };
        };
        required: string[];
    };
    ChannelParticipant: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
                properties: {
                    userHandle: {
                        type: string;
                    };
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                    avatarUrl: {
                        type: string;
                    };
                    sentMessageCount: {
                        type: string;
                    };
                    unseenMessageCount: {
                        type: string;
                    };
                    unseenSystemMessageCount: {
                        type: string;
                    };
                };
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            channelId: {
                type: string;
                maxLength: number;
            };
            userId: {
                type: string;
                maxLength: number;
            };
            invitedBy: {
                type: string;
                maxLength: number;
            };
            channelName: {
                type: string;
            };
            role: {
                type: string;
                enum: string[];
                enumType: string;
            };
            suspendedAt: {
                type: string;
                format: string;
            };
            suspendedBy: {
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    ClientInfo: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            myUserId: {
                type: string;
                maxLength: number;
            };
            authToken: {
                type: string;
            };
            myUserDeviceUuid: {
                type: string;
            };
            signedOutUserId: {
                type: string;
                maxLength: number;
            };
            remoteContentStatus: {
                type: string;
                properties: {
                    optionsUpdatedAt: {
                        type: string;
                    };
                    myUserUpdatedAt: {
                        type: string;
                    };
                    myUserInboxUpdatedAt: {
                        type: string;
                    };
                };
            };
            localContentStatus: {
                type: string;
                properties: {
                    optionsUpdatedAt: {
                        type: string;
                    };
                    myUserUpdatedAt: {
                        type: string;
                    };
                    myUserInboxUpdatedAt: {
                        type: string;
                    };
                };
            };
            sessionStartedAt: {
                type: string;
            };
            sessionEndedAt: {
                type: string;
            };
        };
        required: string[];
    };
    Contact: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            userId: {
                type: string;
                maxLength: number;
            };
            channelId: {
                type: string;
                maxLength: number;
            };
            nickname: {
                type: string;
            };
            typeTextIds: {
                type: string;
                items: {
                    type: string;
                };
            };
            favorite: {
                type: string;
            };
            notes: {
                type: string;
            };
            archivedAt: {
                type: string;
                format: string;
            };
        };
        required: string[];
    };
    MyUser: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            firstName: {
                type: string;
            };
            lastName: {
                type: string;
            };
            userHandle: {
                type: string;
            };
            phoneNumber: {
                type: string;
            };
            phoneNumberUpdatedAt: {
                type: string;
                format: string;
            };
            isPhoneNumberVerified: {
                type: string;
            };
            email: {
                type: string;
            };
            emailSource: {
                type: string;
                description: string;
            };
            emailUpdatedAt: {
                type: string;
                format: string;
            };
            isEmailVerified: {
                type: string;
            };
            genderTextId: {
                type: string;
            };
            cityOfResidence: {
                type: string;
            };
            regionOfResidence: {
                type: string;
            };
            countryOfResidenceTextId: {
                type: string;
            };
            postalCode: {
                type: string;
            };
            avatarUrl: {
                type: string;
            };
            websites: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    label: {
                        type: string;
                    };
                    value: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
            };
            authType: {
                type: string;
                enum: string[];
                enumType: string;
            };
            inviteCode: {
                type: string;
            };
            passwordHash: {
                type: string;
            };
            tfaBackupCodes: {
                type: string;
            };
            passwordUpdatedAt: {
                type: string;
                format: string;
            };
            preferredLanguageTextId: {
                type: string;
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
                enumType: string;
            };
            fallbackUiLanguageTextId: {
                type: string;
                enum: string[];
                enumType: string;
            };
            discoverable: {
                type: string;
                description: string;
            };
            roles: {
                type: string;
                enum: string[];
                enumType: string;
            };
            appFeatures: {
                type: string;
                enum: string[];
                enumType: string;
            };
            source: {
                type: string;
            };
            timezone: {
                type: string;
            };
            preferences: {
                type: string;
                properties: {
                    shareEmail: {
                        type: string;
                    };
                    sharePhoneNumber: {
                        type: string;
                    };
                    showWelcomeMessage: {
                        type: string;
                    };
                    notificationOptions: {
                        type: string;
                    };
                };
            };
            trustLevel: {
                type: string;
            };
            signedInAt: {
                type: string;
                format: string;
            };
            signedOutAt: {
                type: string;
                format: string;
            };
            latestActivityAt: {
                type: string;
                format: string;
            };
            userDevices: {
                type: string;
            };
            userBlocks: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                    };
                    metadata: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
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
                    };
                    syncedToAnalyticsAt: {
                        type: string;
                        format: string;
                    };
                    syncedWithMm2At: {
                        type: string;
                        description: string;
                        format: string;
                    };
                    mm2Id: {
                        type: string;
                        description: string;
                    };
                };
            };
            contacts: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                    };
                    metadata: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
                    };
                    userId: {
                        type: string;
                        maxLength: number;
                    };
                    channelId: {
                        type: string;
                        maxLength: number;
                    };
                    nickname: {
                        type: string;
                    };
                    typeTextIds: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    favorite: {
                        type: string;
                    };
                    notes: {
                        type: string;
                    };
                    archivedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            inactivatedAt: {
                type: string;
                format: string;
            };
            inactivatedBy: {
                type: string;
                maxLength: number;
            };
            termsAndConditionsAcceptedAt: {
                type: string;
                format: string;
            };
            optIntoNewsletter: {
                type: string;
            };
            onboardingStage: {
                type: string;
            };
            suspendedAt: {
                type: string;
                format: string;
            };
            suspendedBy: {
                type: string;
                maxLength: number;
            };
            anonymizedAt: {
                type: string;
                format: string;
            };
            addedToBgVaultAt: {
                type: string;
                format: string;
            };
            syncedToAnalyticsAt: {
                type: string;
                format: string;
            };
            companyIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            companies: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                    };
                    metadata: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
                    };
                    userIds: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    location: {
                        type: string;
                    };
                    companyTypeTextId: {
                        type: string;
                    };
                    companyStageTextId: {
                        type: string;
                    };
                    websites: {
                        type: string;
                        items: {
                            type: string;
                        };
                        properties: {
                            label: {
                                type: string;
                            };
                            value: {
                                type: string;
                            };
                            tags: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                    industries: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    isOperational: {
                        type: string;
                    };
                    isFundraising: {
                        type: string;
                    };
                    annualRevenue: {
                        type: string;
                    };
                    employeeCount: {
                        type: string;
                    };
                    foundedAt: {
                        type: string;
                        format: string;
                    };
                    mm2UserId: {
                        type: string;
                        description: string;
                    };
                    mm2CompanyRole: {
                        type: string;
                        description: string;
                    };
                    syncedWithMm2At: {
                        type: string;
                        description: string;
                        format: string;
                    };
                };
            };
            groupIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            parentGroupIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            externalGroupIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            pronounsTextIds: {
                type: string;
                items: {
                    type: string;
                };
            };
            groupMemberships: {
                type: string;
            };
            seeksHelp: {
                type: string;
            };
            offersHelp: {
                type: string;
            };
            birthYear: {
                type: string;
            };
            ethnicity: {
                type: string;
            };
            educationLevelTextId: {
                type: string;
            };
            personalBio: {
                type: string;
            };
            yearsManagementExperience: {
                type: string;
            };
            yearsOwnershipExperience: {
                type: string;
            };
            academicExperienceIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            academicExperiences: {
                type: string;
            };
            genderSelfDescribed: {
                type: string;
                description: string;
            };
            businessExperienceIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            businessExperiences: {
                type: string;
            };
            cityOfOrigin: {
                type: string;
            };
            regionOfOrigin: {
                type: string;
            };
            countryOfOriginTextId: {
                type: string;
            };
            isOnVacation: {
                type: string;
            };
            avatarAsset: {
                type: string;
            };
            profileRoleHistory: {
                type: string;
            };
            ssoIdp: {
                type: string;
            };
            originatedInMm2: {
                type: string;
                description: string;
            };
            syncedWithMm2At: {
                type: string;
                description: string;
                format: string;
            };
            mm2PasswordHash: {
                type: string;
                description: string;
            };
            mm2Id: {
                type: string;
                description: string;
            };
            mm2PhotoOriginal: {
                type: string;
                description: string;
            };
            mm2BasicAccountCompleted: {
                type: string;
                description: string;
            };
            hasSignedInToMm3: {
                type: string;
                description: string;
            };
            hasSignedInToMm2: {
                type: string;
                description: string;
            };
            mentor: {
                type: string;
                description: string;
            };
            mentee: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
    User: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            firstName: {
                type: string;
            };
            lastName: {
                type: string;
            };
            userHandle: {
                type: string;
            };
            phoneNumber: {
                type: string;
            };
            phoneNumberUpdatedAt: {
                type: string;
                format: string;
            };
            isPhoneNumberVerified: {
                type: string;
            };
            email: {
                type: string;
            };
            emailSource: {
                type: string;
                description: string;
            };
            emailUpdatedAt: {
                type: string;
                format: string;
            };
            isEmailVerified: {
                type: string;
            };
            genderTextId: {
                type: string;
            };
            cityOfResidence: {
                type: string;
            };
            regionOfResidence: {
                type: string;
            };
            countryOfResidenceTextId: {
                type: string;
            };
            postalCode: {
                type: string;
            };
            avatarUrl: {
                type: string;
            };
            websites: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    label: {
                        type: string;
                    };
                    value: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
            };
            authType: {
                type: string;
                enum: string[];
                enumType: string;
            };
            inviteCode: {
                type: string;
            };
            passwordHash: {
                type: string;
            };
            tfaBackupCodes: {
                type: string;
            };
            passwordUpdatedAt: {
                type: string;
                format: string;
            };
            preferredLanguageTextId: {
                type: string;
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
                enumType: string;
            };
            fallbackUiLanguageTextId: {
                type: string;
                enum: string[];
                enumType: string;
            };
            discoverable: {
                type: string;
                description: string;
            };
            roles: {
                type: string;
                enum: string[];
                enumType: string;
            };
            appFeatures: {
                type: string;
                enum: string[];
                enumType: string;
            };
            source: {
                type: string;
            };
            timezone: {
                type: string;
            };
            preferences: {
                type: string;
                properties: {
                    shareEmail: {
                        type: string;
                    };
                    sharePhoneNumber: {
                        type: string;
                    };
                    showWelcomeMessage: {
                        type: string;
                    };
                    notificationOptions: {
                        type: string;
                    };
                };
            };
            trustLevel: {
                type: string;
            };
            signedInAt: {
                type: string;
                format: string;
            };
            signedOutAt: {
                type: string;
                format: string;
            };
            latestActivityAt: {
                type: string;
                format: string;
            };
            userDevices: {
                type: string;
            };
            userBlocks: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                    };
                    metadata: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
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
                    };
                    syncedToAnalyticsAt: {
                        type: string;
                        format: string;
                    };
                    syncedWithMm2At: {
                        type: string;
                        description: string;
                        format: string;
                    };
                    mm2Id: {
                        type: string;
                        description: string;
                    };
                };
            };
            contacts: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                    };
                    metadata: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
                    };
                    userId: {
                        type: string;
                        maxLength: number;
                    };
                    channelId: {
                        type: string;
                        maxLength: number;
                    };
                    nickname: {
                        type: string;
                    };
                    typeTextIds: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    favorite: {
                        type: string;
                    };
                    notes: {
                        type: string;
                    };
                    archivedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            inactivatedAt: {
                type: string;
                format: string;
            };
            inactivatedBy: {
                type: string;
                maxLength: number;
            };
            termsAndConditionsAcceptedAt: {
                type: string;
                format: string;
            };
            optIntoNewsletter: {
                type: string;
            };
            onboardingStage: {
                type: string;
            };
            suspendedAt: {
                type: string;
                format: string;
            };
            suspendedBy: {
                type: string;
                maxLength: number;
            };
            anonymizedAt: {
                type: string;
                format: string;
            };
            addedToBgVaultAt: {
                type: string;
                format: string;
            };
            syncedToAnalyticsAt: {
                type: string;
                format: string;
            };
            companyIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            companies: {
                type: string;
                items: {
                    type: string;
                };
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    adminNotes: {
                        type: string;
                    };
                    metadata: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    createdBy: {
                        type: string;
                        maxLength: number;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    updatedBy: {
                        type: string;
                        maxLength: number;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                    deletedBy: {
                        type: string;
                        maxLength: number;
                    };
                    userIds: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    location: {
                        type: string;
                    };
                    companyTypeTextId: {
                        type: string;
                    };
                    companyStageTextId: {
                        type: string;
                    };
                    websites: {
                        type: string;
                        items: {
                            type: string;
                        };
                        properties: {
                            label: {
                                type: string;
                            };
                            value: {
                                type: string;
                            };
                            tags: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                    industries: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    isOperational: {
                        type: string;
                    };
                    isFundraising: {
                        type: string;
                    };
                    annualRevenue: {
                        type: string;
                    };
                    employeeCount: {
                        type: string;
                    };
                    foundedAt: {
                        type: string;
                        format: string;
                    };
                    mm2UserId: {
                        type: string;
                        description: string;
                    };
                    mm2CompanyRole: {
                        type: string;
                        description: string;
                    };
                    syncedWithMm2At: {
                        type: string;
                        description: string;
                        format: string;
                    };
                };
            };
            groupIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            parentGroupIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            externalGroupIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            pronounsTextIds: {
                type: string;
                items: {
                    type: string;
                };
            };
            groupMemberships: {
                type: string;
            };
            seeksHelp: {
                type: string;
            };
            offersHelp: {
                type: string;
            };
            birthYear: {
                type: string;
            };
            ethnicity: {
                type: string;
            };
            educationLevelTextId: {
                type: string;
            };
            personalBio: {
                type: string;
            };
            yearsManagementExperience: {
                type: string;
            };
            yearsOwnershipExperience: {
                type: string;
            };
            academicExperienceIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            academicExperiences: {
                type: string;
            };
            genderSelfDescribed: {
                type: string;
                description: string;
            };
            businessExperienceIds: {
                type: string;
                items: {
                    type: string;
                };
                maxLength: number;
            };
            businessExperiences: {
                type: string;
            };
            cityOfOrigin: {
                type: string;
            };
            regionOfOrigin: {
                type: string;
            };
            countryOfOriginTextId: {
                type: string;
            };
            isOnVacation: {
                type: string;
            };
            avatarAsset: {
                type: string;
            };
            profileRoleHistory: {
                type: string;
            };
            ssoIdp: {
                type: string;
            };
            originatedInMm2: {
                type: string;
                description: string;
            };
            syncedWithMm2At: {
                type: string;
                description: string;
                format: string;
            };
            mm2PasswordHash: {
                type: string;
                description: string;
            };
            mm2Id: {
                type: string;
                description: string;
            };
            mm2PhotoOriginal: {
                type: string;
                description: string;
            };
            mm2BasicAccountCompleted: {
                type: string;
                description: string;
            };
            hasSignedInToMm3: {
                type: string;
                description: string;
            };
            hasSignedInToMm2: {
                type: string;
                description: string;
            };
            mentor: {
                type: string;
                description: string;
            };
            mentee: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
    UserInbox: {
        $schema: string;
        $id: string;
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
            };
            metadata: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
            createdBy: {
                type: string;
                maxLength: number;
            };
            updatedAt: {
                type: string;
                format: string;
            };
            updatedBy: {
                type: string;
                maxLength: number;
            };
            deletedAt: {
                type: string;
                format: string;
            };
            deletedBy: {
                type: string;
                maxLength: number;
            };
            userId: {
                type: string;
                maxLength: number;
            };
            channels: {
                type: string;
            };
        };
        required: string[];
    };
};
export default schema;
