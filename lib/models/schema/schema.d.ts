declare const schema: {
    Channel: {
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
            channelType: {};
            participants: {
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
                                nickname: {
                                    type: string;
                                };
                                avatarUrl: {
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
                        role: {};
                        suspendedAt: {
                            type: string;
                            format: string;
                        };
                        suspendedBy: {
                            type: string;
                            maxLength: number;
                        };
                    };
                };
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
                        };
                    };
                };
            };
            userIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
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
                description: string;
                type: string;
            };
            syncedWithMm2At: {
                description: string;
                type: string;
                format: string;
            };
        };
        required: string[];
    };
    ChannelInvitation: {
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
            metadata: {};
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
            status: {};
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
                description: string;
                type: string;
            };
            mm2Id: {
                description: string;
                type: string;
            };
            syncedWithMm2At: {
                description: string;
                type: string;
                format: string;
            };
        };
        required: string[];
    };
    ChannelMessage: {
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
            metadata: {};
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
            channelMessageType: {};
            messageText: {
                type: string;
            };
            statuses: {};
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
                description: string;
                type: string;
            };
            mm2Id: {
                description: string;
                type: string;
            };
            syncedWithMm2At: {
                description: string;
                type: string;
                format: string;
            };
        };
        required: string[];
    };
    ChannelParticipant: {
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
                    nickname: {
                        type: string;
                    };
                    avatarUrl: {
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
            role: {};
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
    Contact: {
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
            metadata: {};
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
            metadata: {};
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
                description: string;
                type: string;
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
            websites: {};
            authType: {};
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
            selectedUiLanguageTextId: {};
            fallbackUiLanguageTextId: {};
            discoverable: {
                description: string;
                type: string;
            };
            roles: {};
            appFeatures: {};
            source: {
                type: string;
            };
            timezone: {
                type: string;
            };
            preferences: {};
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
            userDevices: {};
            userBlocks: {};
            contacts: {};
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
            addedToBgVaultAt: {
                type: string;
                format: string;
            };
            companyIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            companies: {};
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
            };
            groupMemberships: {};
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
                    maxLength: number;
                };
            };
            academicExperiences: {};
            genderSelfDescribed: {
                description: string;
                type: string;
            };
            businessExperienceIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            businessExperiences: {};
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
            avatarAsset: {};
            profileRoleHistory: {};
            ssoIdp: {
                type: string;
            };
            originatedInMm2: {
                description: string;
                type: string;
            };
            syncedWithMm2At: {
                description: string;
                type: string;
                format: string;
            };
            mm2PasswordHash: {
                description: string;
                type: string;
            };
            mm2Id: {
                description: string;
                type: string;
            };
            mm2PhotoOriginal: {
                description: string;
                type: string;
            };
            mm2BasicAccountCompleted: {
                description: string;
                type: string;
            };
            hasSignedInToMm3: {
                description: string;
                type: string;
            };
            hasSignedInToMm2: {
                description: string;
                type: string;
            };
            mentor: {
                description: string;
            };
            mentee: {
                description: string;
            };
        };
        required: string[];
    };
    User: {
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
            metadata: {};
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
                description: string;
                type: string;
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
            websites: {};
            authType: {};
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
            selectedUiLanguageTextId: {};
            fallbackUiLanguageTextId: {};
            discoverable: {
                description: string;
                type: string;
            };
            roles: {};
            appFeatures: {};
            source: {
                type: string;
            };
            timezone: {
                type: string;
            };
            preferences: {};
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
            userDevices: {};
            userBlocks: {};
            contacts: {};
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
            addedToBgVaultAt: {
                type: string;
                format: string;
            };
            companyIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            companies: {};
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
            };
            groupMemberships: {};
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
                    maxLength: number;
                };
            };
            academicExperiences: {};
            genderSelfDescribed: {
                description: string;
                type: string;
            };
            businessExperienceIds: {
                type: string;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            businessExperiences: {};
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
            avatarAsset: {};
            profileRoleHistory: {};
            ssoIdp: {
                type: string;
            };
            originatedInMm2: {
                description: string;
                type: string;
            };
            syncedWithMm2At: {
                description: string;
                type: string;
                format: string;
            };
            mm2PasswordHash: {
                description: string;
                type: string;
            };
            mm2Id: {
                description: string;
                type: string;
            };
            mm2PhotoOriginal: {
                description: string;
                type: string;
            };
            mm2BasicAccountCompleted: {
                description: string;
                type: string;
            };
            hasSignedInToMm3: {
                description: string;
                type: string;
            };
            hasSignedInToMm2: {
                description: string;
                type: string;
            };
            mentor: {
                description: string;
            };
            mentee: {
                description: string;
            };
        };
        required: string[];
    };
    UserInbox: {
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
            metadata: {};
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
            channels: {};
        };
        required: string[];
    };
};
export default schema;
