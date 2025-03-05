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
            unseenMessages: {};
            unseenArchivedMessages: {};
            latestMessages: {};
            latestArchivedMessages: {};
            pendingInvitations: {};
            invitations: {};
            itemIdHash: {
                description: string;
                type: string;
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
        };
        required: string[];
    };
};
export default schema;
