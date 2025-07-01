declare const schema: {
    Channel: {
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
                    channelInvitationAccepted: {
                        type: string;
                        nullable: boolean;
                    };
                    messagesSentByCreatorCount: {
                        type: string;
                        nullable: boolean;
                    };
                    messagesSentByFirstParticipantCount: {
                        type: string;
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
            name: {
                type: string;
                nullable: boolean;
            };
            topic: {
                type: string;
                nullable: boolean;
            };
            description: {
                type: string;
                nullable: boolean;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                };
                nullable: boolean;
            };
            channelType: {
                type: string;
                enum: string[];
            };
            statuses: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                        archivedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                    };
                };
                nullable: boolean;
            };
            userIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
                nullable: boolean;
            };
            otherUserId: {
                type: string;
                description: string;
                maxLength: number;
                nullable: boolean;
            };
            pausedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            pausedBy: {
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
            lockedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            lockedBy: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            archivedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            archivedBy: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
        };
        required: string[];
    };
    ChannelInvitation: {
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
            channelId: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            recipientId: {
                type: string;
                maxLength: number;
            };
            channelName: {
                type: string;
                nullable: boolean;
            };
            channelTopic: {
                type: string;
                nullable: boolean;
            };
            messageText: {
                type: string;
                nullable: boolean;
            };
            autoAccept: {
                type: string;
                description: string;
                nullable: boolean;
            };
            declineReasonTextId: {
                type: string;
                nullable: boolean;
            };
            dismissedFromInboxBySenderAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            dismissedFromInboxByRecipientAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            readByRecipientAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            status: {
                type: string;
                enum: string[];
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
            userSearchId: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            searchRank: {
                type: string;
                nullable: boolean;
            };
        };
        required: string[];
    };
    ChannelMessage: {
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
                    updatedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    senderUserHandle: {
                        type: string;
                        nullable: boolean;
                    };
                    senderFirstName: {
                        type: string;
                        nullable: boolean;
                    };
                    senderLastName: {
                        type: string;
                        nullable: boolean;
                    };
                    senderAvatarUrl: {
                        type: string;
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
            channelId: {
                type: string;
                maxLength: number;
            };
            replyToMessageId: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            channelMessageType: {
                type: string;
                enum: string[];
                nullable: boolean;
            };
            messageText: {
                type: string;
                nullable: boolean;
            };
            statuses: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                        isInArchivedChannel: {
                            type: string;
                            nullable: boolean;
                        };
                        receivedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        seenAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                    };
                };
                nullable: boolean;
            };
            editedAt: {
                type: string;
                format: string;
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
        };
        required: string[];
    };
    ChannelParticipant: {
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
            channelId: {
                type: string;
                maxLength: number;
            };
            userId: {
                type: string;
                maxLength: number;
            };
            userInfo: {
                type: string;
                properties: {
                    userHandle: {
                        type: string;
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
                    avatarUrl: {
                        type: string;
                        nullable: boolean;
                    };
                };
                nullable: boolean;
            };
            invitedBy: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            channelName: {
                type: string;
                nullable: boolean;
            };
            role: {
                type: string;
                enum: string[];
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
        };
        required: string[];
    };
    ClientInfo: {
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
            myUserId: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            authToken: {
                type: string;
                nullable: boolean;
            };
            myUserDeviceUuid: {
                type: string;
                nullable: boolean;
            };
            signedOutUserId: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            remoteContentStatus: {
                type: string;
                properties: {
                    optionsUpdatedAt: {
                        type: string;
                        nullable: boolean;
                    };
                    myUserUpdatedAt: {
                        type: string;
                        nullable: boolean;
                    };
                    myUserInboxUpdatedAt: {
                        type: string;
                        nullable: boolean;
                    };
                };
                nullable: boolean;
            };
            localContentStatus: {
                type: string;
                properties: {
                    optionsUpdatedAt: {
                        type: string;
                        nullable: boolean;
                    };
                    myUserUpdatedAt: {
                        type: string;
                        nullable: boolean;
                    };
                    myUserInboxUpdatedAt: {
                        type: string;
                        nullable: boolean;
                    };
                };
                nullable: boolean;
            };
            sessionStartedAt: {
                type: string;
                nullable: boolean;
            };
            sessionEndedAt: {
                type: string;
                nullable: boolean;
            };
        };
        required: string[];
    };
    Contact: {
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
                    updatedAt: {
                        type: string;
                        format: string;
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
                    avatarUrl: {
                        type: string;
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
            channelId: {
                type: string;
                maxLength: number;
                nullable: boolean;
            };
            nickname: {
                type: string;
                nullable: boolean;
            };
            typeTextIds: {
                type: string;
                items: {
                    type: string;
                };
            };
            favorite: {
                type: string;
                nullable: boolean;
            };
            notes: {
                type: string;
                nullable: boolean;
            };
            archivedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
        };
        required: string[];
    };
    MyUser: {
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
                            rejectedInvitationCount: {
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
    purchaseOrder: {
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
            shoppingCartId: {
                type: string;
                maxLength: number;
            };
            sumItemPrice: {
                type: string;
            };
            totalPrice: {
                type: string;
            };
            vat: {
                type: string;
            };
            paidAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            canceledAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            refundedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            items: {
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
                        purchaseOrderId: {
                            type: string;
                            maxLength: number;
                        };
                        shoppingCartItemId: {
                            type: string;
                            maxLength: number;
                        };
                        productId: {
                            type: string;
                            maxLength: number;
                        };
                        brandId: {
                            type: string;
                            maxLength: number;
                        };
                        quantity: {
                            type: string;
                        };
                        price: {
                            type: string;
                        };
                        totalPrice: {
                            type: string;
                        };
                    };
                };
            };
        };
        required: string[];
    };
    purchaseOrderItem: {
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
            purchaseOrderId: {
                type: string;
                maxLength: number;
            };
            shoppingCartItemId: {
                type: string;
                maxLength: number;
            };
            productId: {
                type: string;
                maxLength: number;
            };
            brandId: {
                type: string;
                maxLength: number;
            };
            quantity: {
                type: string;
            };
            price: {
                type: string;
            };
            totalPrice: {
                type: string;
            };
        };
        required: string[];
    };
    shoppingCart: {
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
            sumItemPrice: {
                type: string;
            };
            totalPrice: {
                type: string;
            };
            vat: {
                type: string;
            };
            items: {
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
                        shoppingCartId: {
                            type: string;
                            maxLength: number;
                        };
                        productId: {
                            type: string;
                            maxLength: number;
                        };
                        quantity: {
                            type: string;
                        };
                        price: {
                            type: string;
                        };
                        totalPrice: {
                            type: string;
                        };
                    };
                };
            };
        };
        required: string[];
    };
    shoppingCartItem: {
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
            shoppingCartId: {
                type: string;
                maxLength: number;
            };
            productId: {
                type: string;
                maxLength: number;
            };
            quantity: {
                type: string;
            };
            price: {
                type: string;
            };
            totalPrice: {
                type: string;
            };
        };
        required: string[];
    };
    User: {
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
                            rejectedInvitationCount: {
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
    UserInbox: {
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
            channels: {
                type: string;
                properties: {
                    userId: {
                        type: string;
                        maxLength: number;
                    };
                    unseenMessages: {
                        type: string;
                        nullable: boolean;
                    };
                    unseenSystemMessages: {
                        type: string;
                        nullable: boolean;
                    };
                    unseenArchivedMessages: {
                        type: string;
                        nullable: boolean;
                    };
                    latestMessages: {
                        type: string;
                        nullable: boolean;
                    };
                    latestArchivedMessages: {
                        type: string;
                        nullable: boolean;
                    };
                    pendingInvitations: {
                        type: string;
                        nullable: boolean;
                    };
                    invitations: {
                        type: string;
                        nullable: boolean;
                    };
                    itemIdHash: {
                        type: string;
                        description: string;
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
                    channelsExceedMaxCount: {
                        type: string;
                        nullable: boolean;
                    };
                    invitationsExceedMaxCount: {
                        type: string;
                        nullable: boolean;
                    };
                    assumedMentorId: {
                        type: string;
                        maxLength: number;
                        nullable: boolean;
                    };
                    mm2Id: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    syncedWithMm2At: {
                        type: string;
                        description: string;
                        format: string;
                        nullable: boolean;
                    };
                };
                nullable: boolean;
            };
        };
        required: string[];
    };
    Wallet: {
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
        };
        required: string[];
    };
    WalletItem: {
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
            walletId: {
                type: string;
                maxLength: number;
            };
            productId: {
                type: string;
                maxLength: number;
            };
            purchaseOrderItemId: {
                type: string;
                maxLength: number;
            };
            brandId: {
                type: string;
                maxLength: number;
            };
            productType: {
                type: string;
                enum: string[];
            };
            name: {
                type: string;
            };
            price: {
                type: string;
            };
            initialBalance: {
                type: string;
            };
            balance: {
                type: string;
            };
            code: {
                type: string;
                nullable: boolean;
            };
            hasBarcode: {
                type: string;
                nullable: boolean;
            };
            barcodeFormat: {
                type: string;
                enum: string[];
                nullable: boolean;
            };
            pin: {
                type: string;
                nullable: boolean;
            };
            source: {
                type: string;
                nullable: boolean;
            };
            imageSourceFront: {
                type: string;
                nullable: boolean;
            };
            imageSourceBack: {
                type: string;
                nullable: boolean;
            };
            referenceUrl: {
                type: string;
                nullable: boolean;
            };
            termsEn: {
                type: string;
                nullable: boolean;
            };
            termsUrl: {
                type: string;
                nullable: boolean;
            };
            instructionsEn: {
                type: string;
                nullable: boolean;
            };
            instructionsUrl: {
                type: string;
                nullable: boolean;
            };
            sortIndex: {
                type: string;
            };
            issuedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            expiresAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            balanceUpdatedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            archivedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
        };
        required: string[];
    };
};
export default schema;
