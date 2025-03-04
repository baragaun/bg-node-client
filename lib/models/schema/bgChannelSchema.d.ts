export declare const BgChannelSchema: {
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
