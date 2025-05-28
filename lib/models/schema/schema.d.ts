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
                    updatedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    unseenMessageInfo: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                userId: {
                                    type: string;
                                    maxLength: number;
                                };
                                createdAt: {
                                    type: string;
                                    format: string;
                                };
                            };
                        };
                        nullable: boolean;
                    };
                    channelInvitationAccepted: {
                        type: string;
                    };
                    messagesSentByCreatorCount: {
                        type: string;
                    };
                    messagesSentByFirstParticipantCount: {
                        type: string;
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
            mm2ConversationId: {
                type: string;
                description: string;
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
            mm2ConversationId: {
                type: string;
                description: string;
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
        properties: {};
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
            emailSource: {
                type: string;
                description: string;
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
            authType: {
                type: string;
                enum: string[];
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
            isTestUser: {
                type: string;
                nullable: boolean;
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
            userDevices: {
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
                        deviceUuid: {
                            type: string;
                        };
                        deviceType: {
                            type: string;
                            nullable: boolean;
                        };
                        trusted: {
                            type: string;
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
                        brand: {
                            type: string;
                            nullable: boolean;
                        };
                        model: {
                            type: string;
                            nullable: boolean;
                        };
                        isTablet: {
                            type: string;
                        };
                        screenWidth: {
                            type: string;
                        };
                        screenHeight: {
                            type: string;
                        };
                        os: {
                            type: string;
                            nullable: boolean;
                        };
                        osVersion: {
                            type: string;
                            nullable: boolean;
                        };
                        timezone: {
                            type: string;
                            nullable: boolean;
                        };
                        ipAddress: {
                            type: string;
                            nullable: boolean;
                        };
                        consumer: {
                            type: string;
                            nullable: boolean;
                        };
                        consumerVersion: {
                            type: string;
                            nullable: boolean;
                        };
                        acceptedLanguage: {
                            type: string;
                            nullable: boolean;
                        };
                        locale: {
                            type: string;
                            nullable: boolean;
                        };
                        countryCode: {
                            type: string;
                            nullable: boolean;
                        };
                        appVersion: {
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
                        sessionStartedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        sessionEndedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        identityProvider: {
                            type: string;
                            enum: string[];
                            nullable: boolean;
                        };
                        oauthProfileUrl: {
                            type: string;
                            nullable: boolean;
                        };
                        trustedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                    };
                };
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
                        syncedToAnalyticsAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        syncedWithMm2At: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        mm2Id: {
                            type: string;
                            description: string;
                            nullable: boolean;
                        };
                    };
                };
                nullable: boolean;
            };
            contacts: {
                type: string;
                items: {
                    type: string;
                    properties: {};
                };
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
            addedToBgVaultAt: {
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
                        syncedWithMm2At: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                    };
                };
                nullable: boolean;
            };
            groupIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            parentGroupIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            externalGroupIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            pronounsTextIds: {
                type: string;
                items: {
                    type: string;
                };
                nullable: boolean;
            };
            groupMemberships: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                            maxLength: number;
                        };
                        groupId: {
                            type: string;
                            maxLength: number;
                        };
                        groupIdent: {
                            type: string;
                        };
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                        roles: {
                            type: string;
                            items: {
                                type: string;
                                enum: string[];
                            };
                        };
                    };
                };
            };
            seeksHelp: {
                type: string;
                nullable: boolean;
            };
            offersHelp: {
                type: string;
                nullable: boolean;
            };
            birthYear: {
                type: string;
                nullable: boolean;
            };
            ethnicity: {
                type: string;
                nullable: boolean;
            };
            educationLevelTextId: {
                type: string;
                nullable: boolean;
            };
            personalBio: {
                type: string;
                nullable: boolean;
            };
            yearsManagementExperience: {
                type: string;
                nullable: boolean;
            };
            yearsOwnershipExperience: {
                type: string;
                nullable: boolean;
            };
            academicExperienceIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
                nullable: boolean;
            };
            academicExperiences: {
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
                        institutionName: {
                            type: string;
                        };
                        degreeType: {
                            type: string;
                            description: string;
                            nullable: boolean;
                        };
                        fieldOfStudy: {
                            type: string;
                            description: string;
                            nullable: boolean;
                        };
                        startDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        endDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                    };
                };
                nullable: boolean;
            };
            genderSelfDescribed: {
                type: string;
                description: string;
                nullable: boolean;
            };
            businessExperienceIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
                nullable: boolean;
            };
            businessExperiences: {
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
                        businessName: {
                            type: string;
                        };
                        jobTitle: {
                            type: string;
                            nullable: boolean;
                        };
                        city: {
                            type: string;
                            nullable: boolean;
                        };
                        state: {
                            type: string;
                            nullable: boolean;
                        };
                        country: {
                            type: string;
                            nullable: boolean;
                        };
                        startDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        endDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                    };
                };
                nullable: boolean;
            };
            cityOfOrigin: {
                type: string;
                nullable: boolean;
            };
            regionOfOrigin: {
                type: string;
                nullable: boolean;
            };
            countryOfOriginTextId: {
                type: string;
                nullable: boolean;
            };
            isOnVacation: {
                type: string;
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
            profileRoleHistory: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        newRole: {
                            type: string;
                            enum: string[];
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
                nullable: boolean;
            };
            ssoIdp: {
                type: string;
                nullable: boolean;
            };
            originatedInMm2: {
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
            mm2PasswordHash: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mm2Id: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mm2PhotoOriginal: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mm2BasicAccountCompleted: {
                type: string;
                description: string;
                nullable: boolean;
            };
            hasSignedInToMm3: {
                type: string;
                description: string;
                nullable: boolean;
            };
            hasSignedInToMm2: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mentor: {
                type: string;
                description: string;
                properties: {
                    expertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    additionalExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    industriesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    mm2ExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    mm2IndustriesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    helpICanOffer: {
                        type: string;
                        nullable: boolean;
                    };
                    expectationsForMentees: {
                        type: string;
                        nullable: boolean;
                    };
                    menteePreparationInstructions: {
                        type: string;
                        nullable: boolean;
                    };
                    endorsements: {
                        type: string;
                        nullable: boolean;
                    };
                    reasonsForMentoring: {
                        type: string;
                        nullable: boolean;
                    };
                    howICanHelpMentees: {
                        type: string;
                        nullable: boolean;
                    };
                };
                nullable: boolean;
            };
            mentee: {
                type: string;
                description: string;
                properties: {
                    soughtExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    additionalSoughtExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    industryTextId: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    mm2SoughtExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    mm2IndustryTextId: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    actionsTaken: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    currentChallenges: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    futureGoals: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    motivationsForMentorship: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    reasonsForStartingBusiness: {
                        type: string;
                        nullable: boolean;
                    };
                    howCanMentorSupportMe: {
                        type: string;
                        nullable: boolean;
                    };
                };
                nullable: boolean;
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
            emailSource: {
                type: string;
                description: string;
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
            authType: {
                type: string;
                enum: string[];
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
            isTestUser: {
                type: string;
                nullable: boolean;
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
            userDevices: {
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
                        deviceUuid: {
                            type: string;
                        };
                        deviceType: {
                            type: string;
                            nullable: boolean;
                        };
                        trusted: {
                            type: string;
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
                        brand: {
                            type: string;
                            nullable: boolean;
                        };
                        model: {
                            type: string;
                            nullable: boolean;
                        };
                        isTablet: {
                            type: string;
                        };
                        screenWidth: {
                            type: string;
                        };
                        screenHeight: {
                            type: string;
                        };
                        os: {
                            type: string;
                            nullable: boolean;
                        };
                        osVersion: {
                            type: string;
                            nullable: boolean;
                        };
                        timezone: {
                            type: string;
                            nullable: boolean;
                        };
                        ipAddress: {
                            type: string;
                            nullable: boolean;
                        };
                        consumer: {
                            type: string;
                            nullable: boolean;
                        };
                        consumerVersion: {
                            type: string;
                            nullable: boolean;
                        };
                        acceptedLanguage: {
                            type: string;
                            nullable: boolean;
                        };
                        locale: {
                            type: string;
                            nullable: boolean;
                        };
                        countryCode: {
                            type: string;
                            nullable: boolean;
                        };
                        appVersion: {
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
                        sessionStartedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        sessionEndedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        identityProvider: {
                            type: string;
                            enum: string[];
                            nullable: boolean;
                        };
                        oauthProfileUrl: {
                            type: string;
                            nullable: boolean;
                        };
                        trustedAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                    };
                };
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
                        syncedToAnalyticsAt: {
                            type: string;
                            format: string;
                            nullable: boolean;
                        };
                        syncedWithMm2At: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        mm2Id: {
                            type: string;
                            description: string;
                            nullable: boolean;
                        };
                    };
                };
                nullable: boolean;
            };
            contacts: {
                type: string;
                items: {
                    type: string;
                    properties: {};
                };
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
            addedToBgVaultAt: {
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
                        syncedWithMm2At: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                    };
                };
                nullable: boolean;
            };
            groupIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            parentGroupIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            externalGroupIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            pronounsTextIds: {
                type: string;
                items: {
                    type: string;
                };
                nullable: boolean;
            };
            groupMemberships: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                            maxLength: number;
                        };
                        groupId: {
                            type: string;
                            maxLength: number;
                        };
                        groupIdent: {
                            type: string;
                        };
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                        roles: {
                            type: string;
                            items: {
                                type: string;
                                enum: string[];
                            };
                        };
                    };
                };
            };
            seeksHelp: {
                type: string;
                nullable: boolean;
            };
            offersHelp: {
                type: string;
                nullable: boolean;
            };
            birthYear: {
                type: string;
                nullable: boolean;
            };
            ethnicity: {
                type: string;
                nullable: boolean;
            };
            educationLevelTextId: {
                type: string;
                nullable: boolean;
            };
            personalBio: {
                type: string;
                nullable: boolean;
            };
            yearsManagementExperience: {
                type: string;
                nullable: boolean;
            };
            yearsOwnershipExperience: {
                type: string;
                nullable: boolean;
            };
            academicExperienceIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
                nullable: boolean;
            };
            academicExperiences: {
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
                        institutionName: {
                            type: string;
                        };
                        degreeType: {
                            type: string;
                            description: string;
                            nullable: boolean;
                        };
                        fieldOfStudy: {
                            type: string;
                            description: string;
                            nullable: boolean;
                        };
                        startDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        endDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                    };
                };
                nullable: boolean;
            };
            genderSelfDescribed: {
                type: string;
                description: string;
                nullable: boolean;
            };
            businessExperienceIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
                nullable: boolean;
            };
            businessExperiences: {
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
                        businessName: {
                            type: string;
                        };
                        jobTitle: {
                            type: string;
                            nullable: boolean;
                        };
                        city: {
                            type: string;
                            nullable: boolean;
                        };
                        state: {
                            type: string;
                            nullable: boolean;
                        };
                        country: {
                            type: string;
                            nullable: boolean;
                        };
                        startDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        endDate: {
                            type: string;
                            description: string;
                            format: string;
                            nullable: boolean;
                        };
                        userId: {
                            type: string;
                            maxLength: number;
                        };
                    };
                };
                nullable: boolean;
            };
            cityOfOrigin: {
                type: string;
                nullable: boolean;
            };
            regionOfOrigin: {
                type: string;
                nullable: boolean;
            };
            countryOfOriginTextId: {
                type: string;
                nullable: boolean;
            };
            isOnVacation: {
                type: string;
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
            profileRoleHistory: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        newRole: {
                            type: string;
                            enum: string[];
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
                nullable: boolean;
            };
            ssoIdp: {
                type: string;
                nullable: boolean;
            };
            originatedInMm2: {
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
            mm2PasswordHash: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mm2Id: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mm2PhotoOriginal: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mm2BasicAccountCompleted: {
                type: string;
                description: string;
                nullable: boolean;
            };
            hasSignedInToMm3: {
                type: string;
                description: string;
                nullable: boolean;
            };
            hasSignedInToMm2: {
                type: string;
                description: string;
                nullable: boolean;
            };
            mentor: {
                type: string;
                description: string;
                properties: {
                    expertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    additionalExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    industriesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    mm2ExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    mm2IndustriesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    helpICanOffer: {
                        type: string;
                        nullable: boolean;
                    };
                    expectationsForMentees: {
                        type: string;
                        nullable: boolean;
                    };
                    menteePreparationInstructions: {
                        type: string;
                        nullable: boolean;
                    };
                    endorsements: {
                        type: string;
                        nullable: boolean;
                    };
                    reasonsForMentoring: {
                        type: string;
                        nullable: boolean;
                    };
                    howICanHelpMentees: {
                        type: string;
                        nullable: boolean;
                    };
                };
                nullable: boolean;
            };
            mentee: {
                type: string;
                description: string;
                properties: {
                    soughtExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    additionalSoughtExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    industryTextId: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    mm2SoughtExpertisesTextIds: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        nullable: boolean;
                    };
                    mm2IndustryTextId: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    actionsTaken: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    currentChallenges: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    futureGoals: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    motivationsForMentorship: {
                        type: string;
                        description: string;
                        nullable: boolean;
                    };
                    reasonsForStartingBusiness: {
                        type: string;
                        nullable: boolean;
                    };
                    howCanMentorSupportMe: {
                        type: string;
                        nullable: boolean;
                    };
                };
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
                nullable: boolean;
            };
        };
        required: string[];
    };
};
export default schema;
